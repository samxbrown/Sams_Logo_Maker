const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes");

const { writeFile } = require("fs/promises");
const SVG = require("./svg");

class CLI {
    run() {
        return inquirer.prompt([
            {
                type: "input",
                name: "text",
                message: "TEXT: Gimme (3) Characters:",
            },
            {
                type: "input",
                name: "textColor",
                message: "TEXT COLOR: Gimme a color for the text (OR a hexadecimal number):",
            },
            {
                type: "input",
                name: "shapeColor",
                message: "SHAPE COLOR: Gimme a color for the shape (OR a hexadecimal number):",
            },
            {
                type: "list",
                name: "shapeType",
                message: "Choose which shape suits your fancy?",
                choices: ["Circle", "Square", "Triangle"],
            },
        ]).then(({
            text, textColor, shapeColor, shapeType, }) => {
            let shape;
            switch (shapeType) {
                case "Circle":
                    shape = new Circle();
                    break;

                case "Square":
                    shape = new Square();
                    break;

                default:
                    shape = new Triangle();
                    break;
            }
            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);

            return writeFile("logo.svg", svg.render());

        })
            .then(() => {
                console.log("Generated logo.svg");
            })
            .catch((error) => {
                console.log(error);
                console.log("Something's not right here...");
            });
    }
};

module.exports = CLI;