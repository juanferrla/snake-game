# Convenciones del Proyecto Snake Game

Este documento describe las convenciones de estilo, patrones de diseño y reglas generales utilizadas en el desarrollo del juego Snake.

## Estilo del Código

### General
- **Lenguaje**: JavaScript moderno (ES6+).
- **Formato**: Uso de `const` y `let` para declarar variables, evitando `var`.
- **Nombres**: Uso de `camelCase` para variables y funciones, y `PascalCase` para constructores (no aplicable en este proyecto).
- **Comentarios**: Uso de comentarios en español para explicar la lógica compleja, pero el código debe ser lo más autoexplicativo posible.

### Estructura del Código
- **Bloques**: Uso de llaves `{}` para definir bloques de código, incluso si son de una sola línea.
- **Indentación**: 4 espacios por nivel de indentación.
- **Líneas en blanco**: Uso de líneas en blanco para separar secciones lógicas del código (declaraciones globales, funciones, etc.).

### Funciones
- **Declaración**: Uso de `function nombreFuncion() { ... }`.
- **Parámetros**: Uso de nombres descriptivos para los parámetros.
- **Retorno**: Uso de `return` explícito cuando sea necesario.

### Variables
- **Globales**: Declaradas al inicio del archivo con `let` o `const`.
- **Locales**: Declaradas dentro de las funciones con `const` o `let`.

## Patrones del Proyecto

### Game Loop
- **Patrón**: Uso de `setInterval` para el bucle del juego.
- **Control**: La velocidad del juego se controla mediante la variable `gameSpeed`.
- **Parada**: El bucle se detiene con `clearInterval` cuando el juego termina.

### Estado del Juego
- **Variables**: Estado global del juego (serpiente, comida, dirección, puntuación, nivel, etc.).
- **Inicialización**: Función `initGame()` para reiniciar el estado del juego.
- **Actualización**: Función `gameStep()` para actualizar el estado en cada frame.

### Renderizado
- **Canvas**: Uso de HTML5 Canvas para renderizar el juego.
- **Grid**: El juego se basa en un grid de 20x20 píxeles.
- **Dibujo**: Función `drawGame()` para renderizar el estado actual.

### Manejo de Eventos
- **Teclado**: Uso de `keydown` para capturar las teclas de flecha y la barra espaciadora.
- **Prevención**: Uso de `e.preventDefault()` para evitar el scroll de la página con las flechas y la barra espaciadora.

### Niveles
- **Configuración**: Objeto `levels` con la configuración de cada nivel (velocidad y puntuación objetivo).
- **Progresión**: Función `checkLevelUp()` para verificar si se debe subir de nivel.

## Reglas Generales

### Colisiones
- **Paredes**: La serpiente muere si choca contra las paredes.
- **Cuerpo**: La serpiente muere si choca contra su propio cuerpo.
- **Comida**: La serpiente crece si come la comida.

### Movimiento
- **Dirección**: La serpiente no puede girar 180 grados instantáneamente.
- **Siguiente Dirección**: Uso de `nextDirection` para evitar giros múltiples en un solo frame.

### Comida
- **Posición**: La comida se genera en una posición aleatoria dentro del grid.
- **Validación**: La comida nunca aparece sobre la serpiente.

### Interfaz de Usuario
- **Actualización**: Función `updateUI()` para actualizar la puntuación, nivel y velocidad.
- **Elementos**: Uso de IDs en el HTML para actualizar los elementos del DOM.

### Game Over
- **Pantalla**: Dibujo de un fondo semitransparente y mensajes sobre el canvas.
- **Reinicio**: Presionar la barra espaciadora reinicia el juego.

## Convenciones de Archivos

### index.html
- **Estructura**: HTML5 estándar.
- **Estilos**: CSS en el `<style>` del `<head>`.
- **Script**: Referencia al archivo `snake.js` al final del `<body>`.

### snake.js
- **Estructura**: 
  - Declaración de variables globales.
  - Configuración de niveles.
  - Funciones de inicialización.
  - Funciones de lógica del juego.
  - Funciones de renderizado.
  - Funciones de control.
  - Event listeners.
  - Inicialización al cargar.

### README.md
- **Estructura**: Markdown estándar con secciones claras.
- **Contenido**: Documentación completa del juego, incluyendo características, cómo jugar, lógica, arquitectura IA, etc.

### CONVENTIONS.md
- **Estructura**: Markdown estándar con secciones claras.
- **Contenido**: Estilo del código, patrones, reglas generales.

### PROMPT.md
- **Estructura**: Markdown estándar con secciones claras.
- **Contenido**: Instrucciones específicas para generar el proyecto.

### .gitignore
- **Contenido**: Ignorar archivos relacionados con `.aider`.
