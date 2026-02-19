// src/Certificate.js
import React from 'react';

const Certificate = () => {
    return (
        <div style={{ padding: '80px 5%', maxWidth: '1000px', margin: '0 auto', color: 'white' }}>
            <h1 style={{ fontFamily: 'var(--font-oswald)', fontSize: '3rem', marginBottom: '30px' }}>CERTIFICATIONS</h1>
            <p style={{ marginBottom: '30px', fontSize: '1.2rem' }}>
                FITVEX gear is certified for elite competition.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                <div style={{ border: '1px solid #333', padding: '30px', textAlign: 'center', background: '#0a0a0a' }}>
                    <h3 style={{ color: 'var(--primary-red)', marginBottom: '10px' }}>ISO 9001</h3>
                    <p>Quality Management System Certified</p>
                </div>
                <div style={{ border: '1px solid #333', padding: '30px', textAlign: 'center', background: '#0a0a0a' }}>
                    <h3 style={{ color: 'var(--primary-red)', marginBottom: '10px' }}>IBJJF APPROVED</h3>
                    <p>Official Competition Standards Compliant</p>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
