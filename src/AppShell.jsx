import React, { useState } from "react";

import { Provider } from "./itemsContext";
import { recipes, materials, sources } from "./data/tools";
import App from "./App";
import ErrorHandler from "./ErrorHandler";

export default function AppShell() {
  const [state] = useState({
    recipes,
    materials,
    sources
  });
  return (
    <ErrorHandler>
      <Provider value={state}>
        <App />
      </Provider>
    </ErrorHandler>
  );
}
