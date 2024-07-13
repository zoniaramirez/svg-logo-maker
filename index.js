const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
    },
  ])
  .then(answers => {
    // function that takes the answers and creates an SVG content
    const svgContent = createSVG(answers);
    writeToFile(svgContent);
  });

 // Save to logo.svg
 function writeToFile(svgContent) {
 fs.writeFileSync('logo.svg', svgContent);
 console.log('Generated logo.svg');
 };

//createSVG function 
function createSVG(answers) {
    const { shape, shapeColor, text, textColor } = answers;
    let shapeSvg = '';

    switch (shape) {
        case 'circle':
            shapeSvg = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;// Prevents the execution from falling through to the next case
            
        case 'square':
            shapeSvg = `<rect x="0" y="0" width="300" height="200" fill="${shapeColor}" />`;
            break;
            
        case 'triangle':
            shapeSvg = `<polygon points="0,200 300,200 150,0" fill="${shapeColor}" />`;
            break;    
    }

  // Adding text to the SVG. Adjust 'y' value as needed to position the text appropriately
  const textSvg = `<text x="150" y="125" fill="${textColor}" text-anchor="middle" font-size="60">${text}</text>`;

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSvg}${textSvg}</svg>`;
}