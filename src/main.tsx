import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { ContentProvider } from "./data/contentStore";
import "./styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    {console.log("import.meta.env", import.meta.env)}
    <HashRouter>
      <ContentProvider>
        <App />
      </ContentProvider>
    </HashRouter>
  </React.StrictMode>
);
