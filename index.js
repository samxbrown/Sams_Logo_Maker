const filesystem = require();
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes");

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        // return
        return ''
    }
    setTextElement(text, color) {
        this.textElement = ''
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
};

// Array of questions for user input.
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },

];