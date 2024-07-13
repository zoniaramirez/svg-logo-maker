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
  ]);

 // Save to logo.svg
 function writeToFile(svgContent) {
 fs.writeFileSync('logo.svg', svgContent);
 console.log('Generated logo.svg');
 };
