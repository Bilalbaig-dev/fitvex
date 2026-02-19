// src/Privacy.js
import React from 'react';

const Privacy = () => {
    return (
        <div style={{ padding: '80px 5%', maxWidth: '1000px', margin: '0 auto', color: 'white' }}>
            <h1 style={{ fontFamily: 'var(--font-oswald)', fontSize: '3rem', marginBottom: '30px' }}>PRIVACY POLICY</h1>
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                At FITVEX, we respect your privacy. This policy outlines how we handle your personal information.
            </p>
            <h3 style={{ fontFamily: 'var(--font-oswald)', marginBottom: '15px' }}>1. DATA COLLECTION</h3>
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                We collect basic information such as your name and email when you sign up for our newsletter or contact us.
                We do not sell your data to third parties.
            </p>
            <h3 style={{ fontFamily: 'var(--font-oswald)', marginBottom: '15px' }}>2. SECURITY</h3>
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                We employ industry-standard security measures to protect your information.
            </p>
            <p style={{ marginTop: '40px', color: '#888' }}>
                Last updated: 2025
            </p>
        </div>
    );
};

export default Privacy;
