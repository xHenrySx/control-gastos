import { useState } from "react";

import Mensaje from "./Mensaje";

function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) {
  const [mensaje, setMensaje] = useState("");

  function handlePresupuesto(e) {
    e.preventDefault();
    if (presupuesto <= 0 || isNaN(presupuesto)) {
      setIsValidPresupuesto(false);
      setMensaje("El presupuesto es incorrecto");
      return;
    }
    setIsValidPresupuesto(true);
    setPresupuesto(parseInt(presupuesto));
    setMensaje("");
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            value={presupuesto}
            onChange={(e) => {
              setPresupuesto(e.target.value);
            }}
            placeholder="Añade tu presupuesto"
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
