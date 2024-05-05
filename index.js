const { registrarCita, mostrarCitas } = require('./operaciones');

const args = process.argv.slice(2);
const comando = args[0];

if (comando === 'registrar') {
    const nombre = args[1];
    const edad = args[2];
    const tipo = args[3];
    const color = args[4];
    const enfermedad = args[5];
    registrarCita(nombre, edad, tipo, color, enfermedad);
} else if (comando === 'leer') {
    mostrarCitas();
} else {
    console.log('COMANDO NO VALIDO. Debes usar "registrar" o "leer".');
}
