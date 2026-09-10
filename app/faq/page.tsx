import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './faq.module.css';
import { breadcrumbJsonLd } from '@/lib/breadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'Foam Fabrication FAQ | SouthWestern Foam Technologies',
  description:
    'Answers to common questions about custom foam cutting, minimum orders, foam types, fire-retardant ratings, delivery to the US and Mexico, and getting a quote from SWFT in Belton, TX.',
  alternates: { canonical: '/faq' },
};

const faqs = [
  {
    q: 'What types of foam do you cut and fabricate?',
    a: 'We stock and fabricate conventional polyurethane (ethers from .90 to 5.0 lb density), high resilience (H.R.), viscoelastic memory foam, acoustical foam, closed cell foam, EPS expanded polystyrene, hydrophobic outdoor foam, and fire-retardant products. If you’re not sure which foam fits your application, our team will recommend the right grade.',
  },
  {
    q: 'Can you cut foam to a custom shape or size?',
    a: 'Yes — custom shapes are our specialty. Our equipment includes CNC 3-dimensional cutting, computerized vertical and horizontal cutting, die and pressure cutting, router cutting, and convoluting. We accept AutoCAD, Wincap, and IGES files, and we offer full prototyping and pattern development if you’re starting from a sketch or a physical sample.',
  },
  {
    q: 'Do you handle small orders, or only large production runs?',
    a: 'Both. We fabricate everything from single custom pieces to high-volume production runs, and we offer just-in-time delivery, KanBan stocking, and safety stock programs for customers who need a steady production-line supply.',
  },
  {
    q: 'Where do you deliver?',
    a: 'We deliver throughout the United States and Mexico from our fabrication facility in Belton, Texas — in the heart of the Dallas–Austin–San Antonio corridor. Direct-to-warehouse and direct retail packaging programs are available.',
  },
  {
    q: 'Are you ISO certified?',
    a: 'We are not ISO certified, but our quality system is modeled on ISO 9001:2015, with full traceability and accountability on every part. We back that up with in-house Instron physical property testing — density, IFD/ILD, tensile, tear, compression set, flammability, and more.',
  },
  {
    q: 'Do you offer fire-retardant foam?',
    a: 'Yes. We supply MVSS 302, Cal 117, low smoke, and barrier certified products for safety-critical applications in automotive, transportation, and commercial seating.',
  },
  {
    q: 'Do you make molded foam parts?',
    a: 'Yes — through our GRFT partnership we offer fully automated molded foam production on robotic 64-position molding lines, including molded high-resilience and viscoelastic parts, with flexible tooling and volume requirements.',
  },
  {
    q: 'What industries do you serve?',
    a: 'Our customers span marine, medical, automotive, transportation, packaging, office and theater seating, recreational, and oilfield markets. If your product uses foam in any capacity, chances are we can help.',
  },
  {
    q: 'Where are you located?',
    a: 'Our fabrication facility is at 1106 Industrial Park Rd, Belton, TX 76513. We’re open Monday through Friday, 8:00 AM to 4:00 PM.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the quote form on our homepage, call us at (254) 939-6379, or email info@swfoamtech.com. Tell us about your application, rough dimensions, and quantities — you can also try our foam visualizer to explore shapes and grades before you reach out.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: 'FAQ', path: '/faq' }])) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="/photos/convoluted-foam.jpg"
          alt="Convoluted foam sheets on the SWFT production floor"
          fill
          priority
          className={styles.heroPhoto}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <p className={styles.label}>Common Questions</p>
          <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
          <p className={styles.heroSub}>
            Straight answers about our foam types, custom cutting, order sizes, quality
            processes, and delivery — so you know what to expect before you reach out.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className={styles.content}>
        {faqs.map(f => (
          <details key={f.q} className={styles.item}>
            <summary className={styles.question}>
              {f.q}
              <span className={styles.chevron} aria-hidden="true" />
            </summary>
            <p className={styles.answer}>{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.ctaBlock}>
        <h2 className={styles.ctaTitle}>Still Have Questions?</h2>
        <p className={styles.ctaSub}>
          Our team is happy to talk through your application — no obligation.
        </p>
        <a href="/#contact" className={styles.ctaBtn}>Contact Us</a>
      </section>
    </main>
  );
}
