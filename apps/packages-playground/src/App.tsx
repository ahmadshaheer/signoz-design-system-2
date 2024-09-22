import "./App.css";
import { ThemeSwitcher, useTheme } from "@shaheerkochai/core";
import { Button } from "@shaheerkochai/button";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <h1>My Themed App</h1>
      <ThemeSwitcher />

      <Button theme={theme} variant="secondary">
        hey
      </Button>
    </>
  );
}

export default App;
