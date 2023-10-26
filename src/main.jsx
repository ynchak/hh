import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";

const matchPrefersLight = window.matchMedia("(prefers-color-scheme:dark)");
if (matchPrefersLight.matches) {
  document.querySelector("body").classList.add("dark");
}
matchPrefersLight.onchange = () => {
  const theme = matchPrefersLight.matches ? "dark" : "";
  document.querySelector("body").removeAttribute("class");
  document.querySelector("body").classList.add(theme);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
