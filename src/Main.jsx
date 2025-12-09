import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from 'react-cookie'; 
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <CookiesProvider>
      <App />
      </CookiesProvider>
    </Router>
  </React.StrictMode>
);
