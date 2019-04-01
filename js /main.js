const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

class Brick {
    constructor(coordinateX, coordinateY, width, height) {
        this.x = coordinateX;
        this.y = coordinateY;
        this.w = width;
        this.h = height;
    }
}

let rec = new Brick();

//Row 1 of bricks
c.fillRect(70, 80, 100, 25);
c.fillRect(240, 80, 100, 25);
c.fillRect(410, 80, 100, 25);
c.fillRect(580, 80, 100, 25);
c.fillRect(750, 80, 100, 25);
c.fillRect(920, 80, 100, 25);

//Row 2 of bricks
c.fillRect(70, 140, 100, 25);
c.fillRect(240, 140, 100, 25);
c.fillRect(410, 140, 100, 25);
c.fillRect(580, 140, 100, 25);
c.fillRect(750, 140, 100, 25);
c.fillRect(920, 140, 100, 25);

//Row 3 of bricks
c.fillRect(70, 200, 100, 25);
c.fillRect(240, 200, 100, 25);
c.fillRect(410, 200, 100, 25);
c.fillRect(580, 200, 100, 25);
c.fillRect(750, 200, 100, 25);
c.fillRect(920, 200, 100, 25);

//Row 4 of bricks
c.fillRect(70, 260, 100, 25);
c.fillRect(240, 260, 100, 25);
c.fillRect(410, 260, 100, 25);
c.fillRect(580, 260, 100, 25);
c.fillRect(750, 260, 100, 25);
c.fillRect(920, 260, 100, 25);

//Padding Board
c.fillRect(425, 575, 150, 15);

let locationX = 500;
let locationY = 563;
let velocityX = 1;
let velocityY = 1;

//Circle
let move = () => {
    requestAnimationFrame(move);
    
    const radius = 12;
    c.arc(locationX, locationY, radius, 0, 2 * Math.PI, false);
    c.fillStyle = '#FF0000';
    c.fill();
    c.stroke();

    if(locationX + radius > canvas.width || locationX < 0) {
        velocityX -= velocityX;
    } 
    if(locationY + radius > (canvas.height - 25) || locationY < 0) {
        velocityY -= velocityY;
    }

    // locationX += velocityX;
    // locationY += velocityY;
}
move();





