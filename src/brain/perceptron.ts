export class Perceptron {
    public readonly ninputs: number;
    private weights: number[];
    private bias: number;
    public constructor(ninputs: number) {
        this.ninputs = ninputs;
        this.weights = new Array(this.ninputs);
        for (let i = 0; i < this.ninputs; i ++) {
            this.weights[i] = Math.random();
        }
        this.bias = Math.random();
    }
    public predict(inputs: number[]): number {
        let summation = this.bias;
        for (let i = 0; i < this.ninputs; i ++) {
            summation += inputs[i] * this.weights[i];
        }
        return summation;
    }
    public randomDropout(rate: number) {
        for (let i = 0; i < this.ninputs; i ++) {
            if (Math.random() < rate)
                this.weights[i] = Math.random();
        }
        if (Math.random() < rate)
            this.bias = Math.random();
    }
    public static copy(prev: Perceptron) {
        let newer: Perceptron = new Perceptron(prev.ninputs);
        newer.weights = prev.weights.slice();
        newer.bias = prev.bias;
        return newer;
    }
}