import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StateProvider } from "./components/Context/StateProvider.jsx";
import reducer, { initialState } from "./components/Context/Reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);
