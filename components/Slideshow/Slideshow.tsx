'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Slideshow.module.css';

const slides = [
  {
    src: '/slideshow/slide1.jpg',
    caption: 'At Southwestern Foam Technologies, we specialize in providing high-quality foam solutions tailored to your exact needs.',
  },
  {
    src: '/slideshow/slide3.jpg',
    caption: 'Whether you require precise cut-to-size pieces, intricate pattern cuts, or complex multi-dimensional CNC machining, we deliver with precision and reliability.',
  },
  {
    src: '/slideshow/slide5.jpg',
    caption: 'Our team of experienced on-site engineers works closely with you to design and manufacture the perfect fit for your application…',
  },
  {
    src: '/slideshow/slide6.jpg',
    caption: '…ensuring optimal performance and satisfaction. Trust us for all your foam needs—quality, customization, and expertise that you can count on.',
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [captionVisible, setCaptionVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setCaptionVisible(false);
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length);
        setCaptionVisible(true);
      }, 600);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="expertise" className={styles.section}>
      <div className={styles.inner}>
        {/* Left: slideshow */}
        <div className={styles.slideshowWrapper}>
          <div className={styles.slideshow}>
            {slides.map((s, i) => (
              <div
                key={s.src}
                className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
              >
                <Image src={s.src} alt="" fill className={styles.img} />
              </div>
            ))}
            {/* Dot indicators */}
            <div className={styles.dots}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => { setCurrent(i); setCaptionVisible(true); }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: caption */}
        <div className={styles.captionSide}>
          <p className="section-label">Our Expertise</p>
          <h2 className="section-title">Quality Foam. Precision Cuts. Expert Engineering.</h2>
          <blockquote
            className={`${styles.caption} ${captionVisible ? styles.captionVisible : ''}`}
          >
            {slides[current].caption}
          </blockquote>
          <div className={styles.progress}>
            <div
              className={styles.progressBar}
              style={{ width: `${((current + 1) / slides.length) * 100}%` }}
            />
          </div>
          <p className={styles.counter}>
            {current + 1} / {slides.length}
          </p>
          <a href="#contact" className={styles.btn}>Talk to an Engineer</a>
        </div>
      </div>
    </section>
  );
}
