import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../index.css';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <section className="header">
        <nav>
          <a href="/">
           
            <img src="./LOGO.png" alt="logo" />
          </a>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
            <i className="fa fa-times" onClick={toggleMenu}></i>
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                {/* Use Link to navigate to /content-guide */}
                <Link to="/content-guide">HELENA</Link>
              </li>
              <li>
                <a href="#signup">SIGN UP</a>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={toggleMenu}></i>
        </nav>
        <div className="text-box">
          <h1>Your AI-Powered Content Companion!</h1>
          <p>
            Helena revolutionizes the way you discover and consume content. From
            personalized recommendations to trending insights,
            <br /> Helena curates what matters most to you.
          </p>
          <a href="#about" className="hero-btn">
            Visit Us To Know More
          </a>
        </div>
      </section>

      <section className="feature">
        <h1>Stay Ahead with Helena</h1>
        <p>
          Helena brings you a world of personalized content, curating videos,
          articles, and trends that match your interests. Stay updated with
          real-time insights on the latest viral sensations and industry news,
          while exploring diverse categories from entertainment to personal
          growth. With Helena, discovering what’s trending, relevant, and
          inspiring has never been easier.
        </p>
        <div className="row">
          <div className="feature-col">
            <h3>Personalized Content Curation</h3>
            <p>
              Helena understands your preferences and delivers tailored
              recommendations, including videos, articles, and trending topics,
              ensuring you always find what resonates with you.
            </p>
          </div>
          <div className="feature-col">
            <h3>Real-Time Trend Insights</h3>
            <p>
              Stay in the loop with Helena’s ability to identify and showcase
              the latest viral trends and breaking news, keeping you ahead in
              every conversation.
            </p>
          </div>
          <div className="feature-col">
            <h3>Diverse Content Categories</h3>
            <p>
              From entertainment and education to lifestyle and beyond, Helena
              opens doors to a wide array of categories, sparking inspiration
              and catering to your curiosity.
            </p>
          </div>
        </div>
      </section>

      <section className="comp">
        <h1>Powered by Cutting-Edge Technology</h1>
        <p>
          Helena is driven by advanced AI algorithms and state-of-the-art APIs,
          ensuring a seamless and intelligent content discovery experience. By
          leveraging machine learning models, it analyzes your preferences to
          provide highly personalized recommendations. With natural language
          processing (NLP), Helena understands the context of trends and
          content, enabling precise curation of articles, videos, and updates.
          Additionally, its integration with top content platforms and trend
          analysis APIs ensures real-time updates from trusted sources across
          the web.
          <br />
          This powerful combination of technologies makes Helena your ultimate
          companion for discovering relevant, engaging, and inspiring content
          effortlessly.
        </p>
        
      </section>
    </div>
  );
};

export default LandingPage;