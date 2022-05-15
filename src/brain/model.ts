import { Perceptron } from "./perceptron.js";

export class Model3 {
    public static Architecture = [
        10,
        20,
        // there is also another layer with nouts
    ];
    private layer1: Perceptron[] = [];
    private layer2: Perceptron[] = [];
    private layer3: Perceptron[] = [];
    public constructor(nin: number, nout: number) {
        for (let i = 0; i < Model3.Architecture[0]; i ++) {
            this.layer1.push(new Perceptron(nin))
        }
        for (let i = 0; i < Model3.Architecture[1]; i ++) {
            this.layer2.push(new Perceptron(Model3.Architecture[0]))
        }
        for (let i = 0; i < nout; i ++) {
            this.layer3.push(new Perceptron(Model3.Architecture[1]))
        }
    }
    public predict(inputs: number[]): number[] {
        let current: number[] = [];
        for (let i = 0; i < this.layer1.length; i ++) {
            current.push(this.layer1[i].predict(inputs))
        }
        inputs = current.slice();current = [];


        for (let i = 0; i < this.layer2.length; i ++) {
            current.push(this.layer2[i].predict(inputs))
        }
        inputs = current.slice();current = [];

        for (let i = 0; i < this.layer3.length; i ++) {
            current.push(this.layer3[i].predict(inputs))
        }
        return current;
    }
    public randomDropout() {}
    public static copy() {}
}