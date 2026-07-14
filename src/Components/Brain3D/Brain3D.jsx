import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function Brain3D({ scale = 1.3 }) {
  const containerRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let renderer, frameId, rotationTween, hoverTween, lineFadeTween;

    try {
      // 1. Detect Dimensions (fallback to parent if container hasn't styled yet)
      let width = container.clientWidth;
      let height = container.clientHeight;
      if (width === 0 || height === 0) {
        width = container.parentElement ? container.parentElement.clientWidth : 600;
        height = container.parentElement ? container.parentElement.clientHeight : 600;
      }
      if (width === 0) width = 600;
      if (height === 0) height = 600;

      console.log(`Initializing 3D Brain: Dimensions = ${width}x${height}`);

      // 2. Setup Scene, Camera, and WebGLRenderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 3.8); // Restored to reference position

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Ensure canvas element takes full size and is block-level
      renderer.domElement.style.display = 'block';
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      container.appendChild(renderer.domElement);

      // 3. Setup Lights (matching reference colors)
      const ambientLight = new THREE.AmbientLight(0x444444, 1.2);
      scene.add(ambientLight);

      const pointLightPurple = new THREE.PointLight(0xa855f7, 4.0, 50);
      pointLightPurple.position.set(10, 10, 10);
      scene.add(pointLightPurple);

      const pointLightCyan = new THREE.PointLight(0x06b6d4, 3.0, 50);
      pointLightCyan.position.set(-10, -10, -10);
      scene.add(pointLightCyan);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
      directionalLight.position.set(0, 5, 5);
      scene.add(directionalLight);

      // 4. Create Main Brain Group
      const brainGroup = new THREE.Group();
      brainGroup.scale.set(scale, scale, scale);
      scene.add(brainGroup);

      // 5. Generate Particle System Data
      const cerebrumCount = 12000;
      const cerebellumCount = 2000;
      const stemCount = 1000;
      const totalCount = cerebrumCount + cerebellumCount + stemCount;

      const positions = new Float32Array(totalCount * 3);
      const randoms = new Float32Array(totalCount * 4);
      const lobes = new Float32Array(totalCount);

      let index = 0;

      const getSphereCoords = (u, v) => {
        const x = Math.cos(u) * Math.cos(v);
        const y = Math.sin(u);
        const z = Math.cos(u) * Math.sin(v);
        return new THREE.Vector3(x, y, z);
      };

      // A. Cerebrum
      for (let i = 0; i < cerebrumCount; i++) {
        const u = (Math.random() - 0.5) * Math.PI;
        const v = (Math.random() - 0.5) * Math.PI * 2;

        const base = getSphereCoords(u, v);
        let x = base.x * 1.15;
        let y = base.y * 0.85;
        let z = base.z * 1.35;

        const gyri = Math.sin(u * 14) * Math.sin(v * 14) * 0.08 +
                     Math.cos(u * 28) * Math.cos(v * 28) * 0.03 +
                     Math.sin(u * 45) * Math.sin(v * 45) * 0.01;
        const r = 1.0 + gyri;

        x *= r;
        y *= r;
        z *= r;

        y *= (1.0 + 0.15 * z);

        const gap = 0.045;
        if (x > 0) {
          x += gap;
        } else {
          x -= gap;
        }

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        lobes[index] = 0.0;
        index++;
      }

      // B. Cerebellum
      for (let i = 0; i < cerebellumCount; i++) {
        const u = (Math.random() - 0.5) * Math.PI;
        const v = (Math.random() - 0.5) * Math.PI * 2;

        const base = getSphereCoords(u, v);
        let x = base.x * 0.7;
        let y = -0.5 + base.y * 0.35;
        let z = -0.65 + base.z * 0.45;

        const fold = Math.sin(y * 38) * 0.03;
        const r = 1.0 + fold;
        x *= r;
        y *= r;
        z *= r;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        lobes[index] = 1.0;
        index++;
      }

      // C. Brain Stem
      for (let i = 0; i < stemCount; i++) {
        const y = -0.5 - Math.random() * 0.7;
        const theta = Math.random() * Math.PI * 2;

        const radius = 0.16 + (y + 0.5) * 0.06 + Math.sin(y * 18) * 0.012;
        const x = radius * Math.cos(theta);
        const z = radius * Math.sin(theta) + 0.05;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        lobes[index] = 2.0;
        index++;
      }

      // D. Explosion Directions
      for (let i = 0; i < totalCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        const rx = Math.sin(phi) * Math.cos(theta);
        const ry = Math.sin(phi) * Math.sin(theta);
        const rz = Math.cos(phi);

        const speedOffset = Math.random() * 0.6 + 0.4;

        randoms[i * 4] = rx;
        randoms[i * 4 + 1] = ry;
        randoms[i * 4 + 2] = rz;
        randoms[i * 4 + 3] = speedOffset;
      }

      // E. Connection Lines
      const lineIndices = [];
      const maxLines = 1500;
      const distanceThreshold = 0.12;

      for (let i = 0; i < maxLines; i++) {
        const p1 = Math.floor(Math.random() * (cerebrumCount + cerebellumCount));
        const p2 = Math.floor(Math.random() * (cerebrumCount + cerebellumCount));

        if (p1 === p2) continue;

        const x1 = positions[p1 * 3];
        const y1 = positions[p1 * 3 + 1];
        const z1 = positions[p1 * 3 + 2];

        const x2 = positions[p2 * 3];
        const y2 = positions[p2 * 3 + 1];
        const z2 = positions[p2 * 3 + 2];

        const dx = x1 - x2;
        const dy = y1 - y2;
        const dz = z1 - z2;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < distanceThreshold * distanceThreshold) {
          lineIndices.push(p1, p2);
        }
      }

      // 6. Construct Points Mesh
      const pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      pointsGeometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 4));
      pointsGeometry.setAttribute('aLobe', new THREE.BufferAttribute(lobes, 1));

      const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          uniform float uTime;
          uniform float uHoverProgress;
          uniform vec3 uHoverPosition;
          uniform vec2 uMouse;

          attribute vec4 aRandom;
          attribute float aLobe;

          varying vec3 vPosition;
          varying float vLobe;
          varying float vDistToHover;

          void main() {
            vLobe = aLobe;
            vPosition = position;
            
            vec3 pos = position;
            
            // 1. Idle vibration
            float vibeTime = uTime * 4.0 + position.x * 3.0;
            vec3 vibe = vec3(
              sin(vibeTime) * 0.008,
              cos(vibeTime * 1.3) * 0.008,
              sin(vibeTime * 0.7) * 0.008
            );
            pos += vibe;
            
            // 2. Parallax warping
            pos.xy += uMouse * 0.08 * (1.0 - uHoverProgress);
            
            // 3. Hover collapse/explosion
            float dist = distance(position, uHoverPosition);
            vDistToHover = dist;
            
            vec3 blastDir = position - uHoverPosition;
            float blastLen = length(blastDir);
            if (blastLen > 0.0) {
              blastDir = normalize(blastDir);
            } else {
              blastDir = aRandom.xyz;
            }
            
            float blastForce = 2.4 / (dist * 2.5 + 0.4);
            vec3 blastPush = blastDir * blastForce * uHoverProgress * aRandom.w;
            
            vec3 drift = aRandom.xyz * uHoverProgress * 3.0 * aRandom.w;
            
            pos += blastPush + drift;
            
            if (uHoverProgress > 0.0) {
              float noiseScale = 1.8;
              pos.x += sin(pos.y * noiseScale + uTime * 2.0) * uHoverProgress * 0.25;
              pos.y += cos(pos.z * noiseScale + uTime * 2.2) * uHoverProgress * 0.25;
              pos.z += sin(pos.x * noiseScale + uTime * 1.8) * uHoverProgress * 0.25;
            }
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            float baseSize = 6.5;
            if (aLobe == 1.0) baseSize = 4.5;
            if (aLobe == 2.0) baseSize = 5.0;
            
            float sizeGlow = (2.2 / (dist + 0.45)) * uHoverProgress;
            
            // Protect against divide-by-zero
            float depthScale = 12.0 / max(-mvPosition.z, 0.001);
            gl_PointSize = (baseSize + sizeGlow * 16.0) * depthScale;
          }
        `,
        fragmentShader: `
          uniform float uHoverProgress;

          varying vec3 vPosition;
          varying float vLobe;
          varying float vDistToHover;

          void main() {
            vec2 circ = gl_PointCoord - vec2(0.5);
            float dist = length(circ);
            if (dist > 0.5) discard;
            
            float alpha = smoothstep(0.5, 0.05, dist);
            
            vec3 colCerebrum = mix(vec3(0.66, 0.33, 0.97), vec3(0.02, 0.71, 0.84), (vPosition.y + 0.85) / 1.7);
            vec3 colCerebellum = mix(vec3(0.12, 0.38, 0.92), vec3(0.02, 0.71, 0.84), (vPosition.y + 0.85) / 1.7);
            vec3 colStem = mix(vec3(0.42, 0.12, 0.82), vec3(0.12, 0.32, 0.92), (vPosition.y + 1.2) / 0.8);
            
            vec3 finalColor = colCerebrum;
            if (vLobe == 1.0) finalColor = colCerebellum;
            if (vLobe == 2.0) finalColor = colStem;
            
            float energyGlow = smoothstep(0.85, 0.0, vDistToHover) * uHoverProgress;
            
            finalColor = mix(finalColor, vec3(1.0, 1.0, 1.0), energyGlow * 0.8);
            finalColor = mix(finalColor, vec3(0.06, 0.92, 1.0), uHoverProgress * 0.35);
            
            gl_FragColor = vec4(finalColor, alpha * (0.85 + energyGlow * 0.15));
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
        uniforms: {
          uTime: { value: 0 },
          uHoverProgress: { value: 0 },
          uHoverPosition: { value: new THREE.Vector3() },
          uMouse: { value: new THREE.Vector2() },
        }
      });

      const points = new THREE.Points(pointsGeometry, shaderMaterial);
      brainGroup.add(points);

      // 7. Construct Line Segments Mesh
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      if (lineIndices.length > 0) {
        lineGeometry.setIndex(new THREE.Uint16BufferAttribute(lineIndices, 1));
      }

      const lineMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color('#3b82f6'),
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
        blending: THREE.NormalBlending,
      });

      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      brainGroup.add(lines);

      // 8. Setup Collider Shell
      const colliderGeometry = new THREE.SphereGeometry(1.45, 32, 32);
      const colliderMaterial = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.0,
        depthWrite: false,
      });
      const colliderMesh = new THREE.Mesh(colliderGeometry, colliderMaterial);
      brainGroup.add(colliderMesh);

      // 9. GSAP Rotation
      const rotState = { y: 0 };
      rotationTween = gsap.to(rotState, {
        y: Math.PI * 2,
        duration: 35,
        repeat: -1,
        ease: 'none',
        onUpdate: () => {
          brainGroup.rotation.y = rotState.y;
        }
      });

      // Progress object for hover transitions
      const progressObj = { value: 0 };

      // Helper to trigger hover animations directly (no React state updates)
      const triggerHoverAnims = (hovered) => {
        if (hoverTween) hoverTween.kill();
        if (lineFadeTween) lineFadeTween.kill();

        if (hovered) {
          hoverTween = gsap.to(progressObj, {
            value: 1.0,
            duration: 1.6,
            ease: 'power3.out'
          });
          lineFadeTween = gsap.to(lineMaterial, {
            opacity: 0.0,
            duration: 0.6,
            ease: 'power2.out'
          });
        } else {
          hoverTween = gsap.to(progressObj, {
            value: 0.0,
            duration: 2.2,
            ease: 'elastic.out(1, 0.75)'
          });
          lineFadeTween = gsap.to(lineMaterial, {
            opacity: 0.18,
            duration: 1.5,
            ease: 'power2.inOut',
            delay: 0.4
          });
        }
      };

      // Raycasting & Interaction States
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      const mouse2D = new THREE.Vector2();
      const hoverPosition = new THREE.Vector3();
      const isHoveredRef = { current: false };

      // Resize handler
      const handleResize = () => {
        const w = container.clientWidth || container.parentElement.clientWidth;
        const h = container.clientHeight || container.parentElement.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      // Mouse event handlers
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        mouse.x = (clientX / rect.width) * 2 - 1;
        mouse.y = -(clientY / rect.height) * 2 + 1;
        mouse2D.set(mouse.x, mouse.y);

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(colliderMesh);

        if (intersects.length > 0) {
          const localPoint = colliderMesh.worldToLocal(intersects[0].point.clone());
          hoverPosition.copy(localPoint);

          if (!isHoveredRef.current) {
            isHoveredRef.current = true;
            triggerHoverAnims(true);
          }
        } else {
          if (isHoveredRef.current) {
            isHoveredRef.current = false;
            triggerHoverAnims(false);
          }
        }
      };

      const handleMouseLeave = () => {
        mouse2D.set(0, 0);
        if (isHoveredRef.current) {
          isHoveredRef.current = false;
          triggerHoverAnims(false);
        }
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      // Frame loop
      const startTime = performance.now();
      const animate = () => {
        try {
          frameId = requestAnimationFrame(animate);
          const time = (performance.now() - startTime) * 0.001;

          shaderMaterial.uniforms.uTime.value = time;
          shaderMaterial.uniforms.uHoverProgress.value = progressObj.value;
          shaderMaterial.uniforms.uHoverPosition.value.copy(hoverPosition);
          shaderMaterial.uniforms.uMouse.value.lerp(mouse2D, 0.08);

          brainGroup.rotation.x = THREE.MathUtils.lerp(
            brainGroup.rotation.x,
            -mouse2D.y * 0.18,
            0.05
          );
          brainGroup.rotation.z = THREE.MathUtils.lerp(
            brainGroup.rotation.z,
            mouse2D.x * 0.1,
            0.05
          );

          renderer.render(scene, camera);
        } catch (err) {
          console.error('ThreeJS render-loop error:', err);
          setErrorMsg('Render error: ' + err.toString());
          cancelAnimationFrame(frameId);
        }
      };
      animate();

      // Inner cleanup inside try block
      return () => {
        window.removeEventListener('resize', handleResize);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        cancelAnimationFrame(frameId);
        if (rotationTween) rotationTween.kill();
        if (hoverTween) hoverTween.kill();
        if (lineFadeTween) lineFadeTween.kill();
        if (renderer) {
          renderer.dispose();
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    } catch (err) {
      console.error('ThreeJS initialization failed:', err);
      setErrorMsg(err.toString());
    }
  }, [scale]);

  if (errorMsg) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-red-950/20 border border-red-500/30 rounded-2xl text-red-400 font-mono text-xs overflow-auto" style={{ minHeight: '500px' }}>
        <h4 className="text-red-500 font-bold mb-2 text-sm">3D Brain Load Error</h4>
        <pre className="whitespace-pre-wrap text-[10px] leading-relaxed">{errorMsg}</pre>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      style={{
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  );
}
