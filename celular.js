//Importación modulo 'moment' para manejar fechas y horas. 
const moment = require('moment'); 
//Importación de modulo 'lodash'
const object = require('lodash/fp/object');

const celular = {
    marca: 'iphone',
    modelo: 'iphone 11',
    procesador: 'A13 Bionic',
    capacidad: '128 GB',
    pantalla: 'Liquid Retina HD',
    fechaActualización: moment().format('DD-MM-YYYY')
}

module.exports = {celular}

