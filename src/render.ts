const canvas: HTMLCanvasElement = document.getElementById("main") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

export function setFill(color: string) {
    context.fillStyle = color;
}
export function drawRect(x: number, y: number, w: number, h: number) {
    context.fillRect(x, y, w, h);
}