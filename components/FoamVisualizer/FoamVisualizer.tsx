'use client';

import { useState, useMemo } from 'react';
import styles from './FoamVisualizer.module.css';

type Unit = 'in' | 'cm';

function toCm(val: number) { return +(val * 2.54).toFixed(2); }
function toIn(val: number) { return +(val / 2.54).toFixed(2); }

// ─── Isometric Foam Block ─────────────────────────────────────────────────────
// Uses true isometric projection so all 3 dimensions are always visible and correct.
//   World axes:  X = length (right), Y = depth (back), Z = height/thickness (up)
//   Projection:  sx = (x - y) * cos30,  sy = (x + y) * sin30 - z

const COS30 = Math.cos(Math.PI / 6);
const SIN30 = Math.sin(Math.PI / 6);

function project(x: number, y: number, z: number): [number, number] {
  return [(x - y) * COS30, (x + y) * SIN30 - z];
}

function pts(arr: [number, number][]): string {
  return arr.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
}

function mid(a: [number, number], b: [number, number]): [number, number] {
  return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
}

interface FoamBoxProps { L: number; W: number; H: number; animKey: number; }

function FoamBox({ L, W, H, animKey }: FoamBoxProps) {
  const SVG_W = 420;
  const SVG_H = 310;
  const MAX_D = 160; // max display pixels for any dimension

  // Scale proportionally — ensure very thin pieces still show some thickness
  const maxDim = Math.max(L, W, H, 0.01);
  const baseScale = MAX_D / maxDim;
  const dL = L * baseScale;
  const dW = W * baseScale;
  // Give thickness at least 8px so it's always visible
  const dH = Math.max(H * baseScale, 8);

  // 8 box corners in display units
  const A = project(0,  0,  0);    // front-left  bottom
  const B = project(dL, 0,  0);    // front-right bottom
  const C = project(dL, dW, 0);    // back-right  bottom
  // D = project(0, dW, 0) — hidden
  const E = project(0,  0,  dH);   // front-left  top
  const F = project(dL, 0,  dH);   // front-right top
  const G = project(dL, dW, dH);   // back-right  top
  const Hpt = project(0, dW, dH);  // back-left   top

  // Center all points in the SVG
  const allX = [A, B, C, E, F, G, Hpt].map(p => p[0]);
  const allY = [A, B, C, E, F, G, Hpt].map(p => p[1]);
  const minX = Math.min(...allX), maxX = Math.max(...allX);
  const minY = Math.min(...allY), maxY = Math.max(...allY);
  const ox = SVG_W / 2 - (minX + maxX) / 2;
  const oy = SVG_H / 2 - (minY + maxY) / 2 + 12; // slight down bias for labels

  function shift(p: [number, number]): [number, number] {
    return [p[0] + ox, p[1] + oy];
  }

  const [sA, sB, sC, sE, sF, sG, sH] = [A, B, C, E, F, G, Hpt].map(shift);

  // Dimension label positions
  const lblL   = mid(sA, sB); // front-bottom edge → length
  const lblW   = mid(sB, sC); // right-bottom edge → width
  const lblH   = mid(sB, sF); // right-vertical edge → thickness

  // Shadow ellipse
  const shadowCX = (sA[0] + sC[0]) / 2;
  const shadowCY = (sA[1] + sC[1]) / 2 + 10;
  const shadowRX = (maxX - minX) / 2 + 8;

  return (
    <svg
      key={animKey}
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      className={styles.svg}
      aria-label={`3D foam block: ${L.toFixed(1)}" × ${W.toFixed(1)}" × ${H.toFixed(1)}"`}
    >
      <defs>
        {/* Foam texture pattern — subtle cell grid */}
        <pattern id="foamTop"  width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill="#f5e8cc" />
          <circle cx="7" cy="7" r="3" fill="none" stroke="#e0d0aa" strokeWidth="0.6" />
        </pattern>
        <pattern id="foamFront" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill="#e8d4a4" />
          <circle cx="7" cy="7" r="3" fill="none" stroke="#d4c090" strokeWidth="0.6" />
        </pattern>
        <pattern id="foamRight" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill="#d4bb80" />
          <circle cx="7" cy="7" r="3" fill="none" stroke="#c0a86c" strokeWidth="0.6" />
        </pattern>
      </defs>

      {/* Drop shadow */}
      <ellipse cx={shadowCX} cy={shadowCY} rx={shadowRX} ry={shadowRX * 0.22}
        fill="rgba(26,43,107,0.18)" />

      {/* ── Three visible faces ── */}

      {/* Front face (A B F E) — faces viewer left */}
      <polygon
        points={pts([sA, sB, sF, sE])}
        fill="url(#foamFront)"
        stroke="#8a6e30"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Right face (B C G F) — faces viewer right */}
      <polygon
        points={pts([sB, sC, sG, sF])}
        fill="url(#foamRight)"
        stroke="#8a6e30"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Top face (E F G H) — brightest, faces up */}
      <polygon
        points={pts([sE, sF, sG, sH])}
        fill="url(#foamTop)"
        stroke="#8a6e30"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Edge highlight on top-front and top-left edges */}
      <line x1={sE[0]} y1={sE[1]} x2={sF[0]} y2={sF[1]} stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round" />
      <line x1={sE[0]} y1={sE[1]} x2={sH[0]} y2={sH[1]} stroke="rgba(255,255,255,0.4)"  strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Dimension labels ── */}

      {/* Length label on front-bottom edge */}
      <line x1={sA[0]} y1={sA[1]} x2={sB[0]} y2={sB[1]} stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx={sA[0]} cy={sA[1]} r="4" fill="#3d8b78" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx={sB[0]} cy={sB[1]} r="4" fill="#3d8b78" stroke="#ffffff" strokeWidth="1.5" />
      {/* L badge */}
      <rect x={lblL[0] - 38} y={lblL[1] + 6} width={76} height={22} rx={6}
        fill="#ffffff" stroke="#3d8b78" strokeWidth="1.5" />
      <text x={lblL[0]} y={lblL[1] + 21} textAnchor="middle"
        fill="#1a2b6b" fontSize="13" fontWeight="800"
        fontFamily="'Segoe UI', system-ui, sans-serif">
        L: {L.toFixed(1)}&quot;
      </text>

      {/* Width label on right-bottom edge */}
      <line x1={sB[0]} y1={sB[1]} x2={sC[0]} y2={sC[1]} stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx={sC[0]} cy={sC[1]} r="4" fill="#3d8b78" stroke="#ffffff" strokeWidth="1.5" />
      {/* W badge */}
      <rect x={lblW[0] + 10} y={lblW[1] - 5} width={76} height={22} rx={6}
        fill="#ffffff" stroke="#3d8b78" strokeWidth="1.5" />
      <text x={lblW[0] + 48} y={lblW[1] + 10} textAnchor="middle"
        fill="#1a2b6b" fontSize="13" fontWeight="800"
        fontFamily="'Segoe UI', system-ui, sans-serif">
        W: {W.toFixed(1)}&quot;
      </text>

      {/* Height/Thickness label on right-vertical edge */}
      <line x1={sB[0]} y1={sB[1]} x2={sF[0]} y2={sF[1]} stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx={sF[0]} cy={sF[1]} r="4" fill="#3d8b78" stroke="#ffffff" strokeWidth="1.5" />
      {/* T badge */}
      <rect x={lblH[0] + 8} y={lblH[1] - 11} width={72} height={22} rx={6}
        fill="#ffffff" stroke="#3d8b78" strokeWidth="1.5" />
      <text x={lblH[0] + 44} y={lblH[1] + 4} textAnchor="middle"
        dominantBaseline="middle"
        fill="#1a2b6b" fontSize="13" fontWeight="800"
        fontFamily="'Segoe UI', system-ui, sans-serif">
        T: {H.toFixed(1)}&quot;
      </text>
    </svg>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function FoamVisualizer() {
  const [length, setLength] = useState('24');
  const [width,  setWidth]  = useState('24');
  const [height, setHeight] = useState('4');
  const [unit,   setUnit]   = useState<Unit>('in');
  const [animKey, setAnimKey] = useState(0);

  // Parse to inches (always)
  const L = useMemo(() => {
    const v = parseFloat(length) || 0;
    return unit === 'cm' ? toIn(v) : v;
  }, [length, unit]);

  const W = useMemo(() => {
    const v = parseFloat(width) || 0;
    return unit === 'cm' ? toIn(v) : v;
  }, [width, unit]);

  const H = useMemo(() => {
    const v = parseFloat(height) || 0;
    return unit === 'cm' ? toIn(v) : v;
  }, [height, unit]);

  const boardFeet = useMemo(() => {
    if (!L || !W || !H) return null;
    return +((L * W * H) / 144).toFixed(3);
  }, [L, W, H]);

  const valid = L > 0 && W > 0 && H > 0;
  const unitLabel = unit === 'in' ? 'in' : 'cm';

  function handleChange(setter: (v: string) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setAnimKey(k => k + 1);
    };
  }

  const handleUnitToggle = (newUnit: Unit) => {
    if (newUnit === unit) return;
    if (newUnit === 'cm') {
      setLength(v => String(toCm(parseFloat(v) || 0)));
      setWidth(v  => String(toCm(parseFloat(v) || 0)));
      setHeight(v => String(toCm(parseFloat(v) || 0)));
    } else {
      setLength(v => String(toIn(parseFloat(v) || 0)));
      setWidth(v  => String(toIn(parseFloat(v) || 0)));
      setHeight(v => String(toIn(parseFloat(v) || 0)));
    }
    setUnit(newUnit);
    setAnimKey(k => k + 1);
  };

  return (
    <section id="visualizer" className={styles.section}>
      <div className={styles.inner}>

        {/* Controls */}
        <div className={styles.controls}>
          <p className="section-label" style={{ color: 'var(--teal-light)' }}>Foam Visualizer</p>
          <h2 className={styles.title}>See Your Foam Before You Order</h2>
          <p className={styles.desc}>
            Enter your dimensions and instantly see a 3D preview showing length, width, and thickness. Confirm the shape looks right before requesting a quote.
          </p>

          {/* Unit toggle */}
          <div className={styles.unitToggle}>
            <button
              className={`${styles.unitBtn} ${unit === 'in' ? styles.unitActive : ''}`}
              onClick={() => handleUnitToggle('in')}
            >Inches</button>
            <button
              className={`${styles.unitBtn} ${unit === 'cm' ? styles.unitActive : ''}`}
              onClick={() => handleUnitToggle('cm')}
            >Centimeters</button>
          </div>

          {/* Inputs */}
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>
              Length ({unitLabel})
              <input type="number" min="0.1" step="0.5" value={length}
                onChange={handleChange(setLength)} className={styles.input} placeholder="e.g. 24" />
            </label>
            <label className={styles.inputLabel}>
              Width ({unitLabel})
              <input type="number" min="0.1" step="0.5" value={width}
                onChange={handleChange(setWidth)} className={styles.input} placeholder="e.g. 24" />
            </label>
            <label className={styles.inputLabel}>
              Thickness ({unitLabel})
              <input type="number" min="0.1" step="0.5" value={height}
                onChange={handleChange(setHeight)} className={styles.input} placeholder="e.g. 4" />
            </label>
          </div>

          {/* Stats */}
          {valid && (
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statVal}>{boardFeet}</span>
                <span className={styles.statLbl}>Board Feet</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statVal}>
                  {L.toFixed(1)}&Prime; &times; {W.toFixed(1)}&Prime; &times; {H.toFixed(1)}&Prime;
                </span>
                <span className={styles.statLbl}>L &times; W &times; T (inches)</span>
              </div>
            </div>
          )}

          <a href="#contact" className={styles.quoteBtn}>Request a Quote</a>
        </div>

        {/* 3D Visualizer */}
        <div className={styles.vizArea}>
          {valid ? (
            <div className={styles.vizBox}>
              <FoamBox L={L} W={W} H={H} animKey={animKey} />
              <p className={styles.vizNote}>
                Proportionally scaled &mdash; L&nbsp;(length) &times; W&nbsp;(width) &times; T&nbsp;(thickness)
              </p>
            </div>
          ) : (
            <div className={styles.placeholder}>
              <div className={styles.placeholderIcon}>
                <svg viewBox="0 0 80 80" fill="none">
                  <rect x="10" y="10" width="60" height="60" rx="4" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
                  <path d="M40 28 L40 52 M28 40 L52 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <p>Enter dimensions above to see your foam</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
