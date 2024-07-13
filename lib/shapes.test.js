const Shape = require('./shapes');

describe('Shape', () =>  {
    describe ('Circle', () => {
        it ('renders a circle 300x200 pixels', () => {
            const shape = new Shape.Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
        });
    });


});

