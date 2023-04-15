import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [showModalNuevoGasto, setShowModalNuevoGasto] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  function handleNuevoGasto() {
    setShowModalNuevoGasto(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 300)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      {showModalNuevoGasto && <Modal setShowModalNuevoGasto={setShowModalNuevoGasto} animarModal={animarModal} setAnimarModal={setAnimarModal} />}
    </div>
  );
}

export default App;
