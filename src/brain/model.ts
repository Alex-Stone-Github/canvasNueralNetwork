import { Perceptron } from "./perceptron.js";

export class Model3 {
    private static readonly nHidenLayers: number = 16;
    private layer1: Perceptron[] = [];
    private layer2: Perceptron[] = [];
    private nin: number = 0;
    private nout: number = 0;
    public constructor(nin: number, nout: number) {
        for (let i = 0; i < Model3.nHidenLayers; i ++) {
            this.layer1.push(new Perceptron(nin));
        }
        for (let i = 0; i < nout; i ++) {
            this.layer2.push(new Perceptron(Model3.nHidenLayers));
        }
        this.nin = nin;
        this.nout = nout;
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
        return current;
    }
    public randomDropout(rate: number) {
        for (let p of this.layer1)
            p.randomDropout(rate);
        for (let p of this.layer2)
            p.randomDropout(rate);
    }
    public static copy(src: Model3): Model3 {
        let dst: Model3 = new Model3(src.nin, src.nout);
        for (let i = 0; i < Model3.nHidenLayers; i ++)
            dst.layer1[i] = Perceptron.copy(src.layer1[i]);
        for (let i = 0; i < src.nout; i ++)
            dst.layer2[i] = Perceptron.copy(src.layer2[i]);
        return dst;
    }
}
const ReLU = (x: number[]): number[] => x.map((val: number): number => {return Math.max(val, 0)});
