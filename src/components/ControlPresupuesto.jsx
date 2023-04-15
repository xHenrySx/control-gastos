function ControlPresupuesto({ presupuesto }) {

  function formatCurrency(value) {
    return value.toLocaleString("es-ES", {
      style: "currency",
      currency: "PYG",
    });
  }


  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span>{" "}
          {formatCurrency(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span>{" "}
          {formatCurrency(0)}
        </p>
        <p>
          <span>Gastado:</span>{" "}
          {formatCurrency(0)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
