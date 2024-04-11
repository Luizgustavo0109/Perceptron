// point.js

class Point {
    x = 0
    y = 0
    label = 0

    constructor(x, y) {
        this.x = x
        this.y = y
        this.label = this.getLabel()
    }

    getLabel() {
        if(this.x > this.y) {
            return 1
        } else {
            return -1
        }
    }

    getPixelX() {
        const px = map(this.x, -1, 1, 0, width)
        return px
    }

    getPixelY() {
        const py = map(this.y, -1, 1, height, 0)
        return py
    }

    show() {
        strokeWeight(2)

        if(this.label === 1) {
            fill(0) 
            stroke(250)
        } else {
            fill(250)
            stroke(0)
        }

        const px = this.getPixelX()
        const py = this.getPixelY()

        ellipse(px, py, 20, 20)
    }
}
