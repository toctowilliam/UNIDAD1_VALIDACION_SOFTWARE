# Lista de chequeo – Revisión estática

La usamos en la inspección por pares sobre los requisitos originales (R-01 a R-04) y la versión inicial de `src/descuentos.js`.

## Revisión de requisitos

| Ítem | Criterio | Cumple (Sí/No) | Observación |
|------|----------|----------------|-------------|
| 1 | ¿Cada requisito tiene un identificador único? | Sí | R-01 a R-04. |
| 2 | ¿Cada requisito se puede comprobar con un caso concreto (entrada y salida esperada)? | No | Ninguno da valores. R-01 y R-04 dependen de la opinión de quien revise. |
| 3 | ¿Están definidos los términos «cliente importante», «promoción» y «rápidamente»? | No | Ninguno de los tres está definido. |
| 4 | ¿Se dice qué pasa con entradas inválidas (precio negativo, porcentaje > 100)? | No | No se menciona en ningún requisito. |
| 5 | ¿Los requisitos coinciden entre sí y con el código? | No | R-03 dice que el descuento no supera el precio, pero el código permite totales negativos. |

## Revisión de código JS

| Ítem | Criterio | Cumple (Sí/No) | Observación |
|------|----------|----------------|-------------|
| 6 | ¿Se usan `const`/`let` en lugar de `var`? | No | Líneas 2 y 5 usan `var`. |
| 7 | ¿Las comparaciones usan `===` / `!==`? | No | Línea 3: `esVip == true`. |
| 8 | ¿Todos los `if` usan llaves `{}`? | No | Líneas 3 y 4. |
| 9 | ¿No hay variables declaradas sin usar? | Sí | Todas las variables se usan. |
| 10 | ¿Los errores se avisan al que llama a la función y no solo con `console.log`? | No | Línea 4 imprime "Descuento inválido" pero la función sigue y devuelve un total. |

Resultado: 2 de 10 ítems cumplen.

## Hallazgos de la inspección

Roles: autor (presentó el código y corrigió el estilo), revisor (buscó fallas de lógica comparando código y requisitos) y registrador (anotó los hallazgos aquí y en el Pull Request).

| ID | Origen | Severidad | Evidencia | Acción tomada | Estado |
|----|--------|-----------|-----------|---------------|--------|
| H-01 | ESLint (no-var) | Media | descuentos.js (lín. 2 y 5): Uso de var. | Cambiado a let y const. | Corregido |
| H-02 | ESLint (eqeqeq) | Media | descuentos.js (lín. 3): Uso de ==. | Cambiado a ===. | Corregido |
| H-03 | ESLint (curly) | Baja | descuentos.js (lín. 3 y 4): if sin llaves {}. | Se pusieron llaves {}. | Corregido |
| H-04 | Revisión humana | Alta | descuentos.js (lín. 4): Si porcentaje > 100 solo hace console.log y sigue. | Anotado en PR y RF-01 para cortar ejecución. | Registrado |
| H-05 | Revisión humana | Alta | descuentos.js (lín. 3): Suma +10 fijo sin ver si el precio es menor a $10. | Documentado como supuesto en requisitos.md. | Registrado |
| H-06 | Revisión humana | Alta | descuentos.js (lín. 1): Acepta precios o porcentajes negativos. | Incluido en RF-01 y checklist.md. | Registrado |
| H-07 | Revisión humana | Media | Requisitos R-01 a R-04 ambiguos. | Mejorados a RF-01..RF-04 con matriz. | Documentado |
| H-08 | Revisión humana | Baja | descuentos.js (lín. 4): Uso de console.log en vez de manejo de error. | Anotado en RF-04 y comentado en el PR. | Registrado |
