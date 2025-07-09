import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import stateManager from './stateManager.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider store={stateManager}>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </StrictMode>
);
