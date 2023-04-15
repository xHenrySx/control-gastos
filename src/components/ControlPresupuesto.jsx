import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ControlPresupuesto({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    setGastado(totalGastado);
    setDisponible(presupuesto - totalGastado);

    setTimeout(() => {
      setPorcentaje(
        (
          ((presupuesto - (presupuesto - totalGastado)) / presupuesto) *
          100
        ).toFixed(0)
      );
    }, 1200);
  }, [gastos]);

  function formatCurrency(value) {
    return value.toLocaleString("es-ES", {
      style: "currency",
      currency: "PYG",
    });
  }
  
  function handleReset() {
    const confirmReset = window.confirm("¿Estás seguro de resetear la app?");
    if (!confirmReset) return;
    setPresupuesto(0);
    setGastos([]);
    setIsValidPresupuesto(false);
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#DC2626" : "#3BB2F6",
            trailColor: "#E6E6E6",
            textColor: porcentaje > 100 ? "#DC2626" : "#3BB2F6",
          })}
          value={porcentaje}
          text={`${porcentaje}% gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" onClick={handleReset}>Resetear App</button>
        <p>
          <span>Presupuesto:</span> {formatCurrency(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible:</span> {formatCurrency(disponible)}
        </p>
        <p>
          <span>Gastado:</span> {formatCurrency(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
