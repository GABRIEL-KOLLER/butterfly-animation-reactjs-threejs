import { Canvas } from '@react-three/fiber';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import logo from './logo.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <img src={logo} alt="alt here" />
    </header>
    <Canvas>
    <App />
    </Canvas>
  </React.StrictMode>
);
