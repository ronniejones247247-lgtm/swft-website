'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import { FOAM_GRADES } from '@/lib/foamGrades';
import { useQuote } from '@/components/QuoteContext';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdzzvng';

export default function Footer() {
  const { prefill } = useQuote();
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);
  const [error,      setError]      = useState('');
  const [foamGrade,  setFoamGrade]  = useState('');
  const [lengthIn,   setLengthIn]   = useState('');
  const [widthIn,    setWidthIn]    = useState('');
  const [thicknessIn, setThicknessIn] = useState('');

  // When the visualizer's "Request a Quote" is clicked, carry its values into the form
  useEffect(() => {
    if (!prefill) return;
    setLengthIn(prefill.lengthIn);
    setWidthIn(prefill.widthIn);
    setThicknessIn(prefill.thicknessIn);
    if (prefill.grade) setFoamGrade(prefill.grade);
    setSubmitted(false);
  }, [prefill]);

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
                <span>(254) 939-6379</span>
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
                <span>1106 Industrial Park Rd, PO Box 240<br />Belton, TX 76513</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <span>Mon–Fri &nbsp;8:00am – 4:00pm</span>
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
              <form className={styles.form} onSubmit={handleSubmit}>

                {/* Formspree config + spam honeypot */}
                <input type="hidden" name="_subject" value="New quote request — swfoamtech.com" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

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
                  <select
                    name="foam_grade"
                    className={styles.formSelect}
                    value={foamGrade}
                    onChange={e => setFoamGrade(e.target.value)}
                  >
                    {FOAM_GRADES.map(g => (
                      <option key={g.value} value={g.value}>{g.label}</option>
                    ))}
                  </select>
                </label>

                {/* Row 3 — Dimensions */}
                <div className={styles.dimRow}>
                  <label className={styles.formLabel}>
                    Length (in)
                    <input name="length_in" type="number" min="0.1" step="0.5" className={styles.formInput} placeholder="24"
                      value={lengthIn} onChange={e => setLengthIn(e.target.value)} />
                  </label>
                  <span className={styles.dimX}>×</span>
                  <label className={styles.formLabel}>
                    Width (in)
                    <input name="width_in" type="number" min="0.1" step="0.5" className={styles.formInput} placeholder="24"
                      value={widthIn} onChange={e => setWidthIn(e.target.value)} />
                  </label>
                  <span className={styles.dimX}>×</span>
                  <label className={styles.formLabel}>
                    Thickness (in)
                    <input name="thickness_in" type="number" min="0.1" step="0.5" className={styles.formInput} placeholder="4"
                      value={thicknessIn} onChange={e => setThicknessIn(e.target.value)} />
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
                    <optgroup label="Search Engines">
                      <option value="Google">Google</option>
                      <option value="Bing">Bing</option>
                      <option value="Yahoo">Yahoo</option>
                      <option value="DuckDuckGo">DuckDuckGo</option>
                      <option value="AI assistant (ChatGPT, Copilot, etc.)">AI assistant (ChatGPT, Copilot, etc.)</option>
                    </optgroup>
                    <optgroup label="Social Media">
                      <option value="Facebook">Facebook</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Other social media">Other social media</option>
                    </optgroup>
                    <optgroup label="Other">
                      <option value="Word of Mouth / Referral">Word of Mouth / Referral</option>
                      <option value="Returning Customer">Returning Customer</option>
                      <option value="Trade Show / Event">Trade Show / Event</option>
                      <option value="Other">Other</option>
                    </optgroup>
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
            <a href="/#home">Home</a>
            <a href="/#expertise">Our Expertise</a>
            <a href="/services">Services</a>
            <a href="/markets">Markets</a>
            <a href="/#visualizer">Visualizer</a>
            <a href="/about">About</a>
            <a href="/#contact">Contact</a>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/SouthWesternFoamTechnologies" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/southwestern-foam-technologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>

          <div className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} SouthWestern Foam Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
