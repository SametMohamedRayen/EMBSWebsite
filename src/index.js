import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

import "./assets/fonts/Indigo/Indigo Regular.otf";
import "./assets/fonts/Albori/Albori-Regular.otf";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
