// src/Cart.js
import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity, setCart }) => {
  const BUSINESS_EMAIL = "fitvexsports@gmail.com";

  // Prepare string for email (cartItems are now unique with quantity property)
  const quoteDetailsString = cartItems.map(item => {
    return `${item.name} (Qty: ${item.quantity})`;
  }).join('\\n');

  return (
    <div className="cart-container">
      <h1 className="cart-title">REQUEST <span className="red-text">QUOTE</span></h1>

      <div className="cart-layout quote-layout">
        {/* LEFT: Items List */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <p className="empty-msg">YOUR QUOTE LIST IS EMPTY.</p>
              <a href="/shop" className="btn-red-slant" style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none' }}>RETURN TO PRODUCTS</a>
            </div>
          ) : (
            <div>
              <p style={{ marginBottom: '20px', fontStyle: 'italic', color: '#aaa' }}>
                ENTER YOUR DESIRED QUANTITIES BELOW
              </p>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="red-text">PRICE ON REQUEST</p>
                  </div>

                  <div className="quote-qty-control">
                    <label>QTY:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="qty-input"
                    />
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    REMOVE
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Quote Form */}
        <aside className="order-summary quote-form-box">
          <h2>SUBMIT QUOTE</h2>
          <form action={`https://formsubmit.co/${BUSINESS_EMAIL}`} method="POST">
            <input type="hidden" name="_subject" value="NEW EXPORT QUOTE REQUEST" />
            <input type="hidden" name="_subject" value="NEW EXPORT QUOTE REQUEST" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="QUOTE_DETAILS" value={quoteDetailsString} />

            <div className="form-group">
              <label>NAME / COMPANY</label>
              <input type="text" name="name" required placeholder="ENTER NAME" />
            </div>
            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input type="email" name="email" required placeholder="ENTER EMAIL" />
            </div>
            <div className="form-group">
              <label>MESSAGE / DETAILS</label>
              <textarea name="message" rows="4" placeholder="ADDITIONAL REQUIREMENTS..."></textarea>
            </div>

            <button type="submit" className="btn-red-slant full-width">
              SEND REQUEST
            </button>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
