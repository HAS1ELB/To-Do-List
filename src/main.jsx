import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Vous pouvez personnaliser le style ici

// Crée un point d'entrée pour rendre l'application dans l'élément HTML avec l'ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
