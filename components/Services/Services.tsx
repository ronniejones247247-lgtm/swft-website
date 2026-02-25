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
    desc: 'Precision foam cuts to your exact length, width, and height specifications. Any foam grade, any quantity.',
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
    title: 'Pattern Cuts',
    desc: 'Intricate shapes, custom profiles, and complex 2D contours cut with tight tolerances for any application.',
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
    title: 'CNC Machining',
    desc: 'Multi-dimensional CNC-routed foam parts with complex geometries — seat cushions, packaging inserts, industrial components.',
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
    title: 'Die Pressing',
    desc: 'High-volume, consistent die-cut foam pieces for production runs — gaskets, pads, seals, and custom shapes.',
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
            From a single piece to high-volume production runs, our capabilities cover every stage of foam fabrication with the quality and precision your project demands.
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
