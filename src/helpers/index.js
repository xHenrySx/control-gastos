function generarId() {
  const random=  Math.random().toString(36).substring(2);
  const fecha = new Date().getTime().toString(36);
  return random + fecha;
}

function formatearFecha(fecha) {
  const fechaNueva = new Date(fecha);
  const opciones = { year: "numeric", month: "long", day: "2-digit" };
  return fechaNueva.toLocaleString("es-ES", opciones);
}

export {generarId, formatearFecha};