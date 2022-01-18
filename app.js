const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')

.option('b', {
    alias: 'base',
    demandOption: true,
    type: 'number'
}).check((argv, options) => {
    if (isNaN(argv.base)) {
      throw new Error("la base tiene que ser númerica.")
    } 
      return true // tell Yargs that the arguments passed the check
    
  })
.argv;

/* const base = 3; */
console.log(argv);

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err));