import React from "react";

function testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-andres.jpg")}
        alt="Foto de Andres"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Andres en Grecia</p>
        <p className="cargo-testimonio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="contenido-testimonio">Texto</p>
      </div>
    </div>
  );
}
