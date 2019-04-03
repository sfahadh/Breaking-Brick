const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

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

class Bricks extends Paddle {
    constructor(locationX, locationY, width, height) {
        super(locationX, locationY, width, height);

        this.createBricks = () => {
            for(let i = 0; i < 6; i++) {
                locationX = 70 + (170 * i);
                c.fillRect(locationX, 80, 100, 25);
                for(let j = 0; j < 4; j++) {
                    locationY = 80 + (60 * j);
                    c.fillRect(locationX, locationY, 100, 25);
                }
            }
        }
    }
}
let brick = new Bricks(this.locationX, this.locationY, 100, 25);

// let brickCollision = () => {
//     for(let i = 0; i < 6; i++) {
//         for(let j = 0; j < 4; j++) {
            
//         }
//     }
// }

let vx = 5;
let vy = -5;

const moveBall = () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    ball.createBall();
    paddle.createPaddle();
    brick.createBricks()
    // brickCollision();
    // console.log(brickObj);
    
    ball.x += vx; 
    ball.y += vy;7

    //ball bounces around canvas
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


