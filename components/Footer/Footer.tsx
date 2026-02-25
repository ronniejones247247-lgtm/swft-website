'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactText}>
            <p className="section-label" style={{ color: 'var(--teal-light)' }}>Get In Touch</p>
            <h2 className={styles.contactTitle}>Ready to Order Your Custom Foam?</h2>
            <p className={styles.contactSub}>
              Tell us your dimensions, foam type, and quantity. Our team will get back to you with a personalized quote quickly.
            </p>
          </div>

          <form className={styles.form} onSubmit={e => e.preventDefault()}>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                Name
                <input type="text" className={styles.formInput} placeholder="Your name" />
              </label>
              <label className={styles.formLabel}>
                Email
                <input type="email" className={styles.formInput} placeholder="your@email.com" />
              </label>
            </div>
            <label className={styles.formLabel}>
              Phone (optional)
              <input type="tel" className={styles.formInput} placeholder="(555) 000-0000" />
            </label>
            <label className={styles.formLabel}>
              Message / Dimensions
              <textarea
                className={styles.formTextarea}
                rows={4}
                placeholder="Describe your foam needs — dimensions, quantity, foam type, application..."
              />
            </label>
            <button type="submit" className={styles.submitBtn}>Send Request</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Image src="/logo.jpg" alt="SWFT" width={52} height={52} className={styles.footerLogo} />
            <div>
              <div className={styles.footerName}>SouthWestern Foam Technologies</div>
              <div className={styles.footerTagline}>Creating The Perfect Fit</div>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <a href="#home">Home</a>
            <a href="#expertise">Our Expertise</a>
            <a href="#services">Services</a>
            <a href="#visualizer">Visualizer</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} SouthWestern Foam Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
