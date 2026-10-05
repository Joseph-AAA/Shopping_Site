import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/Context/ThemeContext.jsx";
import {CartProvider} from "./components/Context/CartContext.jsx";
import { AuthProvider } from "./components/Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
          <ThemeProvider>
            <CartProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
            </CartProvider>
    </ThemeProvider>

      </AuthProvider>

  </React.StrictMode>,
);
