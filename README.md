# Snake Game

Un clásico juego de la serpiente (Snake) implementado en JavaScript puro, HTML y CSS. Este juego incluye sistema de niveles, puntuación progresiva y dificultad creciente.

## Tabla de Contenidos

- [Snake Game](#snake-game)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Características](#características)
  - [Cómo Jugar](#cómo-jugar)
  - [Estructura del Proyecto](#estructura-del-proyecto)
    - [Archivo HTML (`index.html`)](#archivo-html-indexhtml)
      - [Estructura HTML Detallada](#estructura-html-detallada)
  - [Configuración y Niveles](#configuración-y-niveles)
    - [Configuración de Niveles Detallada](#configuración-de-niveles-detallada)
  - [Cómo Ejecutar](#cómo-ejecutar)
  - [Control del Juego](#control-del-juego)
    - [Restricciones de Control](#restricciones-de-control)
  - [Lógica del Juego](#lógica-del-juego)
    - [Variables Globales](#variables-globales)
    - [Funciones Principales](#funciones-principales)
    - [Event Listeners](#event-listeners)
  - [Arquitectura IA](#arquitectura-ia)
    - [Hardware](#hardware)
    - [Software](#software)
    - [Fundamentos de Programación con este Stack](#fundamentos-de-programación-con-este-stack)

## Características

- **Clásico juego de Snake**: Controla una serpiente que crece al comer comida.
- **Sistema de Niveles**: El juego avanza a través de 6 niveles con velocidades y objetivos de puntuación diferentes.
- **Dificultad Progresiva**: La velocidad de la serpiente aumenta a medida que subes de nivel.
- **Interfaz de Usuario**: Muestra la puntuación actual, el nivel y la velocidad del juego en tiempo real.
- **Game Over y Reinicio**: Pantalla de Game Over con puntuación final y opción de reiniciar presionando la barra espaciadora.
- **Prevención de Colisiones**: La comida nunca aparece sobre la serpiente y la serpiente no puede girar 180 grados sobre sí misma instantáneamente.

## Cómo Jugar

1.  **Objetivo**: Controla la serpiente para que coma la comida roja y crezca. Evita chocar contra las paredes o contra tu propio cuerpo.
2.  **Progresión**: Cada vez que comes, ganas 1 punto. Al alcanzar la puntuación objetivo del nivel actual, subes de nivel y la serpiente se mueve más rápido.
3.  **Fin del Juego**: El juego termina si la serpiente choca contra una pared o contra sí misma.
4.  **Reiniciar**: Tras un Game Over, presiona la barra espaciadora para comenzar de nuevo.

## Estructura del Proyecto

Este proyecto consta de los siguientes archivos:

- **`index.html`**: Archivo HTML que contiene la estructura básica del juego, incluyendo un elemento `<canvas>` para renderizar el juego y un contenedor para la interfaz de usuario.
- **`snake.js`**: Archivo JavaScript que contiene toda la lógica del juego, incluyendo inicialización, movimiento, colisiones, niveles y control del juego.
- **`.gitignore`**: Archivo de configuración para Git que especifica qué archivos deben ser ignorados (en este caso, archivos relacionados con `.aider`).

### Archivo HTML (`index.html`)

El archivo HTML incluye:

- Un elemento `<canvas>` de 400x400 píxeles para renderizar el juego.
- Un panel de interfaz de usuario que muestra la puntuación, nivel y velocidad.
- Estilos CSS para centrar el contenido y darle un aspecto oscuro moderno.
- Referencia al script `snake.js` que contiene toda la lógica del juego.

#### Estructura HTML Detallada

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #222;
            color: #fff;
            font-family: Arial, sans-serif;
        }
        #gameCanvas {
            border: 2px solid #555;
            background-color: #000;
        }
        .ui-panel {
            display: flex;
            gap: 20px;
            margin-bottom: 10px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h1>Snake Game</h1>
    <div class="ui-panel">
        <div id="score">Puntuación: 0</div>
        <div id="level">Nivel: 1</div>
        <div id="speed">Velocidad: 150ms</div>
    </div>
    <canvas id="gameCanvas"></canvas>
    <script src="snake.js"></script>
</body>
</html>
```

## Configuración y Niveles

El juego tiene 6 niveles configurables en el objeto `levels` dentro de `snake.js`:

```javascript
const levels = {
    1: { speed: 150, targetScore: 10 },
    2: { speed: 120, targetScore: 20 },
    3: { speed: 90, targetScore: 30 },
    4: { speed: 70, targetScore: 40 },
    5: { speed: 50, targetScore: 50 },
    6: { speed: 40, targetScore: 9999 } // Nivel infinito
};
```

Cada nivel tiene dos propiedades:
- `targetScore`: La puntuación necesaria para pasar al siguiente nivel.
- `speed`: El intervalo en milisegundos entre movimientos (menor es más rápido).

### Configuración de Niveles Detallada

| Nivel | Puntuación Objetivo | Velocidad (ms) |
|-------|---------------------|----------------|
| 1     | 10                  | 150            |
| 2     | 20                  | 120            |
| 3     | 30                  | 90             |
| 4     | 40                  | 70             |
| 5     | 50                  | 50             |
| 6     | 9999+               | 40             |

## Cómo Ejecutar

1.  Clona o descarga este repositorio.
2.  Abre el archivo `index.html` en tu navegador web favorito.
3.  ¡Empieza a jugar!

## Control del Juego

- **Flechas del teclado**: Controlan la dirección de la serpiente.
  - `↑` (Arriba)
  - `↓` (Abajo)
  - `←` (Izquierda)
  - `→` (Derecha)
- **Barra espaciadora**: Reinicia el juego tras un Game Over.

### Restricciones de Control

- La serpiente no puede girar 180 grados instantáneamente (por ejemplo, si va a la derecha, no puede ir directamente a la izquierda).
- El juego captura las teclas de flecha para evitar el desplazamiento de la página.

## Lógica del Juego

### Variables Globales

```javascript
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let snake = [];
let food = {};
let direction = 'right';
let nextDirection = 'right';
let score = 0;
let level = 1;
let gameSpeed = 150;
let gameLoop;
let isGameOver = false;
```

### Funciones Principales

#### `initGame()`

Inicializa el estado del juego:
- Posición inicial de la serpiente (3 segmentos).
- Dirección inicial (derecha).
- Puntuación y nivel a 0 y 1 respectivamente.
- Velocidad inicial a 150ms.
- Crea la primera comida.
- Inicia el bucle del juego.

#### `createFood()`

Genera una posición aleatoria para la comida dentro del grid del juego (20x20 píxeles). Verifica que la comida no aparezca sobre la serpiente, y si lo hace, intenta generar una nueva posición recursivamente.

#### `drawGame()`

Renderiza el estado actual del juego en el canvas:
- Fondo negro.
- Serpiente verde (cada segmento de 18x18 píxeles dentro de un grid de 20x20).
- Comida roja.
- Borde del canvas.

#### `updateUI()`

Actualiza los elementos del DOM con la información actual:
- Puntuación.
- Nivel.
- Velocidad actual.

#### `gameStep()`

Función principal del bucle del juego que se ejecuta en cada intervalo:
1. Actualiza la dirección actual con la siguiente dirección planificada.
2. Calcula la nueva posición de la cabeza según la dirección.
3. Verifica colisiones con paredes y con el propio cuerpo.
4. Añade la nueva cabeza a la serpiente.
5. Si la cabeza coincide con la comida:
   - Incrementa la puntuación.
   - Verifica si debe subir de nivel.
   - Crea nueva comida.
6. Si no come, elimina la cola para mantener el tamaño.
7. Redibuja el juego y actualiza la interfaz.

#### `checkLevelUp()`

Verifica si la puntuación actual ha alcanzado el objetivo del nivel actual. Si es así:
- Incrementa el nivel.
- Actualiza la velocidad del juego.
- Reinicia el intervalo del bucle con la nueva velocidad.

#### `gameOver()`

Maneja el final del juego:
- Detiene el bucle del juego.
- Dibuja un fondo semitransparente sobre el canvas.
- Muestra el mensaje "¡GAME OVER!", la puntuación final y el nivel alcanzado.
- Indica al jugador que presione Espacio para reiniciar.

### Event Listeners

#### Teclado

```javascript
document.addEventListener('keydown', (e) => {
    // Evitar scroll con flechas
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
    }
    
    // Reiniciar con espacio si game over
    if (isGameOver && e.key === ' ') {
        initGame();
        return;
    }
    
    // Cambiar dirección (evitar reversa inmediata)
    switch (e.key) {
        case 'ArrowUp':
            if (direction !== 'down') nextDirection = 'up';
            break;
        case 'ArrowDown':
            if (direction !== 'up') nextDirection = 'down';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') nextDirection = 'left';
            break;
        case 'ArrowRight':
            if (direction !== 'left') nextDirection = 'right';
            break;
    }
});
```

- Evita giros de 180 grados.
- Reinicia el juego con la barra espaciadora si está en estado de Game Over.
- Evita el desplazamiento de la página con las flechas y la barra espaciadora.

#### Carga de Página

```javascript
window.onload = () => {
    initGame();
};
```

Inicia el juego automáticamente al cargar la página.

## Arquitectura IA

Este proyecto ha sido desarrollado utilizando una arquitectura de desarrollo asistido por inteligencia artificial basada en modelos de lenguaje local.

### Hardware

- **Modelo**: Qwen3-Coder-Next-UD-Q4_K_XL.gguf
- **GPU**: 
  - 2x NVIDIA GeForce RTX 3090 (24 GB de VRAM cada una)
  - 1x NVIDIA GeForce RTX 5070 (16 GB de VRAM)

### Software

- **Framework**: llama.cpp
- **Interfaz de Desarrollo**: aider (modo agentes)

### Fundamentos de Programación con este Stack

El uso de un modelo de lenguaje local como Qwen3-Coder-Next-UD-Q4_K_XL.gguf permite desarrollar software con varias ventajas clave:

1. **Privacidad y Seguridad**: Todo el proceso de desarrollo ocurre localmente, sin enviar código fuente a servidores externos. Esto es especialmente importante para proyectos sensibles o para empresas que requieren cumplimiento estricto de normativas de privacidad.

2. **Rendimiento y Eficiencia**: El modelo está cuantizado (Q4_K_XL) para optimizar el uso de memoria y velocidad de inferencia, permitiendo ejecutarlo eficientemente en hardware de usuario con múltiples GPUs.

3. **Modo Agentes de Aider**: aider en modo agentes permite una interacción más autónoma y estructurada con el modelo. En lugar de respuestas puntuales a preguntas, el agente puede:
   - Analizar el estado completo del proyecto.
   - Proponer cambios coherentes en múltiples archivos.
   - Mantener contexto a lo largo de la sesión de desarrollo.
   - Validar sus propias propuestas contra el código existente.

4. **Integración con llama.cpp**: llama.cpp proporciona una implementación eficiente y portable de inferencia para modelos cuantizados, con soporte nativo para múltiples GPUs y optimizaciones específicas para arquitecturas modernas.

Esta arquitectura representa un enfoque moderno y eficiente para el desarrollo de software, combinando el poder de modelos de lenguaje avanzados con la flexibilidad y control de herramientas de desarrollo local.
