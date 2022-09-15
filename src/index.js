import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
