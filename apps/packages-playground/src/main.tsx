import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, useTheme } from "@shaheerkochai/core";

function ThemedApp() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <App />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  </StrictMode>
);
