import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Home from './Home';
import Shop from './Shop';
import Quote from './Cart';
import Contact from './Contact';
import About from './About';
import ProductDetail from './ProductDetail';


// Sample products
const products = [
  { id: 1, name: "PRO MMA GLOVES", price: 49.00, category: "GEAR", img: process.env.PUBLIC_URL + "/gloves.jpg" },
  { id: 2, name: "BJJ GI - WHITE", price: 89.00, category: "APPAREL", img: process.env.PUBLIC_URL + "/gi.jpg" },
  { id: 3, name: "FOCUS MITTS", price: 35.00, category: "GEAR", img: process.env.PUBLIC_URL + "/mitts.jpg" },
  { id: 4, name: "SHIN GUARDS", price: 55.00, category: "GEAR", img: process.env.PUBLIC_URL + "/shin.jpg" },
  { id: 5, name: "TRAINING SHORTS", price: 29.00, category: "APPAREL", img: process.env.PUBLIC_URL + "/shorts.jpg" },
];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

function App() {
  // Unified cart/quote state
  const [quoteItems, setQuoteItems] = useState([]);
  const [email, setEmail] = useState("");

  /* =========================
     ADD TO CART / REQUEST QUOTE
  ========================= */
  const addToCart = (product) => {
    setQuoteItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Alert removed for professional feel
  };

  const removeFromCart = (id) => {
    setQuoteItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setQuoteItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  /* =========================
     NEWSLETTER
  ========================= */
  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    // Alert removed: alert(`SUCCESS: ${email} ADDED TO NEWSLETTER`);
    setEmail("");
  };

  /* =========================
     GLOBAL ANIMATIONS (AOS)
  ========================= */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="App">

        {/* ================= NAVBAR ================= */}
        <header className="navbar">
          <div className="nav-top">
            <Link to="/" className="logo-link">
              <div className="logo">FIT<span className="red-text">V</span>EX</div>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Link to="/quote" className="cart-link" onClick={() => { }}>
                REQUEST QUOTE <span className="cart-count red-text">
                  ({quoteItems.reduce((acc, item) => acc + (item.quantity || 1), 0)})
                </span>
              </Link>
            </div>
          </div>

          <nav className="nav-links">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/shop">SHOP</Link></li>
              <div className="nav-logo-center">
                <Link to="/"><img src={process.env.PUBLIC_URL + "/logo.svg"} alt="FITVEX" className="v-logo-tilt" /></Link>
              </div>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </header>

        {/* ================= MAIN ================= */}
        <main className="main-content" style={{ minHeight: 'calc(100vh - 400px)' }}>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route
              path="/quote"
              element={
                <Quote
                  cartItems={quoteItems}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  setCart={setQuoteItems}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
          </Routes>
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="footer" data-aos="fade-up">
          <div className="footer-top">
            <div className="footer-nav">
              <Link to="/privacy-policy">PRIVACY POLICY</Link>
              <Link to="/certificate">CERTIFICATE</Link>
            </div>

            <div className="newsletter">
              <label>JOIN OUR NEWSLETTER</label>
              <div className="newsletter-form">
                <form onSubmit={handleNewsletter} className="newsletter-input">
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn-red-slant">SUBSCRIBE</button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="social-icons-container">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-circle">IG</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-circle">FB</a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="social-icon-circle">WA</a>
              <a href="https://yourwebsite.com" target="_blank" rel="noreferrer" className="social-icon-circle">WWW</a>
            </div>
            <div className="footer-copyright">
              © 2025 FITVEX. FORGED IN PASSION.
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;

