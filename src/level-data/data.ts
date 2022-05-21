import { YellowBrick, Brick } from "../brick.js";
import { Vector2 } from "../struct.js";

/*
This class is a bit confusing, so here is an explanation.
Basically, we need a way to convert our map into something a nueral network can understand, so
that is what this special class does. It converts some level data into a number[] that can be
read by my model3 class.
*/
class LevelAnalyzer {
    private stride: Vector2;
    private level: Brick[]; // dear god, I hope this is stored as a &number[]
    private span: Vector2;
    constructor(stride: Vector2, span: Vector2, level: Brick[]) {
        this.stride = stride;
        this.level = level;
        this.span = span;
    }
    generateView(origin: Vector2): number[] {
        let visualization: number[] = [];
        // this relies on checkintersection
        for (let x = 0; x < this.span.x; x++) {
            for (let y = 0; y < this.span.y; y++) {
                // these can be simplified as origin + mapping of x between -halfmax and +halfmax
                let actualX: number = origin.x + (x * this.stride.x) - (this.span.x * this.stride.x);
                let actualY: number = origin.y + (y * this.stride.y) - (this.span.y * this.stride.y);
                let containsBrick: boolean = false;
                for (const brick of this.level) {
                    if (brick.checkIntersection({x:actualX,y:actualY})) {
                        containsBrick = true;
                    }
                }
                visualization.push(containsBrick ? 1: 0);
            }
        }
        return visualization;
    }
}