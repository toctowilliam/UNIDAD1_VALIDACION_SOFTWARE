# Guía de comandos Git

## 1. Iniciar el repositorio

```bash
git init
git branch -M main
git remote add origin https://github.com/<usuario>/UNIDAD1_VALIDACION_SOFTWARE.git
```

Antes del primer commit, pon en `src/descuentos.js` el código **original** (con `var`, `==` y los `if` sin llaves). El código corregido entra recién en la fase C.

## 2. Commits por fase

Los comandos están pensados para Git Bash. En PowerShell, el `>` guarda el archivo en UTF-16 y en GitHub se ve con caracteres raros; ahí usa `npm run lint | Out-File -Encoding utf8 evidencias/lint-inicial.txt`.

```bash
# Fase A - requisitos y checklist
git add .gitignore README.md src/descuentos.js docs/requisitos.md docs/checklist.md
git commit -m "Agrega análisis de requisitos, matriz y lista de chequeo"

# Fase B - ESLint y lint inicial
npm install
npm run lint > evidencias/lint-inicial.txt
git add package.json package-lock.json eslint.config.mjs evidencias/lint-inicial.txt
git commit -m "Configura ESLint y guarda resultado del lint inicial"

# Fase C - correcciones de estilo y lint final
# (pegar aquí el descuentos.js corregido)
npm run lint > evidencias/lint-final.txt
git add src/descuentos.js evidencias/lint-final.txt
git commit -m "Corrige var, == y llaves según ESLint"

# Fase D - documentación final
git add README.md docs/guia-git.md
git commit -m "Actualiza README con estructura y forma de ejecutar"

git push -u origin main
```

## 3. Rama para el Pull Request

```bash
git checkout -b revision/logica-descuentos
# agregar un comentario o cambio pequeño en src/descuentos.js
git add src/descuentos.js
git commit -m "Marca casos de porcentaje y total negativo para revisión"
git push -u origin revision/logica-descuentos
```

En GitHub: **Compare & pull request**, base `main` y rama `revision/logica-descuentos`.

## 4. Comentarios para el PR

**Comentario 1 (línea del `if (porcentaje > 100)`):**
> Aquí solo se hace `console.log` y la función sigue, así que `calcularDescuento(100, 150, false)` devuelve `-50`. El que llama a la función no se entera del error. Propongo cortar la ejecución con un error cuando el porcentaje está fuera de 0 a 100 (RF-01, H-04).

**Comentario 2 (línea `descuento = descuento + 10`):**
> El +10 se suma sin tope: con `calcularDescuento(5, 0, true)` el total sale `-5`, y eso va contra R-03. Tampoco sabemos si son $10 o 10 % (supuesto 1). Hasta que el cliente responda, sugiero que el total no baje de 0 (RF-02, RF-03, H-05).
