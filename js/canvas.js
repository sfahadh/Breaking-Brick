const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

//Row 1 of bricks
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

//CLASSES
// class Ball {
//     constructor(circleX, circleY, radius) {
//         this.x = circleX;
//         this.y = circleY;
//         this.radius = radius;
//         c.arc(this.x, this.y, radius, 0, 2 * Math.PI, false);
//     }
// }
// const ball = new Ball(500, 563, 12, 0, 2 * Math.PI, false);

// class Paddle {
//     constructor(locationX, locationY, width, height) {
//         this.x = locationX;
//         this.y = locationY;
//         this.w = width;
//         this.h = height;
//         c.fillRect(this.x, this.y, this.w, this.h);
//     }
// }
// const paddle = new Paddle(425, 575, 150, 15);

//Circle
let circleX = 500;
let circleY = 562;
const radius =  12;
let vx = 10;
let vy = 20;

//Paddle
let paddleX = 475;

const moveBall = () => {
    requestAnimationFrame(moveBall);
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.arc(circleX, circleY, radius, 0, 2 * Math.PI, false);
    c.fillStyle = '#FF0000';
    c.stroke();

    c.fillRect(paddleX, 575, 150, 15);

    circleX += vx;
    circleY += vy;
    if(circleX + radius > canvas.width || circleX - radius < 0) {
        vx = -vx; 
    }
    if(circleY + radius > canvas.height || circleY - radius < 0) {
        vy = -vy;
    }

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
}
moveBall();

document.body.addEventListener("keydown", e => {
    if([37, 39].includes(e.keyCode)) {
        e.preventDefault();
    }
    switch (e.keyCode) {
        case 37:
            paddleX -= 20;
            break;
        case 39:
            paddleX += 20;
    }
});






