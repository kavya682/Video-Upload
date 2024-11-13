// src/VideoList.js
import React, { useEffect, useState } from 'react';
import fetchVideos from './fetchVideos';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadVideos = async () => {
      const result = await fetchVideos();
      if (result.length === 0) {
        setError('No videos found or an error occurred.');
      } else {
        setVideos(result);
      }
    };
    loadVideos();
  }, []);

  return (
    <div>
      <h2>Uploaded Videos</h2>
      {error && <p>{error}</p>}
      <ul className="video-list">
        {videos.map((video, index) => (
          <li key={index} className="video-item">
            <p>{video.originalFileName}</p>
            <small>Uploaded on: {video.uploadDate}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
