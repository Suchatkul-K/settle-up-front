import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./features/auth/context/AuthContext.jsx";
import CircleContextProvider from "./features/circle/context/CircleContext.jsx";
import MainContextProvider from "./features/main/context/MainContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <AuthContextProvider>
    // <CircleContextProvider>
      // <MainContextProvider> 
        <App />
      // </MainContextProvider> 
    // </CircleContextProvider>
  // </AuthContextProvider>
  // </React.StrictMode>
);
