const argv = require('yargs')
    .option({
        'b': {
            alias: 'base',
            type: 'number',
            default: 5,
            describe: 'es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'alias',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe: 'sirve para mostrar los valor por consola'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;