'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './Footer.module.css';

// ── Replace YOUR_FORM_ID after signing up at formspree.io ──────────────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const FOAM_GRADES = [
  { value: '',                    label: 'Select a grade…' },
  { value: 'Standard Foam',       label: 'Standard Foam' },
  { value: 'High Density Foam',   label: 'High Density Foam' },
  { value: 'High Resilience Foam',label: 'High Resilience Foam' },
  { value: 'Memory Foam',         label: 'Memory Foam' },
  { value: 'Closed Cell Foam',    label: 'Closed Cell Foam' },
  { value: 'Other / Not Sure',    label: 'Other / Not Sure' },
];

export default function Footer() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const [error,      setError]      = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error — please call or email us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ── Contact / Quote Section ── */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactInner}>

          {/* Left — info */}
          <div className={styles.contactText}>
            <p className="section-label" style={{ color: 'var(--teal)' }}>Get In Touch</p>
            <h2 className={styles.contactTitle}>Request a Custom Foam Quote</h2>
            <p className={styles.contactSub}>
              Fill out the form and our team will respond with a personalized quote, typically within one business day.
            </p>

            <ul className={styles.contactInfo}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </span>
                <span>(555) 000-0000</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span>info@swfoamtech.com</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span>Tucson, AZ</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <span>Mon–Fri &nbsp;7am – 5pm MST</span>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successBox}>
                <svg className={styles.successIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Quote Request Sent!</h3>
                <p>Thanks — we&apos;ll be in touch within one business day.</p>
                <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>

                {/* Row 1 — Name + Email */}
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>
                    Full Name <span className={styles.req}>*</span>
                    <input name="name" type="text" required className={styles.formInput} placeholder="Jane Smith" />
                  </label>
                  <label className={styles.formLabel}>
                    Email <span className={styles.req}>*</span>
                    <input name="email" type="email" required className={styles.formInput} placeholder="jane@company.com" />
                  </label>
                </div>

                {/* Row 2 — Phone + Company */}
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>
                    Phone
                    <input name="phone" type="tel" className={styles.formInput} placeholder="(555) 000-0000" />
                  </label>
                  <label className={styles.formLabel}>
                    Company / Organization
                    <input name="company" type="text" className={styles.formInput} placeholder="Acme Co." />
                  </label>
                </div>

                {/* Foam Grade */}
                <label className={styles.formLabel}>
                  Foam Grade
                  <select name="foam_grade" className={styles.formSelect}>
                    {FOAM_GRADES.map(g => (
                      <option key={g.value} value={g.value}>{g.label}</option>
                    ))}
                  </select>
                </label>

                {/* Row 3 — Dimensions */}
                <div className={styles.dimRow}>
                  <label className={styles.formLabel}>
                    Length (in)
                    <input name="length_in" type="number" min="0.1" step="0.5" className={styles.formInput} placeholder="24" />
                  </label>
                  <span className={styles.dimX}>×</span>
                  <label className={styles.formLabel}>
                    Width (in)
                    <input name="width_in" type="number" min="0.1" step="0.5" className={styles.formInput} placeholder="24" />
                  </label>
                  <span className={styles.dimX}>×</span>
                  <label className={styles.formLabel}>
                    Thickness (in)
                    <input name="thickness_in" type="number" min="0.1" step="0.5" className={styles.formInput} placeholder="4" />
                  </label>
                </div>

                {/* Quantity */}
                <label className={styles.formLabel}>
                  Quantity (number of pieces)
                  <input name="quantity" type="number" min="1" className={styles.formInput} placeholder="e.g. 10" />
                </label>

                {/* Application */}
                <label className={styles.formLabel}>
                  Application / Use Case <span className={styles.req}>*</span>
                  <textarea
                    name="application"
                    required
                    className={styles.formTextarea}
                    rows={4}
                    placeholder="Describe what the foam is for — seat cushions, packaging, soundproofing, mattress, etc. Include any special requirements."
                  />
                </label>

                {/* How did you hear */}
                <label className={styles.formLabel}>
                  How did you hear about us?
                  <select name="referral" className={styles.formSelect}>
                    <option value="">Select…</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="Returning Customer">Returning Customer</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                {error && <p className={styles.errorMsg}>{error}</p>}

                <button type="submit" className={styles.submitBtn} disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Quote Request'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
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
