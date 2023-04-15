import React from "react";
import Gasto from "./Gasto";

function ListadoGastos({
  gastos,
  setGastoEditado,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length > 0
              ? `Gastos filtrados por ${filtro}`
              : `No hay gastos para la categoria ${filtro}`}
          </h2>
          {gastosFiltrados.map((gasto) => {
            return (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditado={setGastoEditado}
                eliminarGasto={eliminarGasto}
              />
            );
          })}
        </>
      ) : (
        <>
          {gastos.length > 0 ? "" : <h2>No hay gastos registrados</h2>}
          {gastos.map((gasto) => {
            return (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditado={setGastoEditado}
                eliminarGasto={eliminarGasto}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default ListadoGastos;
