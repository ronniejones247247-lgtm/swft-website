import Image from 'next/image';
import styles from './About.module.css';

const stats = [
  { val: '30+', label: 'Years of Experience' },
  { val: 'CNC', label: 'Precision Machining' },
  { val: '100%', label: 'Custom Engineering' },
  { val: 'Fast', label: 'Turnaround Times' },
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
            At SouthWestern Foam Technologies, we combine decades of hands-on experience
            with precision engineering to deliver foam solutions that fit perfectly — every time.
            Whether you need a single custom piece or a large production run, our on-site team
            is dedicated to getting it right.
          </p>
          <p className={styles.body}>
            We work with a wide range of foam types including conventional, memory, high-resilience,
            and specialty foams, ensuring the right material for every application.
          </p>

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
