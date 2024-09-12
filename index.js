//Importación objeto celular
const { celular: { marca, modelo, procesador, capacidad, pantalla, fechaActualización }, celular } = require('./celular');

const describirCelular = () => {
    const descripción = `Uno de los más queridos de los celulares de la marca ${marca},
es el mítico ${modelo}, el cual aún es una buena opción si tienes poco presupuesto.
Su procesador ${procesador}, con capacidad de memoria estandar de ${capacidad}, y 
una pantalla ${pantalla}, ofrece una buena relacióne Calidad y Precio. La última 
actualizacion de su sistema operativo fue en ${fechaActualización}.`;

    console.log(descripción);
}

describirCelular();

const copiaCelular = { ...celular, capacidad: '64 GB', modelo: 'iphone 12' }

const propiedadesCelular = Object.values(copiaCelular);

for (const atributocelular of propiedadesCelular) {
    console.log(atributocelular)
}

//Función que procesa datos  y acepta una función de callback
const procesarDatos = (datos, callback) =>  callback(datos);


//Función de flecha como callback que suma todos los numeros en el array 
const sumarNumeros = (numeros) => numeros.reduce((acc, num) => acc + num, 0);

//Lista de números a procesar 
const numeros = [1, 2, 3, 4, 5];

//Usamos la funcion procesarDatos con la función flecha como callback
const resultado = procesarDatos(numeros, (datos) => sumarNumeros(datos));
console.log('--------------Función callback---------------')
console.log(resultado); //imprime 15 