// src/App.js
import React from 'react';
import './App.css';
import VideoUpload from './VideoUpload';
import VideoList from './VideoList';

const App = () => {
  return (
    <div className="App">
      <h1>Video Upload and Display</h1>
      <div className="upload-section">
        <VideoUpload />
      </div>
      <h2>Uploaded Videos</h2>
      <VideoList />
    </div>
  );
};

export default App;
