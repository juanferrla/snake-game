# Instrucciones para Generar el Proyecto Snake Game

Este documento contiene las instrucciones específicas para generar el juego Snake utilizando un modelo de lenguaje local (Qwen3-Coder-Next-UD-Q4_K_XL.gguf) con llama.cpp y aider en modo agentes.

## Objetivo del Proyecto

Desarrollar un juego clásico de Snake en JavaScript puro, HTML y CSS, con sistema de niveles, puntuación progresiva y dificultad creciente.

## Requisitos Funcionales

### 1. Estructura Básica
- **HTML**: Archivo `index.html` con un elemento `<canvas>` de 400x400 píxeles y un panel de interfaz de usuario.
- **CSS**: Estilos para centrar el contenido y darle un aspecto oscuro moderno.
- **JavaScript**: Archivo `snake.js` con toda la lógica del juego.

### 2. Lógica del Juego
- **Serpiente**: Representada como un array de coordenadas `{x, y}`.
- **Comida**: Generada en una posición aleatoria dentro del grid (20x20 píxeles).
- **Movimiento**: La serpiente se mueve en una dirección (arriba, abajo, izquierda, derecha).
- **Colisiones**: 
  - La serpiente muere si choca contra las paredes.
  - La serpiente muere si choca contra su propio cuerpo.
  - La serpiente crece si come la comida.
- **Game Over**: Pantalla con mensaje y opción de reiniciar con la barra espaciadora.

### 3. Sistema de Niveles
- **Configuración**: 6 niveles con velocidades y objetivos de puntuación diferentes.
- **Progresión**: Al alcanzar la puntuación objetivo, subes de nivel y la velocidad aumenta.

### 4. Interfaz de Usuario
- **Puntuación**: Mostrar la puntuación actual.
- **Nivel**: Mostrar el nivel actual.
- **Velocidad**: Mostrar la velocidad actual del juego.

## Instrucciones Específicas para el Modelo

### 1. Inicialización
- **Variables Globales**: Declarar variables para la serpiente, comida, dirección, puntuación, nivel, velocidad, etc.
- **Configuración de Niveles**: Definir el objeto `levels` con la configuración de cada nivel.
- **Función `initGame()`**: Inicializar el estado del juego y crear la primera comida.

### 2. Lógica del Juego
- **Función `gameStep()`**: 
  - Actualizar la dirección actual con la siguiente dirección planificada.
  - Calcular la nueva posición de la cabeza según la dirección.
  - Verificar colisiones con paredes y con el propio cuerpo.
  - Añadir la nueva cabeza a la serpiente.
  - Si la cabeza coincide con la comida, incrementar la puntuación, verificar si debe subir de nivel y crear nueva comida.
  - Si no come, eliminar la cola para mantener el tamaño.
  - Redibujar el juego y actualizar la interfaz.

### 3. Renderizado
- **Función `drawGame()`**: 
  - Limpiar el canvas.
  - Dibujar la serpiente (cabeza de color diferente).
  - Dibujar la comida.
  - Dibujar bordes del canvas.

### 4. Control del Juego
- **Event Listeners**: Capturar las teclas de flecha y la barra espaciadora.
- **Restricciones**: Evitar giros de 180 grados y el scroll de la página.

### 5. Niveles
- **Función `checkLevelUp()`**: Verificar si se debe subir de nivel y actualizar la velocidad.

### 6. Game Over
- **Función `gameOver()`**: Detener el bucle, dibujar un fondo semitransparente y mostrar mensajes.

## Patrones y Convenciones

### Estilo del Código
- **JavaScript**: ES6+ con `const` y `let`.
- **Nombres**: `camelCase` para variables y funciones.
- **Comentarios**: En español para explicar la lógica compleja.

### Estructura del Código
- **Bloques**: Uso de llaves `{}` para definir bloques de código.
- **Indentación**: 4 espacios por nivel de indentación.
- **Líneas en blanco**: Separar secciones lógicas del código.

### Patrones del Proyecto
- **Game Loop**: Uso de `setInterval` para el bucle del juego.
- **Estado del Juego**: Variables globales y función `initGame()` para reiniciar.
- **Renderizado**: Uso de HTML5 Canvas y función `drawGame()`.
- **Manejo de Eventos**: Uso de `keydown` para capturar teclas.
- **Niveles**: Objeto `levels` y función `checkLevelUp()`.

### Reglas Generales
- **Colisiones**: Paredes, cuerpo y comida.
- **Movimiento**: Evitar giros de 180 grados.
- **Comida**: Generar en posición aleatoria, nunca sobre la serpiente.
- **Interfaz de Usuario**: Actualizar puntuación, nivel y velocidad.
- **Game Over**: Pantalla con mensaje y reinicio con barra espaciadora.

## Archivos a Generar

1. **`index.html`**: Estructura HTML, estilos CSS y referencia al script `snake.js`.
2. **`snake.js`**: Lógica completa del juego.
3. **`README.md`**: Documentación completa del juego.
4. **`CONVENTIONS.md`**: Estilo del código, patrones y reglas generales.
5. **`PROMPT.md`**: Instrucciones específicas para generar el proyecto.
6. **`.gitignore`**: Ignorar archivos relacionados con `.aider`.

## Notas Adicionales

- **Privacidad**: Todo el proceso de desarrollo ocurre localmente, sin enviar código fuente a servidores externos.
- **Rendimiento**: El modelo está cuantizado (Q4_K_XL) para optimizar el uso de memoria y velocidad de inferencia.
- **Modo Agentes de Aider**: aider en modo agentes permite una interacción más autónoma y estructurada con el modelo.
- **Integración con llama.cpp**: llama.cpp proporciona una implementación eficiente y portable de inferencia para modelos cuantizados.
