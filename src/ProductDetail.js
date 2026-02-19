// src/ProductDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ padding: '100px', color: 'white', textAlign: 'center' }}>
        PRODUCT NOT FOUND
        <br />
        <Link to="/shop" className="btn-red-slant" style={{ marginTop: '20px', display: 'inline-block' }}>
          BACK TO SHOP
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-img">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="red-text">BASED ON MOQ</p>
        <p className="product-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          This product is forged for ultimate performance and durability.
        </p>
        <button className="btn-red-slant" onClick={() => addToCart(product)}>
          ADD TO QUOTE
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
