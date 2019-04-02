// const canvas = document.getElementById("canvas");
// const c = canvas.getContext("2d");
// // canvas.height = window.innerHeight;
// // canvas.width = window.innerWidth;

// // class Brick {
// //     constructor(x, y, w, h) {
        
// //     }
// // }
// // let rec = new Brick();

// //Row 1 of bricks
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

// //Padding Board
// let paddleX = 425;

// const movePaddle = () => {
//     requestAnimationFrame(movePaddle);
//     // c.clearRect(120, 15, 120, 15);
//     c.fillRect(paddleX, 575, 150, 15);
// }
// // movePaddle();

// // class Paddle {
// //     constructor(x, y, w, h) {
// //         c.fillRect(x, y, w, h);
// //     }
// // }
// // const paddle = new Paddle(425, 575, 150, 15);
    
// //Circle
// const radius = 12;
// let circleX = 500;
// let circleY = 563;
// let vx = 1;
// let vy = 1;

// const createBall = () => {
//     // c.clearRect(0, 0, canvas.width, canvas.height);
//     c.beginPath();
//     c.arc(circleX, circleY, radius, 0, 2 * Math.PI, false);
//     c.fillStyle = '#FF0000';
//     c.fill();
//     c.closePath();
//     c.stroke();
// }

// const moveBall = () => {
//     createBall();
//     requestAnimationFrame(moveBall);

//     circleX += vx;
//     circleY += vy;
//     if(circleX + radius > canvas.width || circleX < 0) vx -= vx; 
//     if(circleY + radius > (canvas.height - 25) || circleY < 0) vy -= vy;
// }
// moveBall();

// document.body.addEventListener("keydown", e => {
//     if(e.keyCode == "37") paddleX -= 10;
//     if(e.keyCode == "39") paddleX += 10;
// });


















// function setup () {
//     createCanvas(1100,600);
// }

// class RectangleStructure { 
//     constructor(rectX, rectY, rectW, rectH) {
//         rect(rectX, rectY, rectW, rectH);
//     }
// }
// const rect = new RectangleStructure(100, 100, 100, 25);

//Credits: https://www.youtube.com/watch?v=3GLirU3SkDM

// let paddleX = 470;
// function draw() {
//     background(0);
//     rect(70, 80, 100, 25);
//     rect(240, 80, 100, 25);
//     rect(410, 80, 100, 25);
//     rect(580, 80, 100, 25);
//     rect(750, 80, 100, 25);
//     rect(920, 80, 100, 25);

//     //Row 2 of bricks
//     rect(70, 140, 100, 25);
//     rect(240, 140, 100, 25);
//     rect(410, 140, 100, 25);
//     rect(580, 140, 100, 25);
//     rect(750, 140, 100, 25);
//     rect(920, 140, 100, 25);

//     //Row 3 of bricks
//     rect(70, 200, 100, 25);
//     rect(240, 200, 100, 25);
//     rect(410, 200, 100, 25);
//     rect(580, 200, 100, 25);
//     rect(750, 200, 100, 25);
//     rect(920, 200, 100, 25);

//     //Row 4 of bricks
//     rect(70, 260, 100, 25);
//     rect(240, 260, 100, 25);
//     rect(410, 260, 100, 25);
//     rect(580, 260, 100, 25);
//     rect(750, 260, 100, 25);
//     rect(920, 260, 100, 25);

//     //Paddle 
//     rect(paddleX, 575, 150, 15);

//     //Ball
//     ellipse(550, 563, 24, 24);
// }

    // class Paddle {
    //     constructor() {
    //         this.locationX = (width/2) - 75;
    //         this.locationY = height - 25;
    //         this.width = 150;
    //         this.height = 15;
    //     }
    // }
    // rect(this.locationX, this.locationY, this.width, this.height);
    // const paddle = new Paddle();
    // paddle.display();


    // function keyPressed() {
    //     if(keyCode === LEFT_ARROW) paddleX -= 20;
    //     if(keyCode === RIGHT_ARROW) paddleX += 20;
    // }
    // keyPressed()

    // function movePaddle() {
    //     if(keyIsDown(LEFT_ARROW)) paddleX -= 20;
    //     if(keyIsDown(RIGHT_ARROW))  paddleX += 20;
    // }
    // movePaddle()