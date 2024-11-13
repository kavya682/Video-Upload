// src/VideoUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setStatus('Please select a file to upload.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/videos/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setStatus(`Upload successful: ${response.data}`);
    } catch (error) {
      setStatus(`Upload failed: ${error.response?.data || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="video/*" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default VideoUpload;
