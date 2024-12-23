import React from 'react';
import styles from './AboutUs.module.css'; // Import CSS module

const AboutUs = () => {
  return ( 
    <div className="OuterContainer">
    <div className={styles['about-container']}>
      <header className={styles['about-header']}>
        <h1>About Helena</h1>
        <p className={styles['p-header']} >Your AI-powered Content Creation Guide</p>
      </header>
      <section className={styles['about-section']}>
        <h2>Our Journey</h2>
        <p>
          Helena was born out of a vision to empower content creators by leveraging the latest advancements in generative AI and analytics. 
          Built with a robust backend powered by Python and integrated APIs, Helena ensures real-time insights into trends across platforms 
          like Instagram, Twitter, and more. Vite and React were chosen for the frontend to deliver a seamless user experience, and Gemini AI 
          serves as the brain behind Helena’s intelligent suggestions.
        </p>
      </section>
      <section className={styles['about-section']}>
        <h2>How Helena Helps</h2>
        <p>
          Helena simplifies the content creation process by providing actionable insights. From identifying trending topics to recommending 
          hashtags and formats, Helena saves you time while maximizing your reach. Whether you're a seasoned influencer or a budding creator, 
          Helena guides you toward creating content that resonates with your audience and suggests ideas.
        </p>
      </section>
      <section className={`${styles['about-section']} ${styles.features}`}>
        <h2>Current Features</h2>
        <ul>
          <li>Real-time trend analysis from Youtube.</li>
          <li>Customizable recommendations tailored to your content niche.</li>
          <li>Trending hashtag suggestions to amplify your posts.</li>
          <li>Insights on engaging content formats and styles.</li>
          <li>API integration for up-to-date data fetching and intelligent predictions.</li>
        </ul>
      </section>
      <footer className={styles['about-footer']}>
        <p className={styles['p-header']} >
          Ready to elevate your content game? Helena is here to guide you every step of the way. 
          Start exploring today and unlock your potential!
        </p>
      </footer>
    </div>
    </div>
  );
};

export default AboutUs;