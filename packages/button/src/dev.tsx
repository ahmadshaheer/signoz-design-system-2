import React from "react";

import { Button } from "./button";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button variant="outline">Test Button</Button>
  </React.StrictMode>
);
