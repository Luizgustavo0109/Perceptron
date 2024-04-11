// sketch.js
let perceptron

let points = new Array(100)

function setup() {
    createCanvas(480, 360)

    perceptron = new Perceptron()

    for(let i = 0; i < points.length; i++) {
        points[i] = new Point(random(-1, 1), random(-1, 1))
    }
}

function draw() {
    background(150,250,200)

    for(let i = 0; i < points.length; i++) {
        points[i].show()
    }

    noStroke();

    for(let i = 0; i < points.length; i++){
        const pt = points[i]

        const inputs = [pt.x, pt.y]
        const targt = pt.label
        const guess = perceptron.guess(inputs)

        if(guess == targt){
            fill(0, 255, 0)
        } else {
            fill(255, 0, 0)
        }

        ellipse(pt.getPixelX(), pt.getPixelY(), 15, 15)
    }

    drawLine()

    trainSinglePoint()
}

function drawLine(){
    stroke(0)
    line(0, height, width, 0)
}

let trainnigIndex = 0

function trainSinglePoint(){
    const pt = points[trainnigIndex]
    const inputs = [pt.x, pt.y]
    perceptron.tarin(inputs, pt.label)

    trainnigIndex++

    if(trainnigIndex == points.length) {
        trainnigIndex = 0
    }
}