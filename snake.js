// Configuración del juego
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del canvas
canvas.width = 400;
canvas.height = 400;

// Variables del juego
let snake = [];
let food = {};
let direction = 'right';
let nextDirection = 'right';
let score = 0;
let level = 1;
let gameSpeed = 150;
let gameLoop;
let isGameOver = false;

// Configuración de niveles
const levels = {
    1: { speed: 150, targetScore: 10 },
    2: { speed: 120, targetScore: 20 },
    3: { speed: 90, targetScore: 30 },
    4: { speed: 70, targetScore: 40 },
    5: { speed: 50, targetScore: 50 },
    6: { speed: 40, targetScore: 9999 } // Nivel infinito
};

// Inicializar juego
function initGame() {
    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];
    direction = 'right';
    nextDirection = 'right';
    score = 0;
    level = 1;
    gameSpeed = levels[1].speed;
    isGameOver = false;
    createFood();
    updateUI();
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(gameStep, gameSpeed);
}

// Crear comida en posición aleatoria
function createFood() {
    const gridSize = 20;
    const maxCells = canvas.width / gridSize;
    
    food = {
        x: Math.floor(Math.random() * maxCells),
        y: Math.floor(Math.random() * maxCells)
    };
    
    // Asegurar que la comida no aparezca sobre la serpiente
    for (let segment of snake) {
        if (segment.x === food.x && segment.y === food.y) {
            createFood();
            break;
        }
    }
}

// Dibujar juego
function drawGame() {
    const gridSize = 20;
    
    // Limpiar canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar serpiente
    ctx.fillStyle = '#0f0';
    for (let i = 0; i < snake.length; i++) {
        const segment = snake[i];
        // Cabeza de color diferente
        if (i === 0) {
            ctx.fillStyle = '#0f0';
        } else {
            ctx.fillStyle = '#0a0';
        }
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
    }
    
    // Dibujar comida
    ctx.fillStyle = '#f00';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
    
    // Dibujar bordes
    ctx.strokeStyle = '#333';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// Actualizar interfaz de usuario
function updateUI() {
    document.getElementById('score').textContent = `Puntuación: ${score}`;
    document.getElementById('level').textContent = `Nivel: ${level}`;
    document.getElementById('speed').textContent = `Velocidad: ${gameSpeed}ms`;
}

// Paso del juego
function gameStep() {
    if (isGameOver) return;
    
    direction = nextDirection;
    
    // Calcular nueva posición de la cabeza
    const head = { ...snake[0] };
    
    switch (direction) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
    }
    
    // Verificar colisiones con paredes
    const gridSize = 20;
    if (head.x < 0 || head.x >= canvas.width / gridSize ||
        head.y < 0 || head.y >= canvas.height / gridSize) {
        gameOver();
        return;
    }
    
    // Verificar colisión con la propia serpiente
    for (let segment of snake) {
        if (head.x === segment.x && head.y === segment.y) {
            gameOver();
            return;
        }
    }
    
    // Añadir nueva cabeza
    snake.unshift(head);
    
    // Verificar si comió
    if (head.x === food.x && head.y === food.y) {
        score += 1;
        checkLevelUp();
        createFood();
    } else {
        // Eliminar cola si no comió
        snake.pop();
    }
    
    drawGame();
    updateUI();
}

// Verificar subida de nivel
function checkLevelUp() {
    const currentLevelConfig = levels[level];
    
    if (score >= currentLevelConfig.targetScore && level < Object.keys(levels).length) {
        level++;
        if (levels[level]) {
            gameSpeed = levels[level].speed;
            clearInterval(gameLoop);
            gameLoop = setInterval(gameStep, gameSpeed);
        }
    }
}

// Game Over
function gameOver() {
    isGameOver = true;
    clearInterval(gameLoop);
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#fff';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('¡GAME OVER!', canvas.width / 2, canvas.height / 2 - 20);
    
    ctx.font = '20px Arial';
    ctx.fillText(`Puntuación final: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
    ctx.fillText(`Nivel alcanzado: ${level}`, canvas.width / 2, canvas.height / 2 + 50);
    
    ctx.font = '16px Arial';
    ctx.fillText('Presiona Espacio para reiniciar', canvas.width / 2, canvas.height / 2 + 90);
}

// Control del juego
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

// Iniciar juego al cargar
window.onload = () => {
    initGame();
};
