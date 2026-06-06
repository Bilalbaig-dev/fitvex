import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    { id: 1, title: "ELITE STRIKING: SPEED DRILLS", category: "TRAINING", img: process.env.PUBLIC_URL + "/blog1.jpg" },
    { id: 2, title: "THE SCIENCE OF RECOVERY", category: "LIFESTYLE", img: process.env.PUBLIC_URL + "/blog2.jpg" },
    { id: 3, title: "GEAR REVIEW: V-1 GLOVES", category: "INNOVATION", img: process.env.PUBLIC_URL + "/blog3.jpg" },
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>LATEST <span className="red-text">INNOVATIONS</span></h1>
        <p>TRAIN. LEARN. CONQUER.</p>
      </div>

      <div className="blog-grid">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-img-container">
              <div className="category-tag">{post.category}</div>
              <img src={post.img} alt={post.title} />
            </div>
            <div className="blog-info">
              <h3>{post.title}</h3>
              <button className="btn-outline-slant">READ MORE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;