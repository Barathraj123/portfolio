import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Import global styles (e.g., reset, fonts)
import './Styles/main.css';  // Import the main.css from the styles folder
import App from './App.jsx';  // Import the main App component

// Create the root element and render the app within StrictMode for development checks
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* Rendering the main App component */}
  </StrictMode>,
);
