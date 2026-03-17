import type { Metadata } from 'next';
import styles from './markets.module.css';

export const metadata: Metadata = {
  title: 'Markets Served | SouthWestern Foam Technologies',
  description: 'SWFT serves a wide range of industries including marine, medical, automotive, oilfield, transportation, packaging, and more.',
};

const markets = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 48 Q32 28 56 48" />
        <rect x="12" y="42" width="40" height="14" rx="4" />
        <path d="M18 42v-8M46 42v-8" />
        <path d="M10 56h44" />
      </svg>
    ),
    name: 'Marine',
    desc: 'Custom seat cushions, bow padding, and interior foam for boats and watercraft. Hydrophobic and UV-resistant foam options available for outdoor and wet environments.',
    applications: ['Boat seat cushions', 'Bow & stern padding', 'Cabin upholstery', 'Dock bumpers'],
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="20" width="44" height="28" rx="4" />
        <path d="M10 32h44" />
        <circle cx="20" cy="52" r="5" />
        <circle cx="44" cy="52" r="5" />
        <path d="M10 28l6-10h32l6 10" />
      </svg>
    ),
    name: 'Transportation',
    desc: 'Precision foam components for buses, trains, fleet vehicles, and specialty transport. JIT delivery and KanBan stocking programs available for production-line supply.',
    applications: ['Bus & coach seating', 'Rail car cushions', 'Fleet vehicle interiors', 'Headrests & armrests'],
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="24" width="36" height="28" rx="4" />
        <path d="M22 24v-8a10 10 0 0120 0v8" />
        <path d="M14 38h36" />
        <circle cx="26" cy="46" r="2" fill="currentColor" stroke="none" />
        <circle cx="38" cy="46" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    name: 'Medical',
    desc: 'Pressure-relief cushions, hospital bed toppers, positioning wedges, and therapeutic foam products. Viscoelastic and high-resilience foam options meeting medical application standards.',
    applications: ['Hospital bed toppers', 'Pressure relief cushions', 'Positioning wedges', 'Wheelchair seating'],
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="22" width="48" height="28" rx="3" />
        <path d="M8 34h48" />
        <path d="M20 22v-6h24v6" />
        <path d="M8 50h48" />
      </svg>
    ),
    name: 'Office & Theater Seating',
    desc: 'High-resilience and high-density foam cores for ergonomic office chairs, auditorium seating, and theater installations. Custom cuts to match any seat frame.',
    applications: ['Office chair cushions', 'Theater seat cores', 'Auditorium seating', 'Conference room chairs'],
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="30" width="48" height="20" rx="3" />
        <path d="M16 30v-8a16 16 0 0132 0v8" />
        <path d="M8 42h48" />
        <circle cx="20" cy="54" r="4" />
        <circle cx="44" cy="54" r="4" />
      </svg>
    ),
    name: 'Automotive',
    desc: 'Foam components for automotive seating, headliners, door panels, and NVH (noise, vibration, harshness) applications. Die-cut parts and CNC shapes for OEM and aftermarket.',
    applications: ['Seat cushion cores', 'Door panel inserts', 'NVH damping pads', 'Headliner backing'],
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="18" width="44" height="36" rx="3" />
        <path d="M10 30h44M10 42h44" />
        <path d="M22 18v36M42 18v36" />
      </svg>
    ),
    name: 'Packaging',
    desc: 'Custom die-cut foam inserts, end caps, and protective packaging for delicate electronics, instruments, and industrial equipment. EPS and polyurethane options.',
    applications: ['Equipment foam inserts', 'Protective end caps', 'Instrument cases', 'Shipping inserts'],
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="28" r="16" />
        <path d="M32 12v32M16 28h32" />
        <path d="M20 16l24 24M44 16L20 40" />
      </svg>
    ),
    name: 'Recreational',
    desc: 'Foam for sporting equipment, gym mats, playground padding, RV interiors, and outdoor furniture. Lightweight, durable, and weather-resistant grades available.',
    applications: ['Gym & fitness mats', 'RV & camper cushions', 'Outdoor furniture', 'Sports equipment'],
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="8" width="24" height="40" rx="4" />
        <rect x="14" y="48" width="36" height="8" rx="2" />
        <path d="M28 8v-6M36 8v-6" />
        <path d="M24 20h16M24 30h16M24 40h16" />
      </svg>
    ),
    name: 'Oilfield Solutions',
    desc: 'Heavy-duty foam products for oilfield equipment, tool storage, equipment padding, and vibration isolation. High-density and closed-cell options for demanding environments.',
    applications: ['Equipment padding', 'Tool storage inserts', 'Vibration isolation', 'Safety padding'],
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 52V24l20-16 20 16v28" />
        <rect x="24" y="36" width="16" height="16" rx="2" />
        <path d="M20 52V36M44 52V36" />
        <path d="M8 52h48" />
      </svg>
    ),
    name: 'Molded Products',
    desc: 'Through our GRFT partnership, we offer fully automated molded foam using robotic 64-position molding lines — producing high-resilience and viscoelastic molded parts at scale.',
    applications: ['Molded seat components', 'High-resilience foam parts', 'Viscoelastic components', 'Complex 3D shapes'],
  },
];

export default function MarketsPage() {
  return (
    <main className={styles.main}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.label}>Industries We Serve</p>
          <h1 className={styles.heroTitle}>Markets</h1>
          <p className={styles.heroSub}>
            For over 30 years, SouthWestern Foam Technologies has supplied custom foam solutions
            to a wide range of industries — from marine and medical to automotive and oilfield.
          </p>
        </div>
      </section>

      {/* Markets grid */}
      <section className={styles.grid}>
        {markets.map((m) => (
          <div key={m.name} className={styles.card}>
            <div className={styles.icon}>{m.icon}</div>
            <h2 className={styles.cardName}>{m.name}</h2>
            <p className={styles.cardDesc}>{m.desc}</p>
            <ul className={styles.appList}>
              {m.applications.map(a => (
                <li key={a} className={styles.appItem}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Don&apos;t See Your Industry?</h2>
          <p className={styles.ctaSub}>
            If you work with foam in any capacity, chances are we can help. Contact us to discuss your specific application.
          </p>
          <a href="/#contact" className={styles.ctaBtn}>Talk to Our Team</a>
        </div>
      </section>

    </main>
  );
}
