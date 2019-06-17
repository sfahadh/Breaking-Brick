# Breaking-Bricks
Recreated the classic arcade game, "BRICK BREAKERS" with a Mario/Breaking Bad theme

## About the Game 
Once the player clicks on the start game button on the home page, a screen of the game will display and the game will immediately start. Players must use the left and right arrow key to move the paddle. 

### DIFFICULTY:
The difficulty is already set by default. You have 5 lives and the ball moves at a pretty fast rate. So the game can be pretty tough for beginners.

### BRICKS:
There  are 6 columns of bricks spaced evenly and 4 rows of bricks also spaced evenly. There will be a total amount of 24 bricks. When a ball destroys any of the bricks, the brick will disappear from the game and the ball will reverse directions. 

### WIN/LOSE:
When the ball hits the bottom of the page, the ball will reset back to the center of the page with the paddle. The ball will immediately leave the paddle right after it hits the bottom of the page. A life will be taken away which is presented on the top right corner. Once the lives count drops to 0, A big sign will appear and show "FAILURE" on the board. From this point on, you can no longer continue on to play the game. Your only options is is to refresh the page. When you win, a big sign will appear and show "CONGRATULATIONS". The game will show your score for that level. 

### SCORE:
Your score will be presented on the top left corner of the game. It will continuously add up as you hit and/or destroy each of the bricks. Each brick is worth 100 points and since there are a total number of 24 bricks, the total number of points to win is 2400. 

## Wireframes
In the first two pages of the wireframes, I mapped out the basics of how the game is going to be structured. The ball will leave the paddle and bounce off the brick. When the ball do bounce off the brick, the brick is destroyed. I did not match the animation depicted on the wireframe as I did for the real game. I also change the size of the paddle for each drawing. Originally that was going to be set depending on the difficulty and level, but ultimately I decided to just keep it consistent with just one paddle size and with one level. 

Wireframe 1             |  Wireframe 2
:-------------------------:|:-------------------------:
![wireframe1](https://user-images.githubusercontent.com/45612730/59571678-408bfc00-9075-11e9-872f-6254407e1cae.jpg) | ![wireframe2](https://user-images.githubusercontent.com/45612730/59571679-408bfc00-9075-11e9-9df2-f44ef4f82b4f.jpg)

In the second two pages of the wireframes, I included some colors to show the end or start result of the game. Two of the examples can be ignored, which are the difficulty drawing and the next level drawing. The reason being is because I did not incorporate it into the game. The other two, I have. But there is something missing in all of the drawings and that is the lives. In the released game, I included the number of lives the user has, which basically means that whenever the ball touches the floor, the user loses a life. If the lives drops down to 0, the game is over

Wireframe 3            |  Wireframe 4
:-------------------------:|:-------------------------:
![wireframe3](https://user-images.githubusercontent.com/45612730/59571680-408bfc00-9075-11e9-9f30-05810739b79a.jpg) | ![wireframe4](https://user-images.githubusercontent.com/45612730/59571681-408bfc00-9075-11e9-94ca-13ff89aa59fe.jpg)

## Game Preview
![opening-game](https://user-images.githubusercontent.com/45612730/59572356-b34ba600-907a-11e9-91b7-838ec3f0e8f1.png)

![start-game](https://user-images.githubusercontent.com/45612730/59572357-b34ba600-907a-11e9-97cd-870b9993b044.png)

## Technologies Used
- Canvas
- JavaScript
- HTML5
- CSS3

## Deployment
This project is available at: [http://fahad-breaking-bricks.surge.sh](http://fahad-breaking-bricks.surge.sh)
