const fs = require('fs');

const citasPath = './citas.json';

function registrarCita(nombre, edad, tipo, color, enfermedad) {
    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };

    fs.readFile(citasPath, 'utf8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo de citas:', error);
            return;
        }

        const citas = JSON.parse(data);
        citas.push(nuevaCita);

        fs.writeFile(citasPath, JSON.stringify(citas, null, 2), err => {
            if (error) {
                console.error('Error al escribir en el archivo de citas:', error);
                return;
            }
            console.log('Cita registrada exitosamente.');
        });
    });
}

function mostrarCitas() {
    fs.readFile(citasPath, 'utf8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo de citas:', error);
            return;
        }

        const citas = JSON.parse(data);
        console.log('Citas registradas:');
        citas.forEach((cita, index) => {
            console.log(`Cita ${index + 1}:`);
            console.log(`Nombre: ${cita.nombre}`);
            console.log(`Edad: ${cita.edad}`);
            console.log(`Tipo: ${cita.tipo}`);
            console.log(`Color: ${cita.color}`);
            console.log(`Enfermedad: ${cita.enfermedad}`);
            console.log('-----------------------------');
        });
    });
}

module.exports = { registrarCita, mostrarCitas };
