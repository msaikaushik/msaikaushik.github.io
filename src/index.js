import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import App from './App';

import './styles/index.css';

import '@fontsource/jetbrains-mono/400.css'; // Regular
import '@fontsource/jetbrains-mono/500.css'; // Medium
import '@fontsource/jetbrains-mono/600.css'; // Semi-Bold
import '@fontsource/jetbrains-mono/700.css'; // Bold

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
