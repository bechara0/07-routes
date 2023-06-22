import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Persona = () => {
  const { nombre, apellido } = useParams();
  const navegar = useNavigate();
  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = `/persona/${nombre}/${apellido}`;
    if (nombre.length <= 0 && apellido.length <= 0) {
      navegar("/inicio");
    } else {
      navegar(url);
    }
  };
  return (
    <div>
      <h1>
        Esta el la web de: {nombre} {apellido}
      </h1>

      <form onSubmit={enviar}>
        <input type="text" name="nombre" />
        <input type="text" name="apellido" />
        <input type="submit" name="enviar" value="enviar" />
      </form>
    </div>
  );
};
