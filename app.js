
require("colors");
const { number } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log( process.argv );
console.log( argv );


// const base = 3;

crearArchivo( argv.b , argv.l)
    .then( done => console.log(done) )
    .catch( err => console.log( err) );


console.log("finalizó".red);
// const [, , arg3] = process.argv;
// const [ , base = 5] = arg3.split('=');

// console.log(base);


// crearArchivo(base)
    // .then( done => console.log(done) )
    // .catch( err => console.log( err) );