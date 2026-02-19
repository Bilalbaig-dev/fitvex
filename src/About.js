// src/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>FORGED IN <span className="red-text">PASSION</span></h1>
                <p className="subtitle">THE STORY OF FITVEX</p>
            </section>

            <section className="about-content fade-in">
                <div className="about-text">
                    <h2 className="section-title">OUR <span className="red-text">MISSION</span></h2>
                    <p>
                        FITVEX wasn't born in a boardroom. It was forged on the mats, in the ring, and through the grind.
                        We saw a gap between elite performance gear and accessible pricing. We filled it.
                    </p>
                    <p>
                        We believe that every fighter, from the day-one white belt to the seasoned pro, deserves gear that
                        can withstand the wars of training. Our mission is simple: <strong>Excellence in every stitch. Power in every strike.</strong>
                    </p>
                </div>

                <div className="about-stat-grid">
                    <div className="stat-card">
                        <h3>10K+</h3>
                        <p>FIGHTERS EQUIPPED</p>
                    </div>
                    <div className="stat-card">
                        <h3>100%</h3>
                        <p>BATTLE TESTED</p>
                    </div>
                    <div className="stat-card">
                        <h3>24/7</h3>
                        <p>SUPPORT</p>
                    </div>
                </div>
            </section>

            <section className="about-values">
                <div className="value-item">
                    <h3>INTEGRITY</h3>
                    <p>We stand behind our gear. If it fails you, we failed you. And we don't accept failure.</p>
                </div>
                <div className="value-item">
                    <h3>DISCIPLINE</h3>
                    <p>Like you, we show up every day. Constant improvement is our only setting.</p>
                </div>
                <div className="value-item">
                    <h3>COMMUNITY</h3>
                    <p>FITVEX is more than a brand. It's an army of like-minded warriors.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
