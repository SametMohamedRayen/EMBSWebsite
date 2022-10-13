import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

import "./fonts/Indigo/Indigo Regular.otf";
import "./fonts/Albori/Albori-Regular.otf";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
