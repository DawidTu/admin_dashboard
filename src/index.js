import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import { ImageProvider } from "./contexts/ImageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <ImageProvider>
        <RouterProvider router={router}/>
      </ImageProvider>
    </ContextProvider>
  </React.StrictMode>
);
