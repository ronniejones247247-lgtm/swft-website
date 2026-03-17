import Image from 'next/image';
import styles from './About.module.css';

const stats = [
  { val: '30+', label: 'Years in Business' },
  { val: '25,000', label: 'Sq Ft Facility' },
  { val: '23', label: 'Full-Time Employees' },
  { val: 'ISO', label: '9001:2000 Certified' },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        {/* Image side */}
        <div className={styles.imageSide}>
          <div className={styles.imgFrame}>
            <Image
              src="/slideshow/slide2.jpg"
              alt="Foam fabrication"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.accentCard}>
            <span className={styles.accentVal}>Creating</span>
            <span className={styles.accentLbl}>The Perfect Fit</span>
          </div>
        </div>

        {/* Text side */}
        <div className={styles.textSide}>
          <p className="section-label">About SWFT</p>
          <h2 className="section-title">Your Trusted Foam Fabrication Partner</h2>
          <p className={styles.body}>
            As a family-owned business, SouthWestern Foam Technologies has maintained its founding
            philosophy for over 30 years — exceptional quality, consistent deliverability, and
            outstanding customer service. We have been recognized as a leader in design and quality
            manufacturing in a rapidly advancing industry.
          </p>
          <p className={styles.body}>
            From our 25,000 sq ft fabrication facility in Belton, TX, our team of 23 full-time
            employees delivers just-in-time foam solutions throughout the United States and Mexico.
            Our ISO 9001:2000 certified processes ensure full traceability and accountability on
            every order.
          </p>
          <blockquote className={styles.mission}>
            &ldquo;Our mission is to supply our customers with on-time delivery of exact quantities
            of the highest quality parts available in the industry, and to continually improve to
            exceed our customers&rsquo; requirements.&rdquo;
          </blockquote>

          {/* Stats grid */}
          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
