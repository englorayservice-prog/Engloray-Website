import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ctaBgVideo from '../../assets/cta-bg.mp4';

export const CTA = ({ onOpenApply }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 24;

    // Create renderer with alpha: true so the background video shows through
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create geometry - Torus Knot representing the complex, twisting path of ideas
    const geometry = new THREE.TorusKnotGeometry(4.2, 1.3, 220, 16, 2, 3);

    // Create material - smooth matte grey clay texture
    const material = new THREE.MeshStandardMaterial({
      color: 0x818c9e, // sleek slate grey matching the video cords
      roughness: 0.55,
      metalness: 0.15,
      flatShading: false
    });

    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(10, 15, 15);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    // Mouse move handler
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current = { x, y };
    };

    const handleTouchMove = (event) => {
      if (!containerRef.current || event.touches.length === 0) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.touches[0].clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto-rotation over time
      const elapsedTime = clock.getElapsedTime();
      knot.rotation.y = elapsedTime * 0.15;

      // Mouse interactive tilt (smoothly lerped)
      targetRotationRef.current.x += (mouseRef.current.y * 0.5 - targetRotationRef.current.x) * 0.06;
      targetRotationRef.current.y += (mouseRef.current.x * 0.5 - targetRotationRef.current.y) * 0.06;

      knot.rotation.x = targetRotationRef.current.x + elapsedTime * 0.1;
      knot.rotation.y = targetRotationRef.current.y + elapsedTime * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1A3A6B 50%, #0F2D5A 100%)' }}
      id="cta"
    >
      {/* Background Loop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none"
      >
        <source src={ctaBgVideo} type="video/mp4" />
      </video>

      {/* Overlay for text legibility */}
      <div className="absolute inset-0 pointer-events-none z-[5]" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26,58,107,0.55) 0%, transparent 70%)' }} />

      {/* Three.js Interactive Foreground Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      />

      {/* Call To Action Text & Button Overlays */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
        <span
          className="text-[10px] font-extrabold tracking-[0.2em] uppercase mb-3"
          style={{
            display: 'inline-flex',
            color: '#FCD34D',
            border: '1px solid rgba(252,211,77,0.4)',
            background: 'rgba(252,211,77,0.10)',
            padding: '4px 14px',
            borderRadius: '100px',
            letterSpacing: '0.18em'
          }}
        >
          Launch Your Career
        </span>
        <h2
          className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight font-jakarta mb-2 sm:mb-4 select-none leading-tight px-2"
          style={{ color: '#FFFFFF' }}
        >
          Ready to{' '}
          <span style={{ color: '#FCD34D' }}>Transform</span>{' '}
          Your Future?
        </h2>
        <p style={{ color: 'rgba(219,234,254,0.90)', fontSize: '0.875rem', marginBottom: '20px', maxWidth: '420px', fontWeight: 500, lineHeight: 1.6 }}>Join 2,400+ students who got placed at top companies through Engloray.</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={onOpenApply}
            style={{
              padding: '11px 28px', borderRadius: '100px', fontWeight: 700, fontSize: '0.85rem',
              background: 'linear-gradient(135deg, #F59E0B, #EF6C00)',
              color: '#ffffff', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(245,158,11,0.35)',
              transition: 'all 0.2s ease', fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(245,158,11,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,158,11,0.35)'; }}
          >
            Apply Now — It's Free
          </button>
          <button
            onClick={onOpenApply}
            style={{
              padding: '11px 28px', borderRadius: '100px', fontWeight: 600, fontSize: '0.85rem',
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              border: '2px solid rgba(255,255,255,0.35)', cursor: 'pointer',
              transition: 'all 0.2s ease', fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#FCD34D'; e.currentTarget.style.color = '#FCD34D'; e.currentTarget.style.background = 'rgba(252,211,77,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          >
            View Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
