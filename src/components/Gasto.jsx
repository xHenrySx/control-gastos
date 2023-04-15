import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers";

import iconoAhorro from "../img/icono_ahorro.svg";
import iconoCasa from "../img/icono_casa.svg";
import iconoComida from "../img/icono_comida.svg";
import iconoOcio from "../img/icono_ocio.svg";
import iconoGastos from "../img/icono_gastos.svg";
import iconoSalud from "../img/icono_salud.svg";
import iconoSucripciones from "../img/icono_suscripciones.svg";

const diccionarioIconos = {
  ahorro: iconoAhorro,
  casa: iconoCasa,
  comida: iconoComida,
  ocio: iconoOcio,
  gastos: iconoGastos,
  salud: iconoSalud,
  suscripciones: iconoSucripciones,
};

function Gasto({ gasto, setGastoEditado, eliminarGasto }) {
  const { nombre, cantidad, categoria, fecha, id } = gasto;

  function leadingActions() {
    return (
      <LeadingActions>
        <SwipeAction onClick={() => setGastoEditado(gasto)}>Editar</SwipeAction>
      </LeadingActions>
    );
  }

  function trailingActions() {
    return (
      <TrailingActions>
        <SwipeAction 
        onClick={() => eliminarGasto(gasto.id)}
        destructive
        >
          Eliminar
        </SwipeAction>
      </TrailingActions>
    );
  }

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="iconoGastos"></img>
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {""} <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <div className="cantidad-gasto">
            <p className="cantidad">{cantidad + " "}PYG</p>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default Gasto;
