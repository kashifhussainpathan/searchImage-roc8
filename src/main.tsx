import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./App";
import { ImagesProvider } from "./context/ImagesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ImagesProvider>
      <RouterProvider router={router} />
    </ImagesProvider>
  </React.StrictMode>
);
