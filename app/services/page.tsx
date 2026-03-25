import type { Metadata } from 'next';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Services & Capabilities | SouthWestern Foam Technologies',
  description: 'Full-service foam fabrication: CNC cutting, lamination, die pressing, convoluting, and just-in-time delivery throughout the US and Mexico.',
};

const cuttingCapabilities = [
  'CNC 3-dimensional cutting',
  'Computerized vertical and horizontal cutting',
  'Compression and relief cutting',
  'Tilt vertical and degree variance cutting',
  'Die and pressure cutting',
  'Auto-buffing and specialized edge cutting',
  'Round nose / bullet nose cutting',
  'Template & pattern cutting',
  'Router cutting',
  'Convoluting',
  'Fabric and fiber CNC cutting',
];

const laminationOptions = [
  'Foam to foam',
  'Foam to wood',
  'Foam to plastic',
  'Foam to upholstery',
  'Foam to sub-straight lamination',
  'Remay, Mylar, 3M glue',
  'Ethylene plank & fiber',
];

const foamTypes = [
  { name: 'Conventional Polyurethane', detail: 'Ethers .90 to 5.0 lb density — the workhorse for most cushion and packaging applications.' },
  { name: 'High Resilience (H.R.)', detail: 'Superior durability and comfort for seating, automotive, and marine applications.' },
  { name: 'Viscoelastic (Memory Foam)', detail: 'Pressure-conforming foam for medical, therapeutic, and comfort seating uses.' },
  { name: 'Acoustical Foam', detail: 'Sound-dampening and noise-control foam for industrial and commercial applications.' },
  { name: 'Closed Cell Foam', detail: 'High-density, moisture-resistant foam ideal for marine and outdoor environments.' },
  { name: 'EPS (Expanded Polystyrene)', detail: 'Lightweight rigid foam for packaging inserts and protective shipping solutions.' },
  { name: 'Hydrophobic Foam', detail: 'Water-resistant foam engineered specifically for marine and outdoor furniture.' },
  { name: 'Fire Retardant Products', detail: 'MVSS 302, Cal 117, low smoke, and barrier certified products for safety-critical applications.' },
];

const packagingOptions = [
  'Bar code labels & tags on carton, plastic, or returnable packaging',
  'Direct-to-warehouse or direct retail packaging',
  'JIT delivery, Safety Stock, KanBan stocking',
  'Fully enclosed environment-protected or string-tied kitting',
  'Delivery throughout the United States and Mexico',
];

const designCapabilities = [
  'AutoCAD, Wincap, and IGES file support',
  'Full prototyping and pattern development',
  'Tooling and fixture development',
  'CAD comfort engineering',
  'ISO 9001:2000 — full traceability and accountability',
  'Instron physical property testing',
  'Density, IFD/ILD, Durometer testing',
  'Tensile, tear, elongation, and air flow testing',
  'Compression set, sag, and ball rebound testing',
  'Flammability and vertical burn testing',
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.label}>What We Do</p>
          <h1 className={styles.heroTitle}>Services & Capabilities</h1>
          <p className={styles.heroSub}>
            From our 8 acre fabrication facility in Belton, TX, we offer a full range of foam
            cutting, lamination, and delivery services — backed by 30 years of precision manufacturing.
          </p>
        </div>
      </section>

      <div className={styles.content}>

        {/* Cutting & Manufacturing */}
        <section className={styles.block}>
          <div className={styles.blockHeader}>
            <h2 className={styles.blockTitle}>Cutting & Manufacturing</h2>
            <p className={styles.blockSub}>
              Our computerized cutting equipment handles everything from simple straight cuts to complex
              multi-dimensional CNC shapes — all with tight tolerances and consistent quality.
            </p>
          </div>
          <ul className={styles.capList}>
            {cuttingCapabilities.map(c => (
              <li key={c} className={styles.capItem}>
                <span className={styles.capDot} />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Lamination */}
        <section className={`${styles.block} ${styles.blockAlt}`}>
          <div className={styles.blockInner}>
            <div className={styles.blockHeader}>
              <h2 className={styles.blockTitle}>Lamination</h2>
              <p className={styles.blockSub}>
                We bond foam to a wide variety of materials using industrial adhesives and lamination
                processes — creating composite parts ready for assembly.
              </p>
            </div>
            <ul className={styles.capList}>
              {laminationOptions.map(l => (
                <li key={l} className={styles.capItem}>
                  <span className={styles.capDot} />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Foam Types */}
        <section className={styles.block}>
          <div className={styles.blockHeader}>
            <h2 className={styles.blockTitle}>Foam Types We Work With</h2>
            <p className={styles.blockSub}>
              We stock and fabricate a wide range of foam formulations to match the exact requirements
              of your application — from standard seating to fire-rated industrial parts.
            </p>
          </div>
          <div className={styles.foamGrid}>
            {foamTypes.map(f => (
              <div key={f.name} className={styles.foamCard}>
                <h3 className={styles.foamName}>{f.name}</h3>
                <p className={styles.foamDetail}>{f.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packaging & Delivery */}
        <section className={`${styles.block} ${styles.blockAlt}`}>
          <div className={styles.blockInner}>
            <div className={styles.blockHeader}>
              <h2 className={styles.blockTitle}>Packaging & Delivery</h2>
              <p className={styles.blockSub}>
                We handle the full supply chain — from fabrication to your door. Our flexible packaging
                and delivery programs keep your production line running.
              </p>
            </div>
            <ul className={styles.capList}>
              {packagingOptions.map(p => (
                <li key={p} className={styles.capItem}>
                  <span className={styles.capDot} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Design & Testing */}
        <section className={styles.block}>
          <div className={styles.blockHeader}>
            <h2 className={styles.blockTitle}>Design & Testing</h2>
            <p className={styles.blockSub}>
              ISO 9001:2000 compliant processes with full physical property testing using Instron
              equipment — ensuring every part meets spec before it ships.
            </p>
          </div>
          <ul className={styles.capList}>
            {designCapabilities.map(d => (
              <li key={d} className={styles.capItem}>
                <span className={styles.capDot} />
                {d}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaSub}>
            Tell us about your project and we&apos;ll recommend the right foam, cut, and delivery solution.
          </p>
          <a href="/#contact" className={styles.ctaBtn}>Request a Quote</a>
        </section>

      </div>
    </main>
  );
}
