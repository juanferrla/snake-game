# Snake Game

Un clásico juego de la serpiente (Snake) implementado en JavaScript puro, HTML y CSS. Este juego incluye sistema de niveles, puntuación progresiva y dificultad creciente.

## Tabla de Contenidos

- [Características](#características)
- [Cómo Jugar](#cómo-jugar)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración y Niveles](#configuración-y-niveles)
- [Cómo Ejecutar](#cómo-ejecutar)
- [Control del Juego](#control-del-juego)
- [Lógica del Juego](#lógica-del-juego)
- [Extensibilidad](#extensibilidad)
- [Requisitos](#requisitos)
- [Créditos](#créditos)

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

## Configuración y Niveles

El juego tiene 6 niveles configurables en el objeto `levels` dentro de `snake.js`:

