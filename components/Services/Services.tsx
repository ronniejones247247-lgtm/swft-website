import styles from './Services.module.css';

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <line x1="8" y1="24" x2="40" y2="24" />
        <line x1="24" y1="8" x2="24" y2="40" />
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Cut-to-Size',
    desc: 'Computerized vertical and horizontal cutting to your exact dimensions. Any foam grade, any quantity — from a single piece to full production runs.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="30" width="36" height="10" rx="2" />
        <line x1="18" y1="30" x2="12" y2="18" />
        <line x1="30" y1="30" x2="36" y2="18" />
        <path d="M12 18 Q24 8 36 18" />
        <circle cx="24" cy="15" r="3" />
        <line x1="24" y1="12" x2="24" y2="6" />
      </svg>
    ),
    title: 'CNC 3D Machining',
    desc: 'Multi-dimensional CNC router cutting with complex geometries — including round nose, bullet nose, tilt variance, compression, and relief cuts.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="28" width="32" height="12" rx="2" />
        <rect x="12" y="16" width="24" height="12" rx="1" />
        <line x1="24" y1="8" x2="24" y2="16" />
        <line x1="18" y1="8" x2="30" y2="8" />
        <line x1="18" y1="28" x2="18" y2="40" strokeDasharray="3 3" />
        <line x1="30" y1="28" x2="30" y2="40" strokeDasharray="3 3" />
      </svg>
    ),
    title: 'Die & Pressure Cutting',
    desc: 'High-volume die and pressure cutting for consistent, repeatable parts — gaskets, pads, seals, and custom shapes at scale.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="10" rx="2" />
        <rect x="6" y="24" width="36" height="10" rx="2" />
        <line x1="14" y1="20" x2="14" y2="24" />
        <line x1="24" y1="20" x2="24" y2="24" />
        <line x1="34" y1="20" x2="34" y2="24" />
      </svg>
    ),
    title: 'Lamination',
    desc: 'Foam-to-foam, foam-to-wood, foam-to-plastic, and foam-to-upholstery laminations using Remay, Mylar, 3M adhesive, Ethylene plank, and fiber.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40 L18 20 L28 32 L35 14 L40 22" />
        <circle cx="8" cy="40" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="18" cy="20" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="28" cy="32" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="35" cy="14" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="40" cy="22" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Template & Pattern Cutting',
    desc: 'Intricate custom profiles, convoluting, auto-buffing, and specialized edge cuts. Bring your template, pattern, or CAD file.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="32" height="22" rx="3" />
        <path d="M14 14v-4M34 14v-4" />
        <path d="M8 28h32" />
        <path d="M16 36l-4 6M32 36l4 6" />
      </svg>
    ),
    title: 'Packaging & JIT Delivery',
    desc: 'Bar-coded carton or returnable packaging, direct-to-warehouse shipping, KanBan stocking, and just-in-time delivery throughout the US and Mexico.',
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Expert Foam Fabrication Services</h2>
          <p className="section-body">
            From our 25,000 sq ft facility in Belton, TX, we offer a full range of foam fabrication capabilities — from computerized cutting and CNC machinery to lamination, packaging, and just-in-time delivery throughout the US and Mexico.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.title} className={styles.card}>
              <div className={styles.iconWrap}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
