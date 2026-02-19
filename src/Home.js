// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ addToCart }) => {
  // AOS is initialized globally in App.js

  const features = [
    { title: "PREMIUM QUALITY", desc: "Forged for elite performance" },
    { title: "FAST SHIPPING", desc: "Dispatched within 24 hours" },
    { title: "30-DAY RETURNS", desc: "Battle-tested guarantee" },
    { title: "SECURE CHECKOUT", desc: "Encrypted payment processing" }
  ];

  const categories = [
    { id: 1, name: "MMA", img: "/gloves.jpg" },
    { id: 2, name: "JIU-JITSU", img: "/gi.jpg" },
    { id: 3, name: "STRIKING", img: "/mitts.jpg" },
    { id: 4, name: "APPAREL", img: "/shorts.jpg" }
  ];

  return (
    <div className="home-container">

      {/* CINEMATIC HERO */}
      <section className="hero-cinematic">
        <div className="hero-bg" style={{ backgroundImage: "url('/hero-bg.png')" }}></div>
        <div className="hero-overlay-gradient"></div>

        <div className="hero-content-centered" data-aos="fade-up">
          <h1 className="hero-giant-text">
            GEAR UP. <span className="red-stroke">FIGHT HARD.</span>
          </h1>
          <p className="hero-subtext">ELITE COMBAT GEAR FOR THE MODERN WARRIOR</p>

          <div className="hero-cta-group">
            <Link to="/shop" className="btn-red-slant">SHOP THE COLLECTION</Link>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP (TRUST SIGNALS) */}
      <section className="feature-strip">
        {features.map((f, i) => (
          <div className="feature-item" key={i}>
            <span className="feature-red-bar"></span>
            <div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CATEGORY BENTO GRID */}
      <section className="category-section">
        <h2 className="section-header">EXPLORE <span className="red-text">CATEGORIES</span></h2>
        <div className="bento-grid">
          {categories.map((cat, i) => (
            <Link to="/shop" className={`bento-item item-${i}`} key={cat.id} data-aos="fade-up" data-aos-delay={i * 100}>
              <img src={cat.img} alt={cat.name} />
              <div className="bento-overlay">
                <h3>{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
