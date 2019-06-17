const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let header = document.querySelector("h1");
let vx = 2;
let vy = -2;
let score = 0;
let lives = 5;
let end;
let marioBricks = new Image();
marioBricks.src = "images/mario-bricks.png";

class Ball {
    constructor(circleX, circleY, radius) {
        this.x = circleX;
        this.y = circleY;
        this.r = radius;

        this.createBall = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            c.fillStyle = "#FAFF05";
            c.fill();
            c.closePath();
        }
    }
}

const ball = new Ball(canvas.width / 2, 563, 12);
class Paddle {
    constructor(locationX, locationY, width, height) {
        this.x = locationX;
        this.y = locationY;
        this.w = width;
        this.h = height;

        this.createPaddle = () => {
            c.fillStyle = "black";
            c.fillRect(this.x, this.y, this.w, this.h);
        }
    }
}
const paddle = new Paddle(475, 575, 150, 15);

let bricks = [];
for(let i = 0; i < 6; i++) {
    bricks[i] = []
    for(let j = 0; j < 4; j++) {
        bricks[i][j] = {
            x: 0, 
            y: 0,
            health: 1
        }
    }
}

const createBricks = () => {
    for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 4; j++) {
            if(bricks[i][j].health === 1) {
                bricks[i][j].x = 70 + (170 * i);
                bricks[i][j].y = 70 + (60 * j);
                c.drawImage(marioBricks, bricks[i][j].x, bricks[i][j].y, 100, 30);
            }
        }
    }
}

let brickCollision = () => {
    for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 4; j++) {
            let brick = bricks[i][j]
            if(brick.health === 1) {
                if(ball.x + ball.r >= brick.x && 
                    ball.x - ball.r <= brick.x + 100 && 
                    ball.y + ball.r >= brick.y && 
                    ball.y - ball.r <= brick.y + 25) {
                    vy = -vy;
                    vx = vx;
                    brick.health = 0;
                    score += 100;
                    if(score === 2400) {
                        header.innerHTML = "SHOULD'VE MADE THIS HARDER!";
                        header.style.fontSize = "3.5em";
                        header.style.color = "rgb(14, 21, 131)";
                        header.style.animation = "flash 2.5s infinite";
                        clearInterval(end);
                    }
                }
            }
        }
    }
}

const paddleScreenCollision = () => {
    if(ball.x + ball.r > canvas.width || ball.x - ball.r < 0) {
        vx = -vx; 
    } 
    if(ball.y + ball.r > canvas.height || ball.y - ball.r < 0) {
        vy = -vy;
    } else if(ball.x + ball.r > paddle.x && ball.x - ball.r < paddle.x + paddle.w && 
        ball.y + ball.r > paddle.y && ball.y - ball.r < paddle.y + paddle.h + 10) {
        vy = -vy;
    }
    if(ball.y > canvas.height - ball.r) {
        lives--;
        if(lives === 0) {
            header.innerHTML = "YOU TRASH!";
            header.style.fontSize = "3.5em";
            header.style.color = "rgb(172, 0, 9)";
            header.style.animation = "flash 2.5s infinite";
            clearInterval(end);
        } else {
            ball.x = canvas.width / 2;
            ball.y = 563;
            paddle.x = 475;
        }
    }
}

const scoreBoard = () => {
    c.font = "27px Arbutus";
    c.fillStyle = "white";
    c.fillText(`Score: ${score}`, 15, 35);
}

const livesBoard = () => {
    c.font = "27px Arbutus";
    c.fillStyle = "white";
    c.fillText(`Lives: ${lives}`, 945, 35);
}

const startGame = () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    ball.createBall();
    paddle.createPaddle();
    paddleScreenCollision();
    createBricks();
    brickCollision();
    scoreBoard();
    livesBoard();

    ball.x += vx; 
    ball.y += vy;
}
window.onload = () => {
    let game = document.getElementById("game");
    let modal = document.getElementById("modal");
    game.addEventListener("click", start = () => {
        modal.style.display = "none";
        end = setInterval(startGame, 1);
    });
}

document.addEventListener("keydown", e => {
    if([37, 39].includes(e.keyCode)) {
        e.preventDefault();
    }
    switch (e.keyCode) {
        case 37:
            paddle.x -= 110;
            if(paddle.x < -5) paddle.x = -5;
            break;
        case 39:
            paddle.x += 110;
            if(paddle.x > 955) paddle.x = 955;
            break;
    }
});


