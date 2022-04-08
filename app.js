/* app.js */

// Opção 1: importe todo o modulo shape-area.js aqui

const { circleArea , squareArea } = require('./shape-area');
const raioinput = process.argv[2];
const ladoinput = process.argv[3];

//Use os métodos importados circleArea() e squareArea() aqui

const valorcircle = circleArea(raioinput);
const valorsquare = squareArea(ladoinput);

console.log(`${ladoinput} Área do circulo = ${valorcircle} `);

console.log(`${ladoinput} Lado do circulo = ${valorsquare} `);
//Imprima os valores de areaOfCircle e areaOfSquare aqui