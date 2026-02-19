// src/Shop.js
import React, { useState, useEffect } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Shop = ({ addToCart }) => {
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const products = [
    { id: 1, name: "PRO MMA GLOVES", price: 49.00, category: "GEAR", img: "/gloves.jpg" },
    { id: 2, name: "BJJ GI - WHITE", price: 89.00, category: "APPAREL", img: "/gi.jpg" },
    { id: 3, name: "FOCUS MITTS", price: 35.00, category: "GEAR", img: "/mitts.jpg" },
    { id: 4, name: "SHIN GUARDS", price: 55.00, category: "GEAR", img: "/shin.jpg" },
    { id: 5, name: "TRAINING SHORTS", price: 29.00, category: "APPAREL", img: "/shorts.jpg" },
  ];

  const filteredProducts = filter === 'ALL'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1 className="section-title">COMBAT <span className="red-text">COLLECTION</span></h1>
        <div className="filter-bar">
          {['ALL', 'GEAR', 'APPAREL'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="shop-grid">
        {filteredProducts.map((p, i) => (
          <div className="product-card" key={p.id} data-aos="fade-up" data-aos-delay={i * 50}>
            <Link to={`/product/${p.id}`} className="product-img-container">
              <img src={p.img} alt={p.name} />
            </Link>
            <div className="product-details">
              <h3 className="product-title">{p.name}</h3>
              <p className="product-price">BASED ON MOQ</p>
              <button className="btn-buy" onClick={() => addToCart(p)}>
                ADD TO QUOTE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
