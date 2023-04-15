import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import cerrarBoton from "../img/cerrar.svg";

function Modal({
  setShowModalNuevoGasto,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditado,
  setGastoEditado,
}) {
  const [mensaje, setMensaje] = useState("");

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState(""); // [Date.now()
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditado).length === 0) return;
    setNombre(gastoEditado.nombre);
    setCantidad(gastoEditado.cantidad);
    setCategoria(gastoEditado.categoria);
    setId(gastoEditado.id);
    setFecha(gastoEditado.fecha);
  }, []);

  function ocultarModal() {
    setAnimarModal(false);
    setGastoEditado({});
    setTimeout(() => {
      setShowModalNuevoGasto(false);
    }, 500);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("") && cantidad <= 0) {
      setMensaje("Todos los campos son obligatorios.");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    const gasto = {
      nombre,
      cantidad,
      categoria,
      id,
      fecha,
    };
    guardarGasto(gasto);
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBoton} alt="Cerrar modal" onClick={ocultarModal} />
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>{gastoEditado.nombre ? "Gasto editado" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ej. Transporte"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            id="cantidad"
            placeholder="Ej. 300"
            required
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="comida">Comida</option>
            <option value="ahorro">Ahorro</option>
            <option value="salud">Salud</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value={gastoEditado.nombre ? "Editar Gasto" : "Agregar Gasto"}
        />
      </form>
    </div>
  );
}

export default Modal;
