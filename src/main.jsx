import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";

// Mount the React app to the #root div in index.html
// All logic and data now lives inside App.jsx
createRoot(document.getElementById("root")).render(<App />);
