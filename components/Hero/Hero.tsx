'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const slides = [
  { src: '/photos/swft-delivery-trucks.jpg', alt: 'SouthWestern Foam Technologies delivery trucks with Creating The Perfect Fit branding' },
  { src: '/photos/custom-cut-foam-parts.jpg', alt: 'Precision-cut custom foam parts stacked on carts in the SWFT fabrication facility' },
  { src: '/photos/foam-texture.jpg', alt: 'Close-up of open-cell polyurethane foam texture' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Background slideshow */}
      <div className={styles.bgSlideshow}>
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              className={styles.slideImg}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <Image
          src="/logo.jpg"
          alt="SouthWestern Foam Technologies"
          width={110}
          height={110}
          className={styles.logo}
        />
        <p className={styles.eyebrow}>SouthWestern Foam Technologies</p>
        <h1 className={styles.headline}>Creating The Perfect Fit</h1>
        <p className={styles.sub}>
          Custom foam solutions engineered precisely to your specifications.
          Cut-to-size, CNC machinery, die pressing &amp; more.
        </p>
        <div className={styles.actions}>
          <a href="#visualizer" className={styles.btnPrimary}>Visualize Your Foam</a>
          <a href="#services" className={styles.btnSecondary}>Our Services</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollDot} />
      </div>
    </section>
  );
}
