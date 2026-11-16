function calcularDescuento(precio, porcentaje, esVip) {
  let descuento = precio * porcentaje / 100;
  if (esVip === true) {
    // H-05: confirmar si son $10 fijos o 10 % y evitar total negativo
    descuento = descuento + 10;
  }
  if (porcentaje > 100) {
    // H-04: solo imprime aviso y sigue calculando; pendiente definir error
    console.log("Descuento inválido");
  }
  const total = precio - descuento;
  return total;
}
module.exports = { calcularDescuento };
