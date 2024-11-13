// src/fetchVideos.js
import axios from 'axios';

const fetchVideos = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/videos`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};

export default fetchVideos;
