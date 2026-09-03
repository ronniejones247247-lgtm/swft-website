import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us | SouthWestern Foam Technologies',
  description: 'Family-owned for 30 years, SWFT operates an 8 acre fabrication facility in Belton, TX with a quality system modeled on ISO 9001:2015.',
  alternates: { canonical: '/about' },
};

const stats = [
  { val: '30+', label: 'Years in Business' },
  { val: '8 Acre', label: 'Fabrication Facility' },
  { val: 'ISO', label: '9001:2015 Aligned Processes' },
];

const values = [
  { title: 'Exceptional Quality', desc: 'Every part is manufactured to exact specifications with full traceability and quality processes modeled on ISO 9001:2015.' },
  { title: 'Consistent Deliverability', desc: 'On-time delivery of exact quantities — from single pieces to high-volume production runs.' },
  { title: 'Customer Service', desc: 'Our team works closely with you from design through delivery, adapting to your schedule and requirements.' },
  { title: 'Innovation', desc: 'Continuous investment in equipment and processes to stay at the forefront of foam fabrication technology.' },
  { title: 'Employee Excellence', desc: 'We provide our employees with a quality workplace and environment — the foundation of our quality output.' },
  { title: 'Family Owned', desc: 'As a family-owned business, we operate with long-term values — building lasting relationships with every customer.' },
];

const moldedCapabilities = [
  'Four fully automated computerized robotic 64-position molding lines',
  'Molded High Resilient foam systems',
  'Molded Viscoelastic foam system',
  'Extensive chemical system variation controls',
  'Tooling/volume requirements fully flexible to customer needs',
  'Internal and external heated tools',
  'Epoxy and aluminum tooling available',
  'Extensive curing conveyor system',
  'Value-added lamination',
];

export default function AboutPage() {
  return (
    <main className={styles.main}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.label}>Our Story</p>
          <h1 className={styles.heroTitle}>About SouthWestern Foam Technologies</h1>
          <p className={styles.heroSub}>
            Family-owned and operated for over 30 years, SWFT has built a reputation for exceptional
            quality, consistent delivery, and engineering expertise in a rapidly advancing industry.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className={styles.whoWeAre}>
        <div className={styles.whoInner}>
          <div className={styles.whoText}>
            <p className={styles.sectionLabel}>Who We Are</p>
            <h2 className={styles.sectionTitle}>A Leader in Foam Fabrication for 30 Years</h2>
            <p className={styles.body}>
              SouthWestern Foam Technologies was founded on a simple philosophy: deliver exceptional
              quality, maintain consistent deliverability, and provide outstanding customer service.
              Three decades later, that philosophy still drives everything we do.
            </p>
            <p className={styles.body}>
              As a recognized leader in design and quality manufacturing, we operate from our
              8 acre fabrication facility in Belton, Texas — in the heart of the
              Dallas–Austin–San Antonio corridor — servicing customers throughout the United
              States and Mexico with just-in-time delivery programs tailored to your needs.
            </p>
            <blockquote className={styles.mission}>
              &ldquo;Our mission is to supply our customers with on-time delivery of exact quantities
              of the highest quality parts available in the industry, and to continually improve to
              exceed our customers&rsquo; expectations.&rdquo;
            </blockquote>
          </div>
          <div className={styles.whoImage}>
            <div className={styles.imgFrame}>
              <Image
                src="/photos/swft-delivery-trucks.jpg"
                alt="SouthWestern Foam Technologies branded delivery trucks headed out from Belton, TX"
                fill
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsInner}>
          {stats.map(s => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statVal}>{s.val}</span>
              <span className={styles.statLbl}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <p className={styles.sectionLabel}>Our Philosophy</p>
          <h2 className={styles.sectionTitle}>Core Values</h2>
          <div className={styles.valuesGrid}>
            {values.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className={styles.facilities}>
        <div className={styles.facilitiesInner}>
          <p className={styles.sectionLabel}>Our Facility</p>
          <h2 className={styles.sectionTitle}>Belton, TX — Fabrication</h2>
          <div className={styles.facilityCards}>
            <div className={styles.facilityCard}>
              <div className={styles.facilityVal}>8 Acre</div>
              <div className={styles.facilityLbl}>Fabrication Facility</div>
              <p className={styles.facilityDesc}>
                A fully equipped fabrication facility housing computerized cutting, CNC machinery,
                lamination, and packaging operations under one roof.
              </p>
            </div>
            <div className={styles.facilityCard}>
              <div className={styles.facilityVal}>US & MX</div>
              <div className={styles.facilityLbl}>Delivery Coverage</div>
              <p className={styles.facilityDesc}>
                Just-in-time delivery throughout the United States and Mexico, with KanBan
                and safety stock programs available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRFT Partnership */}
      <section className={styles.grft}>
        <div className={styles.grftInner}>
          <div className={styles.grftText}>
            <p className={styles.sectionLabel}>Partnership</p>
            <h2 className={styles.sectionTitle}>GRFT — Molded Foam Capabilities</h2>
            <p className={styles.body}>
              Through our strategic partnership with GRFT, we extend our capabilities to include
              fully automated molded foam production — giving customers access to complex molded
              shapes and high-volume runs not achievable through conventional fabrication alone.
            </p>
            <ul className={styles.grftList}>
              {moldedCapabilities.map(c => (
                <li key={c} className={styles.grftItem}>
                  <span className={styles.grftDot} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to Work With Us?</h2>
          <p className={styles.ctaSub}>
            Whether you need a single custom piece or a high-volume supply program, we&apos;re ready to help.
          </p>
          <a href="/#contact" className={styles.ctaBtn}>Request a Quote</a>
        </div>
      </section>

    </main>
  );
}
