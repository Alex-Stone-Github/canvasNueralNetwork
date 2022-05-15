import { Vector2 } from "./struct.js";
import { drawRect, setFill } from "./render.js";
import { Brick } from "./brick.js";

export class Player {
    public static size: Vector2 = {x:10, y:10};
    public color: string;
    private position: Vector2;
    private velocity: Vector2;
    private oldP: Vector2;
    public constructor(pos: Vector2) {
        this.color = "red";
        this.position = pos;
        this.velocity = {x:0,y:0};
        this.oldP = {x:0,y:0};
    }
    public show(OFF: Vector2) {
        setFill(this.color);
        drawRect(this.position.x + OFF.x, this.position.y + OFF.y, Player.size.x, Player.size.y);
    }
    public update(DT: number, bricks: Brick[]) {
        this.velocity.y += 30 * DT;
        this.position.y += this.velocity.y * DT;
        if (this.isColiding(bricks)) {
            this.position.y = this.oldP.y;
            this.velocity.y = 0;
        }
        this.position.x += this.velocity.x * DT;
        if (this.isColiding(bricks)) {
            this.position.x = this.oldP.x;
            this.velocity.x = 0;
        }

        //abuse of a copy function
        this.oldP.x = this.position.x;
        this.oldP.y = this.position.y;
    }
    public isColiding(bricks: Brick[]): boolean {
        for (const brick of bricks) {
            if (this.position.x + Player.size.x > brick.position.x && this.position.x < brick.position.x + brick.size.x)
                if (this.position.y + Player.size.y > brick.position.y && this.position.y < brick.position.y + brick.size.y)
                    return true;
        }
        return false;
    }
}