const Shape = require('./shapes');

describe('Shape', () =>  {
    describe ('Circle', () => {
        it ('renders a circle 300x200 pixels', () => {
            const shape = new Shape.Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
        });
    });
    describe ('Square', () => {
        it ('renders a square 300x200 pixels', () => {
            const shape = new Shape.Square();
            shape.setColor("red");
            expect(shape.render()).toEqual('<rect x="0" y="0" width="300" height="200" fill="red" />');
        });
    });
    
    describe('Triangle', () => {
        it('renders a triangle fitting within 300x200 pixels', () => {
            const shape = new Shape.Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="blue" />');
        });
    });
});

