// server.js
import express from 'express';
import fs from 'fs/promises'; // For async file handling
import path from 'path';
import cors from 'cors';
import { youtube_trending } from './utils/youtube_trending.js'; // Import youtube_trending function
import { askContentGuide } from './utils/askContentGuide.js'; // Import askContentGuide function

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());  // Enable CORS (if needed)

// Define the file path for saved YouTube data
const filePath = path.join(__dirname, 'data.txt');

// Route to fetch YouTube trending content, save it, and pass it to Gemini
app.post('/save-youtube-trending', async (req, res) => {
  const { queryMessage } = req.body; // Query message sent by the user

  try {
    // Fetch YouTube trending content based on the user's query
    const ytFeedback = await youtube_trending(queryMessage);

    // Format content to save in the text file
    const fileContent = ytFeedback
      .map((video, index) => 
        `Video ${index + 1}:\nTitle: ${video.title}\nDescription: ${video.description}\nURL: ${video.videoUrl}\n`
      )
      .join('\n');

    // Save the content to the text file
    await fs.writeFile(filePath, fileContent, 'utf8');
    console.log('YouTube trending content saved to file.');

    // Send the content to Gemini or similar AI for processing
    const processedContent = await askContentGuide(fileContent);

    // Respond with the output from Gemini (or other AI)
    res.json({ message: 'Content processed successfully', output: processedContent });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Error processing your request' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});