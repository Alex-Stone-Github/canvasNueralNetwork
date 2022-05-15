import { drawRect, setFill } from "./render.js";
import * as global from "./globals.js"
import { Player } from "./player.js";
import { Brick, YellowBrick } from "./brick.js";
import { Model3 } from "./brain/model.js";
import { Perceptron } from "./brain/perceptron.js";






/* PLayground */
let model = new Model3(3, 4);
const output = model.predict([1, 2, 3]);
console.log(output);




// Camera
const cameraSpeed: number = 10;
var offset = {x:0,y:0}
// Objects
const player: Player = new Player({x:40, y:40});
var bricks: Brick[] = [];


function generateLevel(): void {
    for (let i = 0; i < 3; i ++) {
        bricks.push(new YellowBrick({x: 30 + i * 10, y:90}, {x:10, y:10}));
    }
}

const loop = () => {
    // logic
    player.update(1/global.FPS, bricks);

    // rendering
    setFill("blue");
    drawRect(0, 0, global.width, global.height);
    player.show(offset);
    for (const brick of bricks)
        brick.show(offset);
}
generateLevel();
setInterval(loop, 1000/global.FPS)
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
    }
})