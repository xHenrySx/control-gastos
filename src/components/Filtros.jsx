import { useEffect, useState } from "react";
function Filtros({ filtro, setFiltro }) {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gasto</label>
          <select
            value={filtro}
            onChange={(e) => {
              setFiltro(e.target.value);
            }}
          >
            <option value="">Todos</option>
            <option value="comida">Comida</option>
            <option value="ahorro">Ahorro</option>
            <option value="salud">Salud</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filtros;
