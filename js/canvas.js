const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let vx = 5;
let vy = -5;
//CLASSES
class Ball {
    constructor(circleX, circleY, radius) {
        this.x = circleX;
        this.y = circleY;
        this.r = radius;

        this.createBall = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            c.fillStyle = "white";
            c.fill();
            c.stroke();
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
class Bricks extends Paddle {
    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.createBricks = () => {
            for(let i = 0; i < 6; i++) {
                for(let j = 0; j < 4; j++) {
                    bricks[i][j].x = 70 + (170 * i);
                    bricks[i][j].y = 80 + (60 * j);
                    c.fillRect(bricks[i][j].x, bricks[i][j].y, 100, 25);
                }
            }
        }
    }
}
let brickFill = new Bricks(this.x, this.y, 100, 25);

//Collision Theory
let brickCollision = () => {
    for(let i = 0; i < 6; i++) {
        for(let j = 0; j< 4; j++) {
            let brick = bricks[i][j]
            console.log(brick);
            // if(ball.x + ball.r > brick.x && 
            //     ball.x < brick.x - ball.r) {
            //     vx = -vx;
            // }
            // if(ball.y + ball.r > bricks.y && 
            //     ball.y < brick.y - ball.r) {
            //     vy = -vy;
            // }
        }
    }
}

const paddleScreenCollision = () => {
    if(ball.x + ball.r > canvas.width || ball.x - ball.r < 0) {
        vx = -vx; 
    } 
    if(ball.y + ball.r > canvas.height || ball.y - ball.r < 0) {
        vy = -vy;
    } else if(ball.x + ball.r > paddle.x && ball.x < paddle.x +   paddle.w) {
        if(ball.y + ball.r > paddle.y) {
            vy = -vy;
        } 
    } 
    if(ball.y > canvas.height - ball.r) {
        clearInterval(end);
    }
}

const moveBall = () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    ball.createBall();
    paddle.createPaddle();
    paddleScreenCollision();
    brickFill.createBricks();
    brickCollision();
    
    ball.x += vx; 
    ball.y += vy;
}
const end = setInterval(moveBall, 10);

document.body.addEventListener("keydown", e => {
    if([37, 39].includes(e.keyCode)) {
        e.preventDefault();
    }
    switch (e.keyCode) {
        case 37:
            paddle.x -= 50;
            if(paddle.x < -5) paddle.x = -5;
            break;
        case 39:
            paddle.x += 50;
            if(paddle.x > 955) paddle.x = 955;
            break;
    }
});