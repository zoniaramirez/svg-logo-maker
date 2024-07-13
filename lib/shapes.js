class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
 
class Square extends Shape {
    render() {
        return `<rect x="60" y="35" width="175" height="175" fill="${this.color}" />`;
    }
}
 
class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };
 