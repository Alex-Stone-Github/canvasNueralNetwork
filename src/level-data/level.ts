import { YellowBrick, Brick } from "../brick.js";

export function createLevel(): Brick[] {
    let bricks: Brick[] = [];
    for (let i = 0; i < 4; i ++) {
        bricks.push(new YellowBrick({x: 30 + i * 10, y:90}, {x:10, y:10}));
    }
    return bricks;
}