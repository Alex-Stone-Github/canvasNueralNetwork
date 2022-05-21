import { drawRect, setFill } from "./render.js";
import * as global from "./globals.js"
import { Player } from "./player.js";
import { Brick, YellowBrick } from "./brick.js";
import { Model3 } from "./brain/model.js";
import { Perceptron } from "./brain/perceptron.js";
import { createLevel } from "./level-data/level.js";

// Camera
const cameraSpeed: number = 10;
var offset = {x:0,y:0}
// Objects
var players: Player[] = [new Player({x:40, y:40})];
var bricks: Brick[] = createLevel();



setInterval(()=>{players[0].jump();}, 3000); // Have player jump every three seconds



const loop = () => {
    // logic
    for (let player of players)
        player.update(1/global.FPS, bricks);



    // rendering
    setFill("blue");
    drawRect(0, 0, global.width, global.height);
    for (const player of players)
        player.show(offset);
    for (const brick of bricks)
        brick.show(offset);
}


// Game logic
setInterval(loop, 1000/global.FPS);
document.addEventListener("keydown", e => {
    switch (e.key) {
        case 'w':
            offset.y+=cameraSpeed;
        break;
        case 'a':
            offset.x+=cameraSpeed;
        break;
        case 'd':
            offset.x-=cameraSpeed;
        break;
        case 's':
            offset.y-=cameraSpeed;
        break;
        case ' ':
            players[0].jump();
            
    }
})
