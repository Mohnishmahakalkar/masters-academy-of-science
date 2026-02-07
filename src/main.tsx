import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContentProvider } from "./data/contentStore";
import "./styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ContentProvider>
        <App />
      </ContentProvider>
    </BrowserRouter>
  </React.StrictMode>
);
