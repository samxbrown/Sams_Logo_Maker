const { Circle, Square, Triangle } = require("./shapes")

// Circle Shape
describe('Circle', () => {
    test('renders correcly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual()
    });
});

// Square Shape
describe('Square', () => {
    test('renders correcly', () => {
        const shape = new Square();
        var color = ('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual()
    });
});

// Triangle Shape
describe('Triangle', () => {
    test('renders correcly', () => {
        const shape = new Triangle();
        var color = ('orange')
        shape.setColor(color);
        expect(shape.render()).toEqual()
    });
});