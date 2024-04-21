import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as THREE from "three";
import "./index.css";
import { extend } from "@react-three/fiber";
import { createRoot } from "react-dom/client";

// Register the THREE namespace as native JSX elements.
// https://docs.pmnd.rs/react-three-fiber/api/canvas#tree-shaking
extend(THREE);


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
