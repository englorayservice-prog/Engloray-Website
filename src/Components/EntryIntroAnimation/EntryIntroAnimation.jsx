import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EntryIntroAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const EntryIntroAnimation = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        if (!canvasRef.current || !wrapperRef.current) return;

        // Ensure animations don't conflict with existing ones if re-mounted
        ScrollTrigger.refresh();

        const scene = new THREE.Scene();

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

        const earthGroup = new THREE.Group();
        earthGroup.position.z = -180;
        earthGroup.position.y = -100;
        earthGroup.scale.set(1.5, 1.5, 1.5);
        scene.add(earthGroup);

        const textureLoader = new THREE.TextureLoader();
        textureLoader.setCrossOrigin('anonymous');

        const earthMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.6,
            metalness: 0.1,
            wireframe: false
        });

        textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg', (map) => {
            earthMat.map = map;
            earthMat.color.setHex(0xffffff);
            earthMat.needsUpdate = true;
        });

        const earthGeo = new THREE.SphereGeometry(15, 64, 64);
        const earthMesh = new THREE.Mesh(earthGeo, earthMat);
        earthGroup.add(earthMesh);

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
                float glow = exp(-d * 6.0);
                float halo = exp(-d * 2.5) * 0.4;
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

        const getStarColor = () => {
            const t = Math.random();
            if (t > 0.96) return { r: 0.6, g: 0.7, b: 1.0 };
            if (t > 0.90) return { r: 0.75, g: 0.85, b: 1.0 };
            if (t > 0.78) return { r: 1.0, g: 1.0, b: 1.0 };
            if (t > 0.60) return { r: 1.0, g: 0.97, b: 0.78 };
            if (t > 0.40) return { r: 1.0, g: 0.90, b: 0.55 };
            if (t > 0.22) return { r: 1.0, g: 0.70, b: 0.35 };
            return { r: 1.0, g: 0.45, b: 0.25 };
        };

        scene.add(buildStarLayer(10000,
            () => {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                const r = 600 + Math.random() * 400;
                return { x: r * Math.sin(phi) * Math.cos(theta), y: r * Math.sin(phi) * Math.sin(theta), z: r * Math.cos(phi) - 150 };
            },
            () => 0.3 + Math.random() * 0.7,
            getStarColor
        ));

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

        scene.add(buildStarLayer(2500,
            () => ({
                x: 120 + Math.random() * 350,
                y: (Math.random() - 0.5) * 400,
                z: -80 - Math.random() * 350
            }),
            () => 0.5 + Math.random() * 1.8,
            getStarColor
        ));

        scene.add(buildStarLayer(120,
            () => ({
                x: (Math.random() - 0.5) * 700,
                y: (Math.random() - 0.5) * 500,
                z: -80 - Math.random() * 300
            }),
            () => 2.5 + Math.random() * 3.0,
            getStarColor
        ));

        scene.add(buildStarLayer(30,
            () => ({
                x: 180 + Math.random() * 250,
                y: (Math.random() - 0.5) * 300,
                z: -100 - Math.random() * 200
            }),
            () => 3.0 + Math.random() * 4.0,
            () => ({ r: 1.0, g: 1.0, b: 1.0 })
        ));

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
                return { r: b, g: b * 0.92, b: b * 0.78 };
            }
        ));

        scene.add(buildStarLayer(800,
            () => {
                const u = Math.random(); const v = Math.random();
                const theta = 2 * Math.PI * u; const phi = Math.acos(2 * v - 1);
                const r = Math.pow(Math.random(), 2) * 30;
                return { x: 160 + r * Math.sin(phi) * Math.cos(theta), y: 80 + r * Math.sin(phi) * Math.sin(theta), z: -200 + r * Math.cos(phi) };
            },
            () => 0.4 + Math.random() * 1.2,
            () => {
                const b = 0.8 + Math.random() * 0.2;
                return { r: b, g: b * 0.88, b: b * 0.6 };
            }
        ));

        [
            { x: 155, y: 55, z: -220, r: 255, g: 100, b: 40, scaleX: 120, scaleY: 55, scaleZ: 80, count: 4000 },
            { x: 275, y: -45, z: -250, r: 60, g: 160, b: 255, scaleX: 110, scaleY: 50, scaleZ: 70, count: 3500 },
            { x: 210, y: 110, z: -290, r: 200, g: 50, b: 210, scaleX: 90, scaleY: 40, scaleZ: 65, count: 2800 },
            { x: -155, y: -25, z: -300, r: 30, g: 90, b: 255, scaleX: 130, scaleY: 60, scaleZ: 90, count: 4000 },
            { x: -95, y: 125, z: -260, r: 255, g: 170, b: 40, scaleX: 90, scaleY: 40, scaleZ: 60, count: 2500 },
            { x: 25, y: -125, z: -195, r: 160, g: 25, b: 160, scaleX: 80, scaleY: 35, scaleZ: 55, count: 2000 },
        ].forEach(({ x, y, z, r, g, b, scaleX, scaleY, scaleZ, count }) => {
            const nGeo = new THREE.BufferGeometry();
            const nPos = new Float32Array(count * 3);
            for (let i = 0; i < count; i++) {
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
                size: 2.5,
                color: new THREE.Color(r / 255, g / 255, b / 255),
                map: makeGlowTex(r, g, b, 1.0),
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthWrite: false,
                opacity: 0.04
            })));
        });

        const makeGalaxyTex = (cr, cg, cb) => {
            const c = document.createElement('canvas'); c.width = 256; c.height = 256;
            const cx = c.getContext('2d');
            cx.clearRect(0, 0, 256, 256);
            const halo = cx.createRadialGradient(128, 128, 0, 128, 128, 120);
            halo.addColorStop(0, `rgba(${cr},${cg},${cb},0.0)`);
            halo.addColorStop(0.3, `rgba(${cr},${cg},${cb},0.0)`);
            halo.addColorStop(0.55, `rgba(${cr},${cg},${cb},0.12)`);
            halo.addColorStop(0.78, `rgba(${cr},${cg},${cb},0.06)`);
            halo.addColorStop(1.0, `rgba(${cr},${cg},${cb},0.0)`);
            cx.fillStyle = halo; cx.fillRect(0, 0, 256, 256);
            const core = cx.createRadialGradient(128, 128, 0, 128, 128, 60);
            core.addColorStop(0, `rgba(${cr},${cg},${cb},0.65)`);
            core.addColorStop(0.3, `rgba(${cr},${cg},${cb},0.35)`);
            core.addColorStop(0.6, `rgba(${cr},${cg},${cb},0.12)`);
            core.addColorStop(1.0, `rgba(${cr},${cg},${cb},0.0)`);
            cx.fillStyle = core; cx.fillRect(0, 0, 256, 256);
            return new THREE.CanvasTexture(c);
        };

        const g1 = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGalaxyTex(220, 185, 120), blending: THREE.AdditiveBlending, transparent: true, opacity: 0.6, depthWrite: false }));
        g1.position.set(-230, 110, -330); g1.scale.set(100, 100, 1);
        scene.add(g1);
        const g2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGalaxyTex(100, 140, 220), blending: THREE.AdditiveBlending, transparent: true, opacity: 0.55, depthWrite: false }));
        g2.position.set(270, -95, -340); g2.scale.set(90, 90, 1);
        scene.add(g2);
        const g3 = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGalaxyTex(210, 175, 110), blending: THREE.AdditiveBlending, transparent: true, opacity: 0.45, depthWrite: false }));
        g3.position.set(310, 145, -370); g3.scale.set(60, 60, 1);
        scene.add(g3);

        const dustGeo = new THREE.BufferGeometry();
        const dustPos = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000; i++) {
            dustPos[i * 3] = (Math.random() - 0.5) * 700;
            dustPos[i * 3 + 1] = (Math.random() - 0.5) * 30;
            dustPos[i * 3 + 2] = -100 - Math.random() * 300;
        }
        dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
        scene.add(new THREE.Points(dustGeo, new THREE.PointsMaterial({
            size: 10, color: 0x553322,
            map: makeGlowTex(80, 50, 30, 0.08),
            blending: THREE.NormalBlending, transparent: true,
            depthWrite: false, opacity: 0.12
        })));


        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(50, 20, 30);
        scene.add(dirLight);

        const pointLight = new THREE.PointLight(0xff0000, 2, 100);
        pointLight.position.set(-20, 0, -100);
        scene.add(pointLight);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            ScrollTrigger.refresh();
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

        // Use the wrapper as the scroller so scrolling works while overflowing is hidden on the main body
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-spacer",
                scroller: wrapperRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onLeave: () => {
                    // Trigger exit animation
                    setIsFadingOut(true);
                    setTimeout(() => {
                        if (onComplete) onComplete();
                    }, 200); // Super fast unmount
                }
            }
        });

        tl.to('.intro-screen', {
            scale: 12,
            opacity: 0,
            transformOrigin: "center 58%",
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
            duration: 1.0,
            ease: "power2.inOut"
        }, 2);

        tl.to(camera.position, {
            z: -700,
            duration: 0.3,
            ease: "power2.in"
        }, 3.0);

        tl.to('#webgl-canvas', {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in"
        }, 2.8);

        tl.to('.flash-overlay', {
            opacity: 1,
            duration: 0.6,
            ease: "power2.in"
        }, 2.4);

        const clock = new THREE.Clock();
        let animationFrameId;
        function animate() {
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
        <div
            className="entry-intro-wrapper"
            ref={wrapperRef}
            style={{
                opacity: isFadingOut ? 0 : 1,
                transition: 'opacity 0.2s ease-in-out',
                pointerEvents: isFadingOut ? 'none' : 'auto'
            }}
        >
            <div className="flash-overlay"></div>
            <canvas id="webgl-canvas" ref={canvasRef}></canvas>

            <main className="ui-layer">
                <section className="screen intro-screen">
                    <div className="content-center">
                        <div className="word-sequence">
                            <p className="neon-line-1">STEP INTO THE WORLD OF</p>
                            <p className="neon-line-2">ENGLORAY</p>
                        </div>
                    </div>
                    <div className="scroll-indicator">
                        <p>SCROLL TO EXPLORE</p>
                    </div>
                </section>
            </main>

            <div className="scroll-spacer"></div>
        </div>
    );
}

export default EntryIntroAnimation;
