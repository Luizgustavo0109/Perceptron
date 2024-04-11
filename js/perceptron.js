// perceptron.js

function sign(num) {
    return num >= 0 ? 1 : -1
}

class Perceptron {
    weights = [0,0]

    lr = 0.1

    constructor() {
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[1] = random(-1, 1)
        }
    }

    guess(inputs) {
        let sum = 0

        for(let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i]
        }

        const output = sign(sum)
        return output
    }

    train(inputs, targt){
        const guess = this.guess(inputs)
        const error = targt - guess

        for(let i = 0; i < this.weights.length; i++){
            this.weights[i] += error * inputs[i] * this.lr
        }
    }
}
