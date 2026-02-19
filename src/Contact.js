// src/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // --- CONFIGURATION ---
  // RENAME THIS TO YOUR BUSINESS EMAIL
  const BUSINESS_EMAIL = "fitvexsports@gmail.com";
  // ---------------------

  return (
    <div className="contact-page">
      <div className="contact-wrapper">

        {/* LEFT SIDE: BRAND INFO */}
        <div className="contact-info">
          <h2 className="info-title">JOIN THE <span className="red-text">ARMORY</span></h2>
          <p className="info-desc">Whether it’s custom gear or elite training inquiries, our team is ready.</p>

          <div className="info-item">
            <span className="red-text">EMAIL:</span> {BUSINESS_EMAIL}
          </div>
          <div className="info-item">
            <span className="red-text">HQ:</span> 12 FIGHTER WAY, LAS VEGAS, NV
          </div>
          <div className="info-item">
            <span className="red-text">HOURS:</span> 09:00 - 18:00 PST
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <div className="contact-box">
          {/* Form submits to FormSubmit.co */}
          <form action={`https://formsubmit.co/${BUSINESS_EMAIL}`} method="POST">
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            {/* <input type="hidden" name="_next" value="http://localhost:3000/contact" /> - Removed for production safety */}

            <input
              type="text" name="name" placeholder="YOUR NAME" required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email" name="email" placeholder="YOUR EMAIL" required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              name="message" placeholder="YOUR MESSAGE" rows="6" required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>

            <button type="submit" className="btn-red-slant full-width">
              SEND MESSAGE
            </button>

            <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#666' }}>
              * SYSTEM READY. MESSAGES WILL BE SENT TO: {BUSINESS_EMAIL}
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
