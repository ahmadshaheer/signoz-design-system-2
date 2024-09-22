import "./App.css";
import { ThemeSwitcher, useTheme } from "@shaheerkochai/core";
import { Button } from "@shaheerkochai/button";
import { Typography } from "@shaheerkochai/design-tokens";
import { Spacing } from "@shaheerkochai/design-tokens";

function App() {
  const { theme, currentThemeColors } = useTheme();

  return (
    <>
      <h1>Theme Switcher and Button</h1>
      <ThemeSwitcher />

      <Button theme={theme} variant="secondary">
        hey
      </Button>

      <h1>Design tokens</h1>
      <p
        style={{
          background: currentThemeColors.TEXT_COLOR,
          letterSpacing: Spacing.MARGIN_10,
          fontSize: Typography.FONTSIZE_3XL,
        }}
      >
        hey
      </p>
    </>
  );
}

export default App;
