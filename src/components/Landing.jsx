import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Landing = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      {/* Header Section */}
      <section className="header">
        <nav>
          <a href="index.html">
            <img src="LOGO.png" alt="logo" />
          </a>
          <div className={`nav-links ${isMenuVisible ? "active" : ""}`} id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="/AboutUs">ABOUT</a>
              </li>
              <li>
                <Link to="/content-guide">HELENA</Link>
              </li>
              <li>
                {/* <a href="/SignUP">SIGN UP</a> 
                */}
                <Link to="/SignUP">SIGN UP</Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>
        <div className="text-box">
          <h1>Your AI-Powered Content Companion!</h1>
          <p>
            Helena revolutionizes the way you discover and consume content. From personalized recommendations to
            trending insights, Helena curates what matters most to you.
          </p>
          <a href="" className="hero-btn">
            Visit Us To Know More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature">
        <h1>Stay Ahead with Helena</h1>
        <p>
          Helena brings you a world of personalized content, curating videos, articles, and trends that match your
          interests. Stay updated with real-time insights on the latest viral sensations and industry news, while
          exploring diverse categories from entertainment to personal growth. With Helena, discovering what’s trending,
          relevant, and inspiring has never been easier.
        </p>
        <div className="row">
          <div className="feature-col">
            <h3>Personalized Content Curation</h3>
            <p>
              Helena understands your preferences and delivers tailored recommendations, including videos, articles, and
              trending topics, ensuring you always find what resonates with you.
            </p>
          </div>
          <div className="feature-col">
            <h3>Real-Time Trend Insights</h3>
            <p>
              Stay in the loop with Helena’s ability to identify and showcase the latest viral trends and breaking news,
              keeping you ahead in every conversation.
            </p>
          </div>
          <div className="feature-col">
            <h3>Personalized Content Curation</h3>
            <p>
              From entertainment and education to lifestyle and beyond, Helena opens doors to a wide array of categories, sparking inspiration and catering to your curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="comp">
        <h1>Powered by Cutting-Edge Technology</h1>
        <p>
          Helena is driven by advanced AI algorithms and state-of-the-art APIs, ensuring a seamless and intelligent content discovery experience.
          <br />
          By leveraging machine learning models, it analyzes your preferences to provide highly personalized recommendations.
          <br />
          With natural language processing (NLP), Helena understands the context of trends and content, enabling precise curation of articles, videos, and updates.
          <br />
          Additionally, its integration with top content platforms and trend analysis APIs ensures real-time updates from trusted sources across the web.
          <br />
          This powerful combination of technologies makes Helena your ultimate companion for discovering relevant, engaging, and inspiring content effortlessly.
        </p>
        <div className="row">
          <div className="comp-col">
            <img src="./1_comp.avif" alt="" />
            <div className="layer">
              <h3>API</h3>
            </div>
          </div>
          <div className="comp-col">
            <img src="./2_comp.jpg" alt="" />
            <div className="layer">
              <h3>REACT</h3>
            </div>
          </div>
          <div className="comp-col">
            <img src="./3_comp.png" alt="" />
            <div className="layer">
              <h3>GEMINI AI</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer">
        <h4>About Us</h4>
        <p>
          Helena is more than just a project for us—it's a step toward learning, growing, and contributing to the ever-evolving world of technology. Your support and feedback mean everything as we continue to improve and build something impactful.
        </p>
        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
        </div>
        <p>
          Made with <i className="fa fa-heart-o"></i> by Team Runtime T_Error
        </p>
      </section>
    </>
  );
};

export default Landing;