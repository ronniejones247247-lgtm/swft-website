import styles from './Cushions.module.css';

const cushionTypes = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="16" width="36" height="20" rx="6" />
        <path d="M6 26h36" />
        <path d="M14 16v-4a2 2 0 012-2h16a2 2 0 012 2v4" />
      </svg>
    ),
    title: 'Furniture Cushions',
    desc: 'Replacement and custom-cut cushions for sofas, chairs, sectionals, and ottomans — any size, any shape.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 36 Q24 20 44 36" />
        <rect x="8" y="30" width="32" height="10" rx="4" />
        <path d="M12 30v-6M36 30v-6" />
      </svg>
    ),
    title: 'Boat & Marine Cushions',
    desc: 'Precision-cut foam for boat seats, bow cushions, and marine upholstery. Resistant to moisture and mildew.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="18" width="40" height="22" rx="4" />
        <path d="M4 28h40" />
        <path d="M14 18v-6h20v6" />
        <circle cx="10" cy="44" r="3" />
        <circle cx="38" cy="44" r="3" />
      </svg>
    ),
    title: 'RV & Camper Cushions',
    desc: 'Custom foam for RV dinettes, cab-over beds, and slide-out seating. We cut to your exact floor-plan dimensions.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="20" width="36" height="18" rx="5" />
        <path d="M6 28h36" />
        <rect x="2" y="14" width="8" height="6" rx="2" />
        <rect x="38" y="14" width="8" height="6" rx="2" />
      </svg>
    ),
    title: 'Restaurant & Commercial',
    desc: 'Booth seating, banquette cushions, and bar stool pads. High-density foam built for heavy daily use.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="22" width="32" height="16" rx="4" />
        <path d="M16 22v-8a8 8 0 0116 0v8" />
        <path d="M8 30h32" />
      </svg>
    ),
    title: 'Medical & Therapeutic',
    desc: 'Pressure-relief cushions, foam wedges, positioning pads, and hospital-grade seat inserts cut to specification.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="24,6 42,38 6,38" />
        <rect x="14" y="28" width="20" height="10" rx="3" />
        <path d="M24 6v22" />
      </svg>
    ),
    title: 'Custom Shapes',
    desc: 'L-shapes, curves, notches, angled cuts — if you can draw it, we can cut it. Bring your template or measurements.',
  },
];

export default function Cushions() {
  return (
    <section id="cushions" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="section-label">Custom Cutting</p>
          <h2 className="section-title">Cushion Cutting Services</h2>
          <p className={styles.sub}>
            From a single replacement cushion to a full commercial order, we cut foam to your exact dimensions.
            Any shape, any grade, any thickness — made right here in Belton, TX.
          </p>
        </div>

        <div className={styles.grid}>
          {cushionTypes.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.icon}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Not sure what grade or thickness you need? Our team will help you find the right foam for your project.
          </p>
          <a href="#contact" className={styles.ctaBtn}>Get a Custom Quote</a>
        </div>
      </div>
    </section>
  );
}
