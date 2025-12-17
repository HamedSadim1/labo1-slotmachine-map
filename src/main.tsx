/**
 * Main Entry Point
 *
 * This file is the entry point for the React application.
 * It renders the App component into the DOM using ReactDOM.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
