# Evaluación Modulo 6 sesión 3 
## Drilling Celular
### Instrucciones:
---

1. Comienza un nuevo proyecto con npm init, instalando los paquetes moment y lodash.
   
2. Revisa la documentación para saber cómo requerirlos en tu programa. Asegúrate de utilizar la palabra clave constant.
   
3. Crea un nuevo archivo llamado celular.js, que contenga y exporte un objeto. El objeto debe tener como contenido pares llave - valor de, por lo menos, cinco características de tu celular, más un sexto ítem que contenga una fecha generada por moment.
   
4. Importa el objeto en tu archivo index.js, utilizando la desestructuración de objetos.
   
5. Crea una función que muestre por pantalla la descripción de tu celular, utilizando template literals, y las variables recogidas del objeto importado desde el archivo celular.js.
   
6. Crea una copia del objeto en celular.js, y actualiza dos de sus propiedades utilizando el spread operator.
   
7. Escribe un ejemplo de función de callback (puedes utilizar las revisadas en el primer y segundo CUE), pero esta vez utilizando la sintaxis de función de flecha.

### Solución
---
1. Iniciamos el proyecto en la terminal de vs code con `npm init` e instalamos los paquetes moment y lodash con la siguiente linea:
   
   ```shell 
   npm install moment lodash
   ```
2. Revisamos la documentación e importamos los paquetes moment y lodash de la Para entornos de Trabajos CommonJS.
- Importación Modulo Moment: es una biblioteca de JavaScript para el manejo y manipulación de fechas y horas. Permite realizar operaciones comunes como formateo, parsing, comparación y cálculo de fechas de manera sencilla y legible.
  
    ```javascript
    const moment = require('moment'); 
    ```
- Importación Módulo lodash: Es una biblioteca de utilidades para JavaScript que proporciona una amplia gama de funciones que facilitan el manejo y la manipulación de datos.

    ```javascript
    const object = require('lodash/fp/object');
    ```

3. Creamos el archivo celular.js el cual contiene un objeto que describe un celular con cinco pares llave - valor. Más un sexto item que contiene una fecha generada por moment. Nuestro codigo se vería así:
- Objeto Celular con seis características:

    ```javascript
    const celular = {
        marca: 'iphone',
        modelo: 'iphone 11',
        procesador: 'A13 Bionic',
        capacidad: '128 GB',
        pantalla: 'Liquid Retina HD',
        fechaActualización: moment().format('DD-MM-YYYY')
    } 
    ```
- Luego exportamos nuestro objeto celular con la siguiente expresión: 
  
    ```javascript
    module.exports = {celular}
    ```
4. Importamos nuestro objeto celular utilizando destructuración de objetos:
- Importación de objeto Celular: 
  
    ```javascript 
    const {celular: {marca, modelo, procesador, capacidad, pantalla, fechaActualización}, celular} = require('./celular');
    ```
5. Creamos nuestra función de tipo flecha `describirCelular` la cual a traves de templates literals e interpolación crea una descripcion de nuestro celular  utilizando las variables obtenidas de la destructuración de objetos. 
- Función `describirCelular`:
  
    ```javascript
    const describirCelular = () => {
        const descripción = `Uno de los más queridos de los celulares de la marca ${marca},
    es el mítico ${modelo}, el cual aún es una buena opción si tienes poco presupuesto.
    Su procesador ${procesador}, con capacidad de memoria estandar de ${capacidad}, y 
    una pantalla ${pantalla}, ofrece una buena relacióne Calidad y Precio. La última 
    actualizacion de su sistema operativo fue en ${fechaActualización}.`;

        console.log(descripción);
    }
    ```
- llamada a la función:
    ```javascript
    describirCelular();
    ```
6. Creamos una copia del objeto celular a través de spread operator y actualizamos dos de sus propiedades.

- Copia de objeto celular: 
  
    ```javascript
    const copiaCelular = {...celular, capacidad: '64 GB', modelo: 'iphone 12'}
    ```
7. Ejemplo de Función de Callback con Función de Flecha
- En este ejemplo, demostramos cómo usar una función de flecha como callback en JavaScript.
- Función `procesarDatos`:
  - Descripción: Acepta una lista de datos y una función de callback. La función callback se ejecuta con los datos proporcionados.
  - Código:
    ```javascript
    const procesarDatos = (datos, callback) => callback(datos);

    ```
- Función de Flecha `sumarNumeros`:
  - Descripción: Calcula la suma de todos los números en un array utilizando el método reduce.
  - Código:
    ```javascript
    const sumarNumeros = (numeros) => numeros.reduce((acc, num) => acc + num, 0);
    ```
- Lista de Números:
  - Código:
    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    ```
- Uso de `procesarDatos` con la Función de Flecha como Callback:
  - Descripción: Pasamos la lista de números y una función de flecha como callback a `procesarDatos`. La función de flecha llama a `sumarNumeros` con los datos proporcionados.
  - Código: 
    ```javascript
    const resultado = procesarDatos(numeros, (datos) => sumarNumeros(datos));
    console.log('--------------Función callback---------------');
    console.log(resultado); // Imprime: 15
    ```
- En este código, `procesarDatos` recibe la lista `numeros` y la función de flecha `(datos) => sumarNumeros(datos)` como parámetros. La función de flecha se usa para sumar todos los números del array y se imprime el resultado.






