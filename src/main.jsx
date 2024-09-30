// React imports
import React from "react";
import ReactDOM from "react-dom/client";

// Import local archives
import { PropSaludoApp } from "./PropSaludoApp.jsx";
import { SaludoTraducido } from "./TraducidoSaludoApp.jsx";
import { Contenedor } from "./ContenedorApp.jsx";
import { Contador } from "./Counter.jsx";

// CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contenedor>
      <PropSaludoApp nombre="Hola, mi nombre es Brayan" />
      <SaludoTraducido nombre="pepito" idioma="en" />
      <Contador />
    </Contenedor>
  </React.StrictMode>,
);
