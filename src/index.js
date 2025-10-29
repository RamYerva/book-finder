import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'client'
import "./index.css";
import App from "./App"; // No .js needed here

// This is the modern way to start React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
