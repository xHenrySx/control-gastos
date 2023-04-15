import cerrarBoton from "../img/cerrar.svg";

function Modal({ setShowModalNuevoGasto, animarModal, setAnimarModal }) {
  function ocultarModal() {
    setAnimarModal(false);
    setTimeout(() => {
      setShowModalNuevoGasto(false);
    }, 500);
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBoton} alt="Cerrar modal" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ej. Transporte"
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input type="number" id="cantidad" placeholder="Ej. 300" required />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria">
            <option value="">-- Seleccione --</option>
            <option value="alimentacion">Alimentacion</option>
            <option value="transporte">Transporte</option>
            <option value="salud">Salud</option>
            <option value="hogar">Hogar</option>
            <option value="ropa">Ropa</option>
            <option value="diversion">Diversion</option>
            <option value="otros">Otros</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Modal;
