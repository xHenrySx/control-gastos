import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
function App() {
  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem("gastos")) ?? []
  );

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [showModalNuevoGasto, setShowModalNuevoGasto] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditado, setGastoEditado] = useState({});

  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditado).length === 0) return;

    setShowModalNuevoGasto(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  }, [gastoEditado]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos])

  useEffect(() => {
    if (presupuesto > 0) 
      setIsValidPresupuesto(true);
    else 
      setIsValidPresupuesto(false);
  }, []);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter((gasto) => gasto.categoria === filtro);
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro])

  function handleNuevoGasto() {
    setShowModalNuevoGasto(true);
    setGastoEditado({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  }

  function guardarGasto(gasto) {
    if (gasto.id) {
      actualizarGasto(gasto);
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
      setGastoEditado({});
    }
    setAnimarModal(false);
    setTimeout(() => {
      setShowModalNuevoGasto(false);
    }, 500);
  }

  function eliminarGasto(id) {
    const gastosFiltrados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosFiltrados);
  }

  function actualizarGasto(gasto) {
    const gastosActualizados = gastos.map((gastoActual) => {
      if (gastoActual.id === gasto.id) {
        return gasto;
      }
      return gastoActual;
    });
    setGastos(gastosActualizados);
    setAnimarModal(false);
    setTimeout(() => {
      setShowModalNuevoGasto(false);
    }, 500);
  }

  return (
    <div className={showModalNuevoGasto ? "fijar" : ""}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastoEditado={setGastoEditado}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {showModalNuevoGasto && (
        <Modal
          setShowModalNuevoGasto={setShowModalNuevoGasto}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditado={gastoEditado}
          setGastoEditado={setGastoEditado}
        />
      )}
    </div>
  );
}

export default App;
