import React, { useRef, useEffect, useState } from 'react';

/**
 * MonitorCharacter – Upper-body portrait style (no legs).
 * Vintage beige CRT monitor head with glowing oval eyes that track the cursor.
 * Grey blazer + white shirt. Cropped at waist, just like the reference image.
 */
const MonitorCharacter = () => {
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const characterRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!characterRef.current) return;
      const rect = characterRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.22; // eye level on monitor

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const maxMove = 6;
      const maxDist = 500;
      const factor = Math.min(dist, maxDist) / maxDist;

      setEyeOffset({
        x: (dx / dist) * factor * maxMove,
        y: (dy / dist) * factor * maxMove,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={characterRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 340 460"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', maxWidth: 380, overflow: 'visible' }}
      >
        <defs>
          {/* CRT screen - dark greenish glass */}
          <linearGradient id="crtScreen" x1="10%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#1e2820" />
            <stop offset="50%" stopColor="#131a14" />
            <stop offset="100%" stopColor="#0c1109" />
          </linearGradient>

          {/* Glowing oval eye – warm pink-white */}
          <radialGradient id="eyeGlowL" cx="42%" cy="38%" r="58%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fff5f0" />
            <stop offset="60%" stopColor="#ffcfc0" />
            <stop offset="85%" stopColor="#ff9e88" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff7055" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="eyeGlowR" cx="42%" cy="38%" r="58%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fff5f0" />
            <stop offset="60%" stopColor="#ffcfc0" />
            <stop offset="85%" stopColor="#ff9e88" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff7055" stopOpacity="0" />
          </radialGradient>

          {/* Monitor beige casing */}
          <linearGradient id="casingFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2ddd6" />
            <stop offset="50%" stopColor="#d4cfc8" />
            <stop offset="100%" stopColor="#bab5ae" />
          </linearGradient>
          <linearGradient id="casingTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#eae5de" />
            <stop offset="100%" stopColor="#c8c3bc" />
          </linearGradient>
          <linearGradient id="casingSideL" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#c4bfb8" />
            <stop offset="100%" stopColor="#a8a39c" />
          </linearGradient>
          <linearGradient id="casingSideR" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c4bfb8" />
            <stop offset="100%" stopColor="#a8a39c" />
          </linearGradient>

          {/* Skin */}
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0c49a" />
            <stop offset="100%" stopColor="#d8a070" />
          </linearGradient>

          {/* Grey blazer */}
          <linearGradient id="blazerMain" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#878d94" />
            <stop offset="100%" stopColor="#6e757c" />
          </linearGradient>
          <linearGradient id="blazerLeft" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7e848b" />
            <stop offset="100%" stopColor="#62686f" />
          </linearGradient>
          <linearGradient id="blazerRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7e848b" />
            <stop offset="100%" stopColor="#62686f" />
          </linearGradient>

          {/* White shirt */}
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8e4de" />
            <stop offset="50%" stopColor="#f0ece6" />
            <stop offset="100%" stopColor="#dedad4" />
          </linearGradient>

          {/* Eye bloom glow filter */}
          <filter id="eyeBloom" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="bloom" />
            <feMerge>
              <feMergeNode in="bloom" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softBloom" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* CRT scanline pattern */}
          <pattern id="scanlines" x="0" y="0" width="1" height="4" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1" height="1.5" fill="rgba(0,0,0,0.3)" />
          </pattern>

          {/* Screen glass reflection */}
          <linearGradient id="glassSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
          </linearGradient>
        </defs>

        {/* ════════════════════════════════
            BODY — waist crop, no legs
        ════════════════════════════════ */}

        {/* ── Blazer body left half ── */}
        <path
          d="M 50 460 L 50 240 Q 48 220 60 208 L 90 198 L 170 198 L 170 460 Z"
          fill="url(#blazerLeft)"
        />
        {/* ── Blazer body right half ── */}
        <path
          d="M 290 460 L 290 240 Q 292 220 280 208 L 250 198 L 170 198 L 170 460 Z"
          fill="url(#blazerRight)"
        />

        {/* ── White shirt visible in centre ── */}
        <path
          d="M 170 198 Q 145 204 136 218 L 128 460 L 212 460 L 204 218 Q 195 204 170 198 Z"
          fill="url(#shirtGrad)"
        />
        {/* Shirt collar left flap */}
        <path
          d="M 170 198 Q 150 200 140 214 Q 148 224 162 220 L 170 210 Z"
          fill="#e8e4de"
          stroke="#ccc8c2"
          strokeWidth="0.8"
        />
        {/* Shirt collar right flap */}
        <path
          d="M 170 198 Q 190 200 200 214 Q 192 224 178 220 L 170 210 Z"
          fill="#e8e4de"
          stroke="#ccc8c2"
          strokeWidth="0.8"
        />
        {/* Shirt center shadow line */}
        <line x1="170" y1="210" x2="170" y2="460" stroke="rgba(0,0,0,0.07)" strokeWidth="2" />
        {/* Shirt buttons */}
        {[265, 295, 325, 355, 385].map((y, i) => (
          <circle key={i} cx="170" cy={y} r="3.5" fill="#c8c4be" stroke="#a8a49e" strokeWidth="0.6" />
        ))}

        {/* ── Left blazer lapel ── */}
        <path
          d="M 170 212 Q 152 218 140 236 Q 132 254 136 278 L 170 260 Z"
          fill="#82888f"
          stroke="#72787f"
          strokeWidth="0.8"
        />
        {/* Left lapel notch */}
        <path d="M 140 236 Q 148 231 156 238" fill="none" stroke="#5e6470" strokeWidth="2" strokeLinecap="round" />

        {/* ── Right blazer lapel ── */}
        <path
          d="M 170 212 Q 188 218 200 236 Q 208 254 204 278 L 170 260 Z"
          fill="#82888f"
          stroke="#72787f"
          strokeWidth="0.8"
        />
        {/* Right lapel notch */}
        <path d="M 200 236 Q 192 231 184 238" fill="none" stroke="#5e6470" strokeWidth="2" strokeLinecap="round" />

        {/* ── Blazer shoulder seam left ── */}
        <path d="M 60 210 Q 90 198 120 200" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
        {/* ── Blazer shoulder seam right ── */}
        <path d="M 280 210 Q 250 198 220 200" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />

        {/* Blazer side crease left */}
        <path d="M 70 240 Q 72 340 68 440" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />
        {/* Blazer side crease right */}
        <path d="M 270 240 Q 268 340 272 440" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />

        {/* ── Left arm – partially visible, relaxed ── */}
        <path
          d="M 50 240 Q 24 258 16 310 L 12 380 Q 10 396 24 400 L 52 402 Q 66 398 68 382 L 72 318 Q 76 268 86 244 Z"
          fill="url(#blazerLeft)"
        />
        {/* Sleeve inner shadow */}
        <path d="M 28 258 Q 20 310 16 374" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" fill="none" />
        {/* Sleeve highlight */}
        <path d="M 50 246 Q 42 300 38 376" stroke="rgba(255,255,255,0.06)" strokeWidth="4" fill="none" />
        {/* White shirt cuff */}
        <path d="M 10 382 Q 10 402 28 406 L 54 404 Q 70 400 68 382 Z" fill="#e0dcd6" />
        <line x1="10" y1="388" x2="68" y2="386" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
        {/* Skin – partial wrist/hand just barely visible */}
        <ellipse cx="40" cy="412" rx="18" ry="10" fill="url(#skinGrad)" />

        {/* ── Right arm – slightly raised / away from body ── */}
        <path
          d="M 290 240 Q 316 258 324 310 L 328 380 Q 330 396 316 400 L 288 402 Q 274 398 272 382 L 268 318 Q 264 268 254 244 Z"
          fill="url(#blazerRight)"
        />
        <path d="M 312 258 Q 320 310 324 374" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" fill="none" />
        <path d="M 290 246 Q 298 300 302 376" stroke="rgba(255,255,255,0.06)" strokeWidth="4" fill="none" />
        {/* White shirt cuff */}
        <path d="M 330 382 Q 330 402 312 406 L 286 404 Q 270 400 272 382 Z" fill="#e0dcd6" />
        <line x1="330" y1="388" x2="272" y2="386" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
        {/* Skin – partial wrist/hand */}
        <ellipse cx="300" cy="412" rx="18" ry="10" fill="url(#skinGrad)" />

        {/* ── Neck ── */}
        <rect x="152" y="178" width="36" height="26" rx="10" fill="url(#skinGrad)" />
        <rect x="152" y="178" width="36" height="8" rx="4" fill="rgba(0,0,0,0.07)" />

        {/* ════════════════════════════════
            CRT MONITOR HEAD
        ════════════════════════════════ */}

        {/* ── CRT back tube (depth illusion) ── */}
        <rect x="74" y="22" width="192" height="152" rx="24" fill="#a8a39c" />

        {/* ── Left side depth panel ── */}
        <path
          d="M 74 32 Q 58 44 58 98 Q 58 152 74 164 L 86 158 Q 72 130 72 98 Q 72 66 86 44 Z"
          fill="url(#casingSideL)"
        />
        {/* ── Right side depth panel ── */}
        <path
          d="M 266 32 Q 282 44 282 98 Q 282 152 266 164 L 254 158 Q 268 130 268 98 Q 268 66 254 44 Z"
          fill="url(#casingSideR)"
        />
        {/* ── Top depth ridge ── */}
        <path
          d="M 74 32 Q 170 18 266 32 L 260 44 Q 170 30 80 44 Z"
          fill="url(#casingTop)"
        />
        {/* ── Bottom rear slope ── */}
        <path
          d="M 74 162 Q 170 176 266 162 L 260 152 Q 170 166 80 152 Z"
          fill="#bcb7b0"
        />

        {/* ── Main front bezel (beige) ── */}
        <rect x="76" y="20" width="188" height="162" rx="20" fill="url(#casingFront)" />

        {/* ── Screen recess (dark surround inset) ── */}
        <rect x="98" y="32" width="144" height="108" rx="8" fill="#222222" />

        {/* ── CRT screen glass ── */}
        <rect x="101" y="35" width="138" height="102" rx="7" fill="url(#crtScreen)" />

        {/* ── Screen glass sheen / reflection ── */}
        <rect x="101" y="35" width="138" height="102" rx="7" fill="url(#glassSheen)" />
        {/* Top-left glare */}
        <path
          d="M 106 38 Q 170 35 230 40 L 226 46 Q 168 42 108 44 Z"
          fill="rgba(255,255,255,0.07)"
        />
        {/* Right-edge highlight */}
        <path
          d="M 236 37 Q 240 42 238 60 Q 236 78 234 82"
          fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4"
        />

        {/* ── CRT Scanlines ── */}
        <rect x="101" y="35" width="138" height="102" rx="7" fill="url(#scanlines)" opacity="0.5" />

        {/* ══════════════════════════════════
            GLOWING OVAL EYES (follow cursor)
        ══════════════════════════════════ */}
        {/* Left eye – outer bloom aura */}
        <ellipse
          cx={144 + eyeOffset.x * 0.5}
          cy={82 + eyeOffset.y * 0.5}
          rx="24"
          ry="30"
          fill="#ff7055"
          opacity="0.15"
          filter="url(#eyeBloom)"
        />
        {/* Left eye – main glow oval */}
        <ellipse
          cx={144 + eyeOffset.x}
          cy={82 + eyeOffset.y}
          rx="19"
          ry="25"
          fill="url(#eyeGlowL)"
          filter="url(#softBloom)"
        />
        {/* Left eye – bright inner core */}
        <ellipse
          cx={144 + eyeOffset.x}
          cy={82 + eyeOffset.y}
          rx="9"
          ry="12"
          fill="rgba(255,255,255,0.97)"
        />
        {/* Left eye – specular top highlight */}
        <ellipse
          cx={141 + eyeOffset.x * 0.35}
          cy={73 + eyeOffset.y * 0.35}
          rx="5"
          ry="4"
          fill="rgba(255,255,255,0.75)"
        />

        {/* Right eye – outer bloom aura */}
        <ellipse
          cx={196 + eyeOffset.x * 0.5}
          cy={82 + eyeOffset.y * 0.5}
          rx="24"
          ry="30"
          fill="#ff7055"
          opacity="0.15"
          filter="url(#eyeBloom)"
        />
        {/* Right eye – main glow oval */}
        <ellipse
          cx={196 + eyeOffset.x}
          cy={82 + eyeOffset.y}
          rx="19"
          ry="25"
          fill="url(#eyeGlowR)"
          filter="url(#softBloom)"
        />
        {/* Right eye – bright inner core */}
        <ellipse
          cx={196 + eyeOffset.x}
          cy={82 + eyeOffset.y}
          rx="9"
          ry="12"
          fill="rgba(255,255,255,0.97)"
        />
        {/* Right eye – specular highlight */}
        <ellipse
          cx={193 + eyeOffset.x * 0.35}
          cy={73 + eyeOffset.y * 0.35}
          rx="5"
          ry="4"
          fill="rgba(255,255,255,0.75)"
        />

        {/* ── Bottom bezel panel ── */}
        <rect x="76" y="140" width="188" height="42" rx="0" fill="url(#casingFront)" />
        {/* Subtle divider line between screen area and bottom bezel */}
        <line x1="98" y1="140" x2="242" y2="140" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />

        {/* ── Brand label ── */}
        <rect x="100" y="148" width="66" height="14" rx="3" fill="#c0bbb4" />
        <text x="133" y="159" textAnchor="middle" fontSize="8" fill="#5a5550" fontFamily="'Courier New', monospace" fontWeight="bold" letterSpacing="0.8">GoldStar</text>
        {/* Tiny sub-text */}
        <text x="174" y="153" fontSize="5" fill="#7a7570" fontFamily="sans-serif">PERSONAL</text>
        <text x="174" y="160" fontSize="5" fill="#7a7570" fontFamily="sans-serif">COLOR MONITOR</text>

        {/* ── Floppy disk slot ── */}
        <rect x="100" y="166" width="110" height="9" rx="2.5" fill="#9a9590" />
        <rect x="102" y="167.5" width="106" height="6" rx="2" fill="#7a7570" />
        {/* Slot insert line */}
        <line x1="103" y1="170.5" x2="207" y2="170.5" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />

        {/* ── Power button (right of floppy) ── */}
        <circle cx="228" cy="169" r="7" fill="#9a9590" />
        <circle cx="228" cy="169" r="5" fill="#7a7570" />
        <circle cx="228" cy="169" r="3">
          <animate attributeName="fill" values="#444;#22c55e;#444" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* ── Monitor stand plate ── */}
        <rect x="154" y="182" width="32" height="6" rx="3" fill="#b8b3ac" />

        {/* ── Cable(s) running to neck ── */}
        <path
          d="M 162 188 Q 160 194 164 200"
          stroke="#9a9590" strokeWidth="3.5" strokeLinecap="round" fill="none"
        />
        <path
          d="M 178 188 Q 180 194 176 200"
          stroke="#9a9590" strokeWidth="3.5" strokeLinecap="round" fill="none"
        />
      </svg>
    </div>
  );
};

export default MonitorCharacter;
