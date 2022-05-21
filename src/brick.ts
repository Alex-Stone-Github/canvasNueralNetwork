import { drawRect, setFill } from "./render.js";
import { Vector2 } from "./struct.js";

export interface Brick {
    size: Vector2;
    position: Vector2;
    show(OFF: Vector2): void;
    checkIntersection(point: Vector2): boolean;
}
export class YellowBrick implements Brick {
    public size: Vector2;
    public position: Vector2;
    public constructor(p: Vector2, s: Vector2) {
        this.position = p;
        this.size = s;
    }
    public show(OFF: Vector2) {
        setFill("yellow");
        drawRect(this.position.x + OFF.x, this.position.y + OFF.y, this.size.x, this.size.y);
    }
    public checkIntersection(point: Vector2): boolean {
        return point.x > this.position.x && this.position.x + this.size.x > point.x &&
            point.y > this.position.y && this.position.y + this.size.y > point.y;
    }
}