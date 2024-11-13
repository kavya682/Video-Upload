// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import './App.css';
import App from './App';

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
