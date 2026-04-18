import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        // SCENE SETUP
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.001);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 10;
        camera.position.y = 0;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // 2. The Earth
        const earthGroup = new THREE.Group();
        earthGroup.position.z = -180;  // Push further back
        earthGroup.position.y = -100;  // Start lower down
        earthGroup.scale.set(1.5, 1.5, 1.5); // Smaller initial size = zoomed out look
        scene.add(earthGroup);

        const textureLoader = new THREE.TextureLoader();
        textureLoader.setCrossOrigin('anonymous');

        const earthMat = new THREE.MeshStandardMaterial({
            color: 0xffffff, // White so the blue marble texture shows naturally
            roughness: 0.6,
            metalness: 0.1,
            wireframe: false
        });

        textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg', (map) => {
            earthMat.map = map;
            earthMat.color.setHex(0xffffff); // Keep natural texture color — no red tint
            earthMat.needsUpdate = true;
        });

        const earthGeo = new THREE.SphereGeometry(15, 64, 64);
        const earthMesh = new THREE.Mesh(earthGeo, earthMat);
        earthGroup.add(earthMesh);

        // Fresnel-based atmospheric rim glow — glows ONLY at the edges, transparent in center
        const atmosphereGeo = new THREE.SphereGeometry(17, 64, 64);
        const atmosphereMat = new THREE.ShaderMaterial({
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vNormal;
                void main() {
                    // Fresnel: glow strongest at edges (where normal faces away from camera)
                    float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                    intensity = clamp(intensity, 0.0, 1.0);
                    gl_FragColor = vec4(1.0, 0.15, 0.0, intensity * 1.2);
                }
            `,
            blending: THREE.AdditiveBlending,
            side: THREE.FrontSide,
            transparent: true,
            depthWrite: false
        });
        const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
        earthGroup.add(atmosphereMesh);

        // ============================================================
        // PHOTO-REALISTIC GALAXY SCENE
        // ============================================================

        // -- Shared: soft glow textures
        const makeGlowTex = (r, g, b, alpha = 1.0) => {
            const c = document.createElement('canvas');
            c.width = 64; c.height = 64;
            const cx = c.getContext('2d');
            const gr = cx.createRadialGradient(32, 32, 0, 32, 32, 32);
            gr.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
            gr.addColorStop(0.25, `rgba(${r},${g},${b},${alpha * 0.7})`);
            gr.addColorStop(0.6, `rgba(${r},${g},${b},${alpha * 0.2})`);
            gr.addColorStop(1, 'rgba(0,0,0,0)');
            cx.fillStyle = gr; cx.fillRect(0, 0, 64, 64);
            return new THREE.CanvasTexture(c);
        };

        // -- Shared: per-vertex-size ShaderMaterial for realistic stars
        const starVertShader = `
            attribute float aSize;
            attribute vec3 aColor;
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
                vColor = aColor;
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = aSize * (280.0 / -mv.z);
                gl_PointSize = clamp(gl_PointSize, 0.5, 12.0);
                vAlpha = clamp(aSize / 3.0, 0.3, 1.0);
                gl_Position = projectionMatrix * mv;
            }
        `;
        const starFragShader = `
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
                vec2 uv = gl_PointCoord - 0.5;
                float d = length(uv);
                if (d > 0.5) discard;
                float glow = exp(-d * 6.0);        // tight bright core
                float halo = exp(-d * 2.5) * 0.4;  // soft outer halo
                float alpha = (glow + halo) * vAlpha;
                gl_FragColor = vec4(vColor, alpha);
            }
        `;

        const buildStarLayer = (count, positionFn, sizeFn, colorFn) => {
            const geo = new THREE.BufferGeometry();
            const pos = new Float32Array(count * 3);
            const col = new Float32Array(count * 3);
            const sz = new Float32Array(count);
            for (let i = 0; i < count; i++) {
                const p = positionFn(i);
                pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z;
                const c = colorFn(i);
                col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
                sz[i] = sizeFn(i);
            }
            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
            geo.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));
            const mat = new THREE.ShaderMaterial({
                vertexShader: starVertShader,
                fragmentShader: starFragShader,
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthWrite: false,
            });
            return new THREE.Points(geo, mat);
        };

        // Realistic star color picker
        const getStarColor = () => {
            const t = Math.random();
            if (t > 0.96) return { r: 0.6, g: 0.7, b: 1.0 }; // O-type: bright blue
            if (t > 0.90) return { r: 0.75, g: 0.85, b: 1.0 }; // B-type: blue-white
            if (t > 0.78) return { r: 1.0, g: 1.0, b: 1.0 }; // A-type: white
            if (t > 0.60) return { r: 1.0, g: 0.97, b: 0.78 }; // F-type: yellow-white
            if (t > 0.40) return { r: 1.0, g: 0.90, b: 0.55 }; // G-type: yellow (Sun-like)
            if (t > 0.22) return { r: 1.0, g: 0.70, b: 0.35 }; // K-type: orange
            return { r: 1.0, g: 0.45, b: 0.25 };    // M-type: red dwarf
        };

        // --- 1. DEEP BACKGROUND STARS (10,000) — fills the far void
        scene.add(buildStarLayer(10000,
            () => {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                const r = 600 + Math.random() * 400;
                return { x: r * Math.sin(phi) * Math.cos(theta), y: r * Math.sin(phi) * Math.sin(theta), z: r * Math.cos(phi) - 150 };
            },
            () => 0.3 + Math.random() * 0.7,   // tiny, varied
            getStarColor
        ));

        // --- 2. MID-FIELD STARS (7,000) — main visible stars spread evenly
        scene.add(buildStarLayer(7000,
            () => {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                const r = 150 + Math.random() * 300;
                return { x: r * Math.sin(phi) * Math.cos(theta), y: r * Math.sin(phi) * Math.sin(theta), z: r * Math.cos(phi) - 150 };
            },
            () => 0.5 + Math.random() * 2.0,
            getStarColor
        ));

        // --- 2b. RIGHT-SIDE DEDICATED STARS — fills the empty right region
        scene.add(buildStarLayer(2500,
            () => ({
                x: 120 + Math.random() * 350,   // X > 0  = right half
                y: (Math.random() - 0.5) * 400,
                z: -80 - Math.random() * 350
            }),
            () => 0.5 + Math.random() * 1.8,
            getStarColor
        ));

        // --- 3. HERO STARS (120) — large prominent stars spread across full scene
        scene.add(buildStarLayer(120,
            () => ({
                x: (Math.random() - 0.5) * 700,   // full width coverage
                y: (Math.random() - 0.5) * 500,
                z: -80 - Math.random() * 300
            }),
            () => 2.5 + Math.random() * 3.0,
            getStarColor
        ));

        // --- 3b. RIGHT HERO STARS — 30 extra large bright stars only on right side
        scene.add(buildStarLayer(30,
            () => ({
                x: 180 + Math.random() * 250,
                y: (Math.random() - 0.5) * 300,
                z: -100 - Math.random() * 200
            }),
            () => 3.0 + Math.random() * 4.0,
            () => ({ r: 1.0, g: 1.0, b: 1.0 })
        ));

        // --- 4. MILKY WAY BAND (6,000) — diagonal dusty arc
        scene.add(buildStarLayer(6000,
            (i) => {
                const angle = (i / 6000) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
                const band = (Math.random() - 0.5) * 55;
                const r = 280 + Math.random() * 120;
                return { x: r * Math.cos(angle), y: band, z: r * Math.sin(angle) - 200 };
            },
            () => 0.3 + Math.random() * 0.6,
            () => {
                const b = 0.55 + Math.random() * 0.45;
                return { r: b, g: b * 0.92, b: b * 0.78 };  // warm milky tones
            }
        ));

        // --- 5. GLOBULAR STAR CLUSTER — tight ball of ancient stars (top-right area)
        scene.add(buildStarLayer(800,
            () => {
                const u = Math.random(); const v = Math.random();
                const theta = 2 * Math.PI * u; const phi = Math.acos(2 * v - 1);
                const r = Math.pow(Math.random(), 2) * 30; // concentrated center
                return { x: 160 + r * Math.sin(phi) * Math.cos(theta), y: 80 + r * Math.sin(phi) * Math.sin(theta), z: -200 + r * Math.cos(phi) };
            },
            () => 0.4 + Math.random() * 1.2,
            () => {
                const b = 0.8 + Math.random() * 0.2;
                return { r: b, g: b * 0.88, b: b * 0.6 }; // old population: yellowish
            }
        ));

        // --- 6. NEBULA CLOUDS — smooth wispy gas clouds (many tiny particles)
        // KEY: additive blending on tiny low-opacity particles = smooth cloud look
        [
            { x: 155, y: 55, z: -220, r: 255, g: 100, b: 40, scaleX: 120, scaleY: 55, scaleZ: 80, count: 4000 }, // right: orange emission
            { x: 275, y: -45, z: -250, r: 60, g: 160, b: 255, scaleX: 110, scaleY: 50, scaleZ: 70, count: 3500 }, // right: blue reflection
            { x: 210, y: 110, z: -290, r: 200, g: 50, b: 210, scaleX: 90, scaleY: 40, scaleZ: 65, count: 2800 }, // right: purple
            { x: -155, y: -25, z: -300, r: 30, g: 90, b: 255, scaleX: 130, scaleY: 60, scaleZ: 90, count: 4000 }, // left:  deep blue
            { x: -95, y: 125, z: -260, r: 255, g: 170, b: 40, scaleX: 90, scaleY: 40, scaleZ: 60, count: 2500 }, // left:  golden
            { x: 25, y: -125, z: -195, r: 160, g: 25, b: 160, scaleX: 80, scaleY: 35, scaleZ: 55, count: 2000 }, // center: violet
        ].forEach(({ x, y, z, r, g, b, scaleX, scaleY, scaleZ, count }) => {
            const nGeo = new THREE.BufferGeometry();
            const nPos = new Float32Array(count * 3);
            for (let i = 0; i < count; i++) {
                // Gaussian-like concentration toward the center using Box-Muller
                const u1 = Math.random(), u2 = Math.random();
                const gauss = Math.sqrt(-2 * Math.log(u1 + 0.0001)) * Math.cos(2 * Math.PI * u2);
                const gauss2 = Math.sqrt(-2 * Math.log(Math.random() + 0.0001)) * Math.cos(2 * Math.PI * Math.random());
                const gauss3 = Math.sqrt(-2 * Math.log(Math.random() + 0.0001)) * Math.cos(2 * Math.PI * Math.random());
                nPos[i * 3] = x + gauss * scaleX * 0.35;
                nPos[i * 3 + 1] = y + gauss2 * scaleY * 0.35;
                nPos[i * 3 + 2] = z + gauss3 * scaleZ * 0.35;
            }
            nGeo.setAttribute('position', new THREE.BufferAttribute(nPos, 3));
            scene.add(new THREE.Points(nGeo, new THREE.PointsMaterial({
                size: 2.5,                                        // tiny particles
                color: new THREE.Color(r / 255, g / 255, b / 255),
                map: makeGlowTex(r, g, b, 1.0),
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthWrite: false,
                opacity: 0.04                                     // very low — they blend together
            })));
        });

        // --- 7. DISTANT GALAXY SPRITES — properly blended soft elliptical smudges
        const makeGalaxyTex = (cr, cg, cb) => {
            // Square canvas — gradient fades to 0 before reaching any edge
            const c = document.createElement('canvas'); c.width = 256; c.height = 256;
            const cx = c.getContext('2d');
            cx.clearRect(0, 0, 256, 256);
            // Outer soft halo
            const halo = cx.createRadialGradient(128, 128, 0, 128, 128, 120);
            halo.addColorStop(0, `rgba(${cr},${cg},${cb},0.0)`);
            halo.addColorStop(0.3, `rgba(${cr},${cg},${cb},0.0)`);
            halo.addColorStop(0.55, `rgba(${cr},${cg},${cb},0.12)`);
            halo.addColorStop(0.78, `rgba(${cr},${cg},${cb},0.06)`);
            halo.addColorStop(1.0, `rgba(${cr},${cg},${cb},0.0)`);
            cx.fillStyle = halo; cx.fillRect(0, 0, 256, 256);
            // Bright core
            const core = cx.createRadialGradient(128, 128, 0, 128, 128, 60);
            core.addColorStop(0, `rgba(${cr},${cg},${cb},0.65)`);
            core.addColorStop(0.3, `rgba(${cr},${cg},${cb},0.35)`);
            core.addColorStop(0.6, `rgba(${cr},${cg},${cb},0.12)`);
            core.addColorStop(1.0, `rgba(${cr},${cg},${cb},0.0)`);
            cx.fillStyle = core; cx.fillRect(0, 0, 256, 256);
            return new THREE.CanvasTexture(c);
        };
        // Left galaxy — warm golden elliptical
        const g1 = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGalaxyTex(220, 185, 120), blending: THREE.AdditiveBlending, transparent: true, opacity: 0.6, depthWrite: false }));
        g1.position.set(-230, 110, -330); g1.scale.set(100, 100, 1);
        scene.add(g1);
        // Right-bottom galaxy — cool blue
        const g2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGalaxyTex(100, 140, 220), blending: THREE.AdditiveBlending, transparent: true, opacity: 0.55, depthWrite: false }));
        g2.position.set(270, -95, -340); g2.scale.set(90, 90, 1);
        scene.add(g2);
        // Top-right small galaxy — warm
        const g3 = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGalaxyTex(210, 175, 110), blending: THREE.AdditiveBlending, transparent: true, opacity: 0.45, depthWrite: false }));
        g3.position.set(310, 145, -370); g3.scale.set(60, 60, 1);
        scene.add(g3);


        // --- 8. COSMIC DUST LANE — diffuse dark/light lane across scene
        const dustGeo = new THREE.BufferGeometry();
        const dustPos = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000; i++) {
            dustPos[i * 3] = (Math.random() - 0.5) * 700;
            dustPos[i * 3 + 1] = (Math.random() - 0.5) * 30;   // very flat
            dustPos[i * 3 + 2] = -100 - Math.random() * 300;
        }
        dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
        scene.add(new THREE.Points(dustGeo, new THREE.PointsMaterial({
            size: 10, color: 0x553322,
            map: makeGlowTex(80, 50, 30, 0.08),
            blending: THREE.NormalBlending, transparent: true,
            depthWrite: false, opacity: 0.12
        })));
        // ============================================================
        // END GALAXY SCENE
        // ============================================================


        const gridGroup = new THREE.Group();
        gridGroup.position.z = -300;
        scene.add(gridGroup);

        const gridHelper = new THREE.GridHelper(400, 100, 0xff1a3c, 0x440011);
        gridHelper.position.y = -20;
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = 0;

        const topGrid = new THREE.GridHelper(400, 100, 0xff1a3c, 0x440011);
        topGrid.position.y = 20;
        topGrid.material.transparent = true;
        topGrid.material.opacity = 0;

        gridGroup.add(gridHelper);
        gridGroup.add(topGrid);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(50, 20, 30);
        scene.add(dirLight);

        const pointLight = new THREE.PointLight(0xff0000, 2, 100);
        pointLight.position.set(-20, 0, -100);
        scene.add(pointLight);

        const initFogCanvas = () => {
            const fogCanvas = document.getElementById('fog-canvas');
            if (fogCanvas) {
                fogCanvas.width = window.innerWidth;
                fogCanvas.height = window.innerHeight;
                const ctx = fogCanvas.getContext('2d');
                ctx.clearRect(0, 0, fogCanvas.width, fogCanvas.height);
            }
        };
        initFogCanvas();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            initFogCanvas();
        };

        window.addEventListener('resize', handleResize);

        // GSAP ANIMATIONS
        const introTl = gsap.timeline();

        gsap.set(['.neon-line-1', '.neon-line-2'], { visibility: 'visible', opacity: 0, scale: 0.8, y: 50 });

        introTl.to(['.neon-line-1', '.neon-line-2'], {
            duration: 1.2,
            opacity: 1,
            scale: 1.05,
            y: 0,
            stagger: 0.5,
            ease: "power3.out",
            delay: 0.5
        })
            .to(['.neon-line-1', '.neon-line-2'], {
                scale: 1,
                duration: 0.4,
                stagger: 0.5,
            }, "-=2.0")
            .to('.scroll-indicator', {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-spacer",
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        });

        tl.to('.intro-screen', {
            scale: 12,
            opacity: 0,
            transformOrigin: "center 58%", // Aligns the zoom center with the second line ("ENGLORAY")
            duration: 1.5,
            ease: "power2.in"
        }, 0);

        tl.to(camera.position, {
            z: -100,
            duration: 3,
            ease: "power1.inOut"
        }, 0);


        tl.to(earthGroup.rotation, {
            y: Math.PI * 2,
            x: 0.5,
            duration: 5,
            ease: "none"
        }, 0);

        tl.to(earthGroup.position, {
            y: 0,
            duration: 2,
            ease: "power2.out"
        }, 0);

        tl.to(earthGroup.scale, {
            x: 8,
            y: 8,
            z: 8,
            duration: 2,
            ease: "power2.inOut"
        }, 2);

        tl.to(camera.position, {
            z: -280,
            duration: 3,
            ease: "power2.inOut"
        }, 3);

        tl.to(earthMat, {
            transparent: true,
            opacity: 0,
            duration: 1
        }, 4);
        // atmosphereMat is a ShaderMaterial — opacity is handled via GLSL, skip tween

        tl.to([gridHelper.material, topGrid.material], {
            opacity: 0.6,
            duration: 2,
            ease: "power1.inOut"
        }, 4);

        // Fade WebGL Space to pitch black during the cloud formation
        tl.to('#webgl-canvas', {
            opacity: 0,
            duration: 1.5,
            ease: "power1.inOut"
        }, 3);

        // --- FOG / MIST TRANSITION ---
        // Canvas is always fully opaque, the clouds themselves physically form and evaporate
        gsap.set('.fog-layer', { opacity: 1 });

        // Start completely evaporated
        let fogObj = { baseFreq: 0.008, alphaOffset: -3.0 };

        // 1. Formation Phase: Clouds condense out of nowhere
        tl.to(fogObj, {
            baseFreq: 0.005,
            alphaOffset: -0.2, // form dense mist
            duration: 1.0,
            ease: "none",
            onUpdate: () => {
                targetFreq = fogObj.baseFreq;
                targetAlphaOffset = fogObj.alphaOffset;
            }
        }, 3);

        // 2. Dissipation Phase: Clouds evaporate into empty black space
        tl.to(fogObj, {
            baseFreq: 0.002,
            alphaOffset: -3.0, // evaporate back to zero
            duration: 1.2,
            ease: "none",
            onUpdate: () => {
                targetFreq = fogObj.baseFreq;
                targetAlphaOffset = fogObj.alphaOffset;
            }
        }, 4);

        // Content reveal tied to mist thinning
        tl.fromTo('.final-screen',
            { opacity: 0, scale: 1, visibility: 'visible' },
            { opacity: 1, duration: 0.8, ease: "none" },
            4
        );



        // RENDER LOOP
        const clock = new THREE.Clock();
        let animationFrameId;
        let targetFreq = 0.008;
        let currentFreq = 0.008;
        let targetAlphaOffset = -3.0;
        let currentAlphaOffset = -3.0;

        function animate() {
            const elapsedTime = clock.getElapsedTime();

            if (gridGroup.position.z < camera.position.z && gridHelper.material.opacity > 0) {
                gridHelper.position.z = (elapsedTime * 10) % 20;
                topGrid.position.z = (elapsedTime * 10) % 20;
            }

            // Lerp fog frequency and alpha to create smooth continuous evaporation
            if (Math.abs(targetFreq - currentFreq) > 0.00001 || Math.abs(targetAlphaOffset - currentAlphaOffset) > 0.01) {
                currentFreq += (targetFreq - currentFreq) * 0.05;
                currentAlphaOffset += (targetAlphaOffset - currentAlphaOffset) * 0.05;

                const turb = document.getElementById('mist-turb');
                if (turb) turb.setAttribute('baseFrequency', currentFreq);

                const matrix = document.getElementById('mist-alpha');
                if (matrix) {
                    matrix.setAttribute('values', `
                        0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 0 1
                        3.0 0 0 0 ${currentAlphaOffset}
                    `);
                }
            }

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef}>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <filter id="mist-filter">
                    {/* Cloud base structure - using lower frequency for larger volumes */}
                    <feTurbulence id="mist-turb" type="fractalNoise" baseFrequency="0.005" numOctaves="5" result="noise" />

                    {/* Add 3D volumetric light and shadow to the noise */}
                    <feDiffuseLighting in="noise" lighting-color="#e2e8f0" surfaceScale="5" result="light">
                        <feDistantLight azimuth="45" elevation="35" />
                    </feDiffuseLighting>

                    {/* High contrast alpha mask to create dense clumps and empty air */}
                    <feColorMatrix id="mist-alpha" type="matrix" values="
                        0 0 0 0 1
                        0 0 0 0 1
                        0 0 0 0 1
                        3.0 0 0 0 -3.0
                    " in="noise" result="alphaMask" />

                    {/* Mask the lit clouds with our alpha shapes */}
                    <feComposite operator="in" in="light" in2="alphaMask" result="volumetricClouds" />

                    {/* Place the bright clouds over the original dark mist canvas layer */}
                    <feComposite operator="over" in="volumetricClouds" in2="SourceGraphic" />
                </filter>
            </svg>
            <canvas id="fog-canvas" className="fog-layer"></canvas>
            <canvas id="webgl-canvas" ref={canvasRef}></canvas>

            <main className="ui-layer">
                <section className="screen intro-screen">
                    <div className="content-center">
                        <div className="word-sequence">
                            <span className="neon-line-1">STEP INTO THE WORLD OF</span>
                            <span className="neon-line-2">ENGLORAY</span>
                        </div>
                    </div>
                    <div className="scroll-indicator">
                        <p>SCROLL TO EXPLORE</p>
                        <div className="mouse-icon"></div>
                    </div>
                </section>

                <section className="screen final-screen">
                    <div className="content-center ecosystem-content">
                        <h2 className="title">ENGLORAY ECOSYSTEM</h2>
                        <div className="features">
                            <div className="feature-item">
                                <h3>TECHNOLOGY</h3>
                                <p>Next-gen digital infrastructure.</p>
                            </div>
                            <div className="feature-item">
                                <h3>LEARNING GENERATION</h3>
                                <p>Empowering the mind of tomorrow.</p>
                            </div>
                            <div className="feature-item">
                                <h3>RAYMART</h3>
                                <p>The universe of commerce.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="scroll-spacer"></div>
        </div>
    );
}

export default App;
