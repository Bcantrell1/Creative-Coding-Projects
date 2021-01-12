/*Inspiration:  */

/* UI Options */
const backgroundImage = new Image();
backgroundImage.src = './photo-1609645778471-613f21fcf3df.jpg'

/* Canvas Options */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

//Change canvas size when window scales
addEventListener('resize', function (e) {
    canvas.width = innerWidth,
        canvas.height = innerHeight
});

let lives = 3;

/* Player Paddle */
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
const PADDLE_MARGIN = 50;
const paddle = {
    x: canvas.width / 2 - PADDLE_WIDTH / 2,
    y: canvas.height - PADDLE_HEIGHT - PADDLE_MARGIN,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    moveSpeed: 5
}

const playerBlock = () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

    ctx.strokeStyle = "blue";
    ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

/* Paddle Movements */
let moveLeft = false;
let moveRight = false;
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        moveLeft = true;
    } else if (event.keyCode === 39) {
        moveRight = true;
    }
})

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 37) {
        moveLeft = false;
    } else if (event.keyCode === 39) {
        moveRight = false;
    }
})

let movePaddle = () => {
    if (moveRight && paddle.x + PADDLE_WIDTH < canvas.width) {
        paddle.x += paddle.moveSpeed;
    } else if (moveLeft && paddle.x > 0) {
        paddle.x -= paddle.moveSpeed;
    }
};

/* Gamne Ball */
const Ball_RADIUS = 5;
const ball = {
    x: canvas.width / 2,
    y: paddle.y - Ball_RADIUS,
    radius: Ball_RADIUS,
    speed: 3,
    dx: 3,
    dy: -3
}

const gameBall = () => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.closePath();
}

const moveBall = () => {
    ball.x += ball.dx;
    ball.y += ball.dy;
}

const ballCollision = () => {
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }
    if (ball.y + ball.radius > canvas.height) {
        lives--;
        resetBall();
    }
}

const resetBall = () => {
    ball.x = canvas.width / 2;
    ball.y = paddle.y - Ball_RADIUS;
    ball.dx = 3 * (Math.random() * 2 - 1);
    ball.dy = -3;
}

const ballPaddleCollision = () => {
    if (ball.x < paddle.x + paddle.width && ball.x > paddle.x && paddle.y < paddle.y + paddle.height && ball.y > paddle.y) {

        let collidePoint = ball.x - (paddle.x + paddle.width / 2);

        collidePoint = collidePoint / (paddle.width / 2);

        let angle = collidePoint * Math.PI / 3;

        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = -ball.speed * Math.cos(angle);
    }
}

/* Draw Loop */
const draw = () => {
    playerBlock();
    gameBall();
}

/* Update Loop */
const update = () => {
    movePaddle();
    moveBall();
    ballCollision();
    ballPaddleCollision();
}

/* Canvas Drawing */
function loop() {
    ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height,
        0, 0, canvas.width, canvas.height);
    draw();
    update();
    requestAnimationFrame(loop);
}
loop();