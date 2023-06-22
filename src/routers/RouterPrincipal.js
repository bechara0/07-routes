import React from "react";
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Articulos } from "../components/Articulos";
import { Contacto } from "../components/Contacto";
import { Error } from "../components/Error";
import { Persona } from "../components/Persona";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Esto va a quedar fijo en todas las plantillas</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Artículos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "activado" : "")}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className="contenido-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path={"/persona/:nombre/:apellido"} element={<Persona />} />
          <Route path={"/persona/:nombre"} element={<Persona />} />
          <Route path={"/persona"} element={<Persona />} />
          <Route
            path={"/redirigir"}
            element={<Navigate to="../persona/juan/Bechara" />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      <hr />
      <footer>Este Footer tambien queda para todas las plantillas</footer>
    </BrowserRouter>
  );
};
