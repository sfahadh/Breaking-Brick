const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// let vx = 5;
let vy = -5;
let y = canvas.height - 25;
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

//Ask about inheritance
// class Bricks extends Paddle {
//     constructor() {
//         super();
//         this.createBricks = () => {
//             c.fillRect(this.x, this.y, this.w, this.h)
//         }
//     }
// }
// const brick = new Bricks(240, 80, paddle.w, paddle.h);

// let paddleBallDistance = (px, bx, py, by) => {
//     return Math.sqrt(Math.pow(px - bx, 2) + Math.pow(py - by, 2));
// }

// let paddleBallStart = (pxs, bxs, pys, bys) => {
//     return Math.sqrt(Math.pow(pxs - bxs, 2) + Math.pow(pys - bys, 2));
// }
// let paddleBallEnd = (pxe, bxe, pye, bye) => {
//     return Math.sqrt(Math.pow((pxe + 145) - bxe, 2) + Math.pow(pye - bye, 2));
// }

const moveBall = () => {
    // requestAnimationFrame(moveBall);
    c.clearRect(0, 0, canvas.width, canvas.height);
    ball.createBall();
    paddle.createPaddle();
    // brick.createBricks();
    // let distanceStart = paddleBallStart(paddle.x, ball.x, paddle.y, ball.y);
    // let distanceEnd = paddleBallEnd(paddle.x, ball.x, paddle.y, ball.y);

    c.fillRect(70, 80, 100, 25);
    c.fillRect(240, 80, 100, 25);
    c.fillRect(490, 80, 100, 25);
    // c.fillRect(580, 80, 100, 25);
    c.fillRect(750, 80, 100, 25);
    c.fillRect(920, 80, 100, 25);
    
    // ball.x += vx; 
    ball.y += vy;

    //ball bounces around canvas
    if(ball.x + ball.r > canvas.width || ball.x - ball.r < 0) {
        vx = -vx; 
    } 
    if(ball.y < ball.r) {
        vy = -vy;
    } else if(ball.y + ball.r > canvas.height) {
        console.log(ball.y + ball.r);
        console.log(canvas.height);
        if(ball.x > paddle.x && ball.x < paddle.x + paddle.w) {
            vy =-vy;
        } else {
            clearInterval(end);
        }
    }

    // if(distanceStart < 30 || distanceEnd < 30) {
    //     console.log(distanceStart);
    //     console.log(distanceEnd);
    //     vy = -vy;
    // }
}
const end = setInterval(moveBall, 10);

document.body.addEventListener("keydown", e => {
    if([37, 39].includes(e.keyCode)) {
        e.preventDefault();
    }
    switch (e.keyCode) {
        case 37:
            paddle.x -= 40;
            if(paddle.x < -5) paddle.x = -5;
            break;
        case 39:
            paddle.x += 40;
            if(paddle.x > 955) paddle.x = 955;
            break;
    }
});



 // c.fillRect(70, 80, 100, 25);
    // c.fillRect(240, 80, 100, 25);
    // c.fillRect(410, 80, 100, 25);
    // c.fillRect(580, 80, 100, 25);
    // c.fillRect(750, 80, 100, 25);
    // c.fillRect(920, 80, 100, 25);

    // //Row 2 of bricks
    // c.fillRect(70, 140, 100, 25);
    // c.fillRect(240, 140, 100, 25);
    // c.fillRect(410, 140, 100, 25);
    // c.fillRect(580, 140, 100, 25);
    // c.fillRect(750, 140, 100, 25);
    // c.fillRect(920, 140, 100, 25);

    // //Row 3 of bricks
    // c.fillRect(70, 200, 100, 25);
    // c.fillRect(240, 200, 100, 25);
    // c.fillRect(410, 200, 100, 25);
    // c.fillRect(580, 200, 100, 25);
    // c.fillRect(750, 200, 100, 25);
    // c.fillRect(920, 200, 100, 25);

    // //Row 4 of bricks
    // c.fillRect(70, 260, 100, 25);
    // c.fillRect(240, 260, 100, 25);
    // c.fillRect(410, 260, 100, 25);
    // c.fillRect(580, 260, 100, 25);
    // c.fillRect(750, 260, 100, 25);
    // c.fillRect(920, 260, 100, 25);


