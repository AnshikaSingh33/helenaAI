// ContentGuide.jsx
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { askContentGuide } from '../utils/askContentGuide';
import { youtube_trending } from '../utils/youtube_trending';
import styles from "./ContentGuide.module.css";

const ContentGuide = () => {
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [charQueue, setCharQueue] = useState([]);

  useEffect(() => {
    if (charQueue.length > 0) {
      const timer = setInterval(() => {
        setCurrentText((prev) => prev + charQueue[0]);
        setCharQueue((prevQueue) => prevQueue.slice(1));
      }, 20); // Faster character display speed

      return () => clearInterval(timer);
    }
  }, [charQueue]);

  const handleInputChange = (e) => {
    setFeedbackMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCurrentText('Waiting for response...'); // Show waiting message

    try {
      let initialResult = '';

      // Check for YouTube-related queries
      if (
        feedbackMessage.toUpperCase().includes('YOUTUBE') ||
        feedbackMessage.toUpperCase().includes('YT') ||
        feedbackMessage.toUpperCase().includes('UTUBE')
      ) {
        const ytFeedback = await youtube_trending(feedbackMessage);

        // Format the YouTube feedback as a string
        initialResult = ytFeedback
          .map(
            (video, index) =>
              `### Video ${index + 1}\n**Title:** ${video.title}\n**Description:** ${video.description}\n[Watch Video](${video.videoUrl})\n`
          )
          .join('\n');
      } else {
        // Process non-YouTube-related feedback
        const resFeedback = await askContentGuide(feedbackMessage);
        initialResult = typeof resFeedback === 'string' ? resFeedback : JSON.stringify(resFeedback, null, 2);
      }

      // Pass the initial result to `askContentGuide` for further processing
      const finalFeedback = await askContentGuide(feedbackMessage + " relate to these trending things\n" + initialResult);
      const formattedFinalFeedback =
        typeof finalFeedback === 'string' ? finalFeedback : JSON.stringify(finalFeedback, null, 2);

      // Split the feedback into characters and update the queue
      setCharQueue(formattedFinalFeedback.split(''));
      setCurrentText(''); // Reset the current text display
    } catch (error) {
      console.error('Error processing your request:', error);
      setCurrentText('An error occurred while processing your query. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img src="./LOGO.png" alt="LOGO" />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.output}>
          {/* Render Markdown content character by character */}
          <ReactMarkdown>{currentText}</ReactMarkdown>
        </div>

        <div className={styles.bottom}>
          <input
            className={styles.input}
            type="text"
            value={feedbackMessage}
            onChange={handleInputChange}
            placeholder="Type your query here…"
          />
          <button className={styles.button} type="submit">Ask</button>
        </div>
      </form>
    </div>
  );
};

export default ContentGuide;