import type { Metadata } from 'next';
import styles from './shop.module.css';

export const metadata: Metadata = {
  title: 'Shop | SouthWestern Foam Technologies',
  description: 'Buy standard foam sheets and cushion foam direct from SouthWestern Foam Technologies in Belton, TX.',
};

const products = [
  {
    id: 'firm-sheet-5x40x72',
    name: 'Firm Upholstery Foam Sheet',
    grade: '1804-5 Grade',
    specs: '5" × 40" × 72"',
    density: '1.80 lb/ft³',
    ild: '45 ILD — Firm',
    description:
      'High-quality firm upholstery foam cut to 5" × 40" × 72". Ideal for replacement sofa cushions, bench seats, dining chairs, and general upholstery projects. Made in the USA at our Belton, TX facility.',
    features: [
      'Firm support — 45 ILD rating',
      '1.80 lb/ft³ density',
      'Cut to size in-house for consistent quality',
      'Suitable for furniture, seating & upholstery',
      'Made in USA — Belton, TX',
    ],
    price: 100,
    shipping: 'Shipping & handling calculated at order',
  },
];

export default function ShopPage() {
  return (
    <main className={styles.main}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.label}>Direct from Our Facility</p>
          <h1 className={styles.heroTitle}>Shop Foam Products</h1>
          <p className={styles.heroSub}>
            Standard foam sheets available for direct purchase. Need a custom size or grade?{' '}
            <a href="/#contact" className={styles.heroLink}>Request a custom quote.</a>
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className={styles.grid}>
        {products.map(p => (
          <div key={p.id} className={styles.card}>

            {/* Product image placeholder */}
            <div className={styles.imgWrap}>
              <div className={styles.imgPlaceholder}>
                <svg viewBox="0 0 200 140" fill="none" className={styles.foamSvg}>
                  <defs>
                    <pattern id="cellTop" width="14" height="14" patternUnits="userSpaceOnUse">
                      <rect width="14" height="14" fill="#72c9b4"/>
                      <circle cx="7" cy="7" r="3" fill="none" stroke="#52b09a" strokeWidth="0.6"/>
                    </pattern>
                    <pattern id="cellFront" width="14" height="14" patternUnits="userSpaceOnUse">
                      <rect width="14" height="14" fill="#3d8b78"/>
                      <circle cx="7" cy="7" r="3" fill="none" stroke="#2d6b5c" strokeWidth="0.6"/>
                    </pattern>
                    <pattern id="cellSide" width="14" height="14" patternUnits="userSpaceOnUse">
                      <rect width="14" height="14" fill="#2a6358"/>
                      <circle cx="7" cy="7" r="3" fill="none" stroke="#1f4d45" strokeWidth="0.6"/>
                    </pattern>
                  </defs>
                  {/* Isometric foam block */}
                  {/* Top face */}
                  <polygon points="100,20 160,50 100,80 40,50" fill="url(#cellTop)" stroke="#1a3d35" strokeWidth="1.2"/>
                  {/* Front face */}
                  <polygon points="40,50 100,80 100,120 40,90" fill="url(#cellFront)" stroke="#1a3d35" strokeWidth="1.2"/>
                  {/* Right face */}
                  <polygon points="100,80 160,50 160,90 100,120" fill="url(#cellSide)" stroke="#1a3d35" strokeWidth="1.2"/>
                  {/* Highlights */}
                  <line x1="40" y1="50" x2="100" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                  <line x1="100" y1="20" x2="160" y2="50" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
                </svg>
                <span className={styles.imgLabel}>5&Prime; &times; 40&Prime; &times; 72&Prime;</span>
              </div>
            </div>

            {/* Product info */}
            <div className={styles.info}>
              <div className={styles.badgeRow}>
                <span className={styles.badge}>{p.grade}</span>
                <span className={styles.badge}>{p.ild}</span>
              </div>
              <h2 className={styles.productName}>{p.name}</h2>
              <p className={styles.specs}>{p.specs} &nbsp;·&nbsp; {p.density}</p>
              <p className={styles.desc}>{p.description}</p>

              <ul className={styles.features}>
                {p.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureDot} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.purchaseRow}>
                <div className={styles.priceBlock}>
                  <span className={styles.price}>${p.price.toFixed(2)}</span>
                  <span className={styles.shippingNote}>{p.shipping}</span>
                </div>
                <a
                  href={`/#contact?product=${encodeURIComponent(p.name)}&size=${encodeURIComponent(p.specs)}&grade=${encodeURIComponent(p.grade)}`}
                  className={styles.orderBtn}
                >
                  Order Now
                </a>
              </div>

              <p className={styles.disclaimer}>
                * Orders are confirmed by our team. You will be contacted within one business day with payment and shipping details.
              </p>
            </div>

          </div>
        ))}
      </section>

      {/* Custom order CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Need a Different Size or Grade?</h2>
          <p className={styles.ctaSub}>
            We cut foam to any dimension. Request a custom quote and our team will get back to you within one business day.
          </p>
          <a href="/#contact" className={styles.ctaBtn}>Request Custom Quote</a>
        </div>
      </section>

    </main>
  );
}
