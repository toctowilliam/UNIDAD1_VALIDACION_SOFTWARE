# Auditoría estática de un módulo JavaScript

Deber de la Unidad 1 de Verificación y Validación de Software. Revisamos `src/descuentos.js` y sus requisitos sin ejecutar pruebas: primero los requisitos, luego ESLint y al final una inspección por pares.

## Fases

- **A – Requisitos y checklist:** análisis de R-01 a R-04, propuesta de RF-01 a RF-04, supuestos pendientes y matriz de trazabilidad (`docs/requisitos.md`), más la lista de chequeo (`docs/checklist.md`).
- **B – ESLint:** configuración de las reglas y primera corrida guardada en `evidencias/lint-inicial.txt`.
- **C – Inspección y corrección:** hallazgos H-01 a H-08 (en `docs/checklist.md`), corrección de las reglas de ESLint y corrida final en `evidencias/lint-final.txt`.
- **D – Repositorio y PR:** commits por fase y Pull Request con comentarios sobre la lógica.

En `descuentos.js` solo se corrigió el estilo (`let`/`const`, `===` y llaves). Los problemas de lógica (total negativo para VIP, porcentaje > 100 que solo imprime un mensaje) no se tocaron porque dependen de dudas que el cliente todavía no responde. Están anotados en los requisitos y en el PR.

## Estructura

```
docs/
  requisitos.md      análisis, RF-01 a RF-04 y matriz
  checklist.md       lista de chequeo y hallazgos
evidencias/
  lint-inicial.txt   ESLint sobre el código original
  lint-final.txt     ESLint después de corregir
src/
  descuentos.js
eslint.config.mjs
package.json
```

## Cómo correrlo

Se necesita Node.js 18 o superior.

```bash
npm install
npm run lint
```

Reglas activas como `error`: `no-var`, `eqeqeq`, `no-unused-vars` y `curly`.
