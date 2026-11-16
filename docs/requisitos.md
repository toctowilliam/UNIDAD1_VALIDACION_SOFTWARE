# Revisión de requisitos – Módulo de descuentos

Revisión de R-01 a R-04 usando los criterios de ISO/IEC/IEEE 29148 (2018) y Wiegers y Beatty (2013), comparando cada requisito con lo que hace `src/descuentos.js`.

## 1. Problemas de los requisitos originales

| ID | Texto original | Problema | Explicación |
|----|----------------|----------|-------------|
| R-01 | «El descuento debe calcularse rápidamente» | No verificable | «Rápidamente» no dice cuántos milisegundos debe tardar, así que no hay forma de comprobarlo. |
| R-02 | «Los clientes importantes obtendrán un descuento especial» | Ambiguo | No explica quién es un cliente importante ni de cuánto es el descuento (si son $10 fijos o un porcentaje). El código suma 10 directo. |
| R-03 | «El descuento no puede superar el precio, excepto en promociones» | Contradictorio | Abre la excepción de «promociones» sin aclarar cómo funcionan ni cómo evitar totales negativos. |
| R-04 | «Se debe mostrar el resultado correcto» | Incompleto | No dice qué hacer si ingresan precios negativos o porcentajes mayores a 100. |

## 2. Requisitos mejorados

**RF-01 – Datos de entrada**
La función debe recibir un precio mayor a 0, un porcentaje entre 0 y 100 y el booleano `esVip`.
- Criterio: `calcularDescuento(100, 101, false)` y `calcularDescuento(-5, 10, false)` no deben devolver un total.

**RNF-01 – Tiempo de respuesta**
La función debe responder en <= 5 ms.

**RF-02 – Beneficio VIP**
Si `esVip === true`, se aplica el beneficio adicional cuidando que el total nunca sea menor a 0.
- Criterio: `calcularDescuento(5, 0, true)` devuelve `0`, no `-5`.

**RF-03 – Tope del descuento**
El descuento total no puede ser mayor al precio del producto (descuento <= precio). El cobro mínimo posible es $0.
- Criterio: ninguna combinación de entradas válidas devuelve un total negativo.

**RF-04 – Resultado**
La función debe devolver el número `precio - descuento` sin usar `console.log` intermedios.
- Criterio: `calcularDescuento(100, 20, false)` devuelve `80` y no imprime nada en consola.

## 3. Supuestos pendientes con el negocio

Quedó anotado consultar con el cliente:

1. Si el descuento VIP es de $10 fijos o 10 % adicional, y desde qué monto de compra aplica.
2. Si en las promociones el producto puede quedar máximo en $0 (gratis).
3. Qué error devolver si meten datos fuera de rango.

## 4. Matriz de trazabilidad

| ID | Problema | Impacto | Propuesta | Artefacto | Estado |
|----|----------|---------|-----------|-----------|--------|
| R-01 | Palabra vaga («rápidamente»). | No hay cómo medir si cumple. | RF-01 / RNF-01: Rango [0,100] y <= 5 ms. | docs/requisitos.md | Documentado |
| R-02 | No aclara cuánto es el descuento VIP. | El código suma +10 fijo y da negativos. | RF-02: Usar esVip y tope >= 0. | docs/requisitos.md, descuentos.js | Supuesto pendiente |
| R-03 | Excepción confusa de promociones. | Con porcentaje > 100 igual calcula. | RF-03: Tope descuento <= precio. | docs/requisitos.md, descuentos.js | Registrado |
| R-04 | No indica qué hacer ante errores. | Usa console.log y acepta negativos. | RF-04: Retornar valor >= 0 o error. | docs/requisitos.md, checklist.md | Documentado |
