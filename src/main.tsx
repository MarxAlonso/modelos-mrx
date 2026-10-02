import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource-variable/onest";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);