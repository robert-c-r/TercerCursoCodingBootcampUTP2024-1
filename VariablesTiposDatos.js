/*
Fecha y Hora de publicación: 3:00 am
Autores. Ing(Robert Carvajal Rodriguez) y Ing(Manuela Cardona)
Nombre del lenguaje utilizado: ECMASCRIPT 6.0
Versión del lenguaje utilizado: javascript 6.0
Universidad Tecnológica de Pereira: Programa de Ingeniería de Sistemas y Computación
*/

/*1. Conversor de Temperatura: Escribe un programa que convierte la 
temperatura de grados Celsius a Fahrenheit. El usuario debe poder 
ingresar la temperatura en grados celsius. Teniendo en cuenta que la 
fórmula para convertir de celsius a fahrenheit es (9/5 * C°) + 32. */

//una biblioteca de Node.js que permite leer la entrada del usuario desde la línea de comandos.
const prompt = require('prompt-sync')();

// Definición de la función ConversorDeTemperatura
function ConversorDeTemperatura() {
    // Solicita al usuario que ingrese los grados Celsius
    let temperatura = prompt('Ingresa los grados Celsius para convertirlos a Fahrenheit: ');

    // Calcula la conversión de Celsius a Fahrenheit
    let respuesta = ((9/5 * temperatura) + 32);

    // Imprime el resultado de la conversión
    console.log(`${temperatura}°C son ${respuesta} grados Fahrenheit`);
}



/*2. Calculadora de IMC: Crea un programa que calcule el Índice de Masa Corporal 
(IMC) a partir del peso (en kilogramos) y la altura (en metros) ingresados por 
el usuario. Su fórmula es = Peso/(Altura)^2
*/

// Definición de la función CalculadoraDeImc
function CalculadoraDeImc() {
    // Solicita al usuario que ingrese su peso en kilogramos
    let peso = prompt('Ingresa tu peso en kilogramos: ');

    // Solicita al usuario que ingrese su altura en metros
    let altura = prompt('Ingresa tu altura en metros: ');

    // Calcula el índice de masa corporal (IMC)
    let respuesta2 = (peso / (altura ** 2));

    // Imprime el resultado del IMC
    console.log(`Tu índice de masa corporal es: ${respuesta2}`);
}


/*3. Generador de Nombre de Usuario: Solicita al usuario su nombre, apellido y año de 
nacimiento, y genera un nombre de usuario combinándolos (por ejemplo, "AnaSmith1990").
 */

// Definición de la función GeneradorNombreUsuario
function GeneradorNombreUsuario() {
    // Solicita al usuario que ingrese su nombre
    let nombre = prompt('Ingresa tu nombre: ');

    // Solicita al usuario que ingrese su apellido
    let apellido = prompt('Ingresa tu apellido: ');

    // Solicita al usuario que ingrese su año de nacimiento
    let AñoDeNacimiento = prompt('Ingresa tu año de nacimiento: ');

    // Imprime el nuevo nombre de usuario generado
    console.log(`Tu nuevo nombre de usuario es: ${nombre}${apellido}${AñoDeNacimiento}`);
}



/*4. Función Fibonacci (con ciclos): Implementa una función que calcule el n-ésimo número de 
Fibonacci ingresado por el usuario.
La serie de Fibonacci es una secuencia de números en la que cada número es la suma de los 
dos anteriores. La secuencia comienza con los números 0 y 1, y los siguientes números se generan 
sumando los dos números anteriores. La secuencia de Fibonacci se ve así: 0 1 1 2 3 5 8 13 21 …
*/

// Definición de la función SerieFibonacci
function SerieFibonacci() {
    // Solicita al usuario que ingrese un número
    let numero = prompt('Ingresa un número: ');

    // Inicialización de variables para los dos primeros números en la serie de Fibonacci
    let x = 0;
    let y = 1;

    // Generación de la serie de Fibonacci hasta el número ingresado
    for (let i = 0; i < numero; i++) {
        let z = x + y;
        x = y;
        y = z;
    }

    // Imprime el número ingresado y el valor correspondiente en la serie de Fibonacci
    console.log(`Número ingresado: ${numero}`);
    console.log(`Valor en la serie de Fibonacci: ${x}`);
}


// Definición de la función menu
function menu() {
    // Bucle infinito para mostrar el menú continuamente
    while (true) {
        console.log("\nMenú:");
        console.log("1. Conversor de temperatura de grados Celsius a Fahrenheit");
        console.log("2. Calculadora de IMC");
        console.log("3. Generador de Nombre de Usuario");
        console.log("4. Función Fibonacci");
        console.log("5. Salir");

        // Solicita al usuario que seleccione una opción
        let opcion = prompt('Selecciona una opción: ');

        // Evalúa la opción seleccionada por el usuario
        switch (opcion) {
            case "1":
                ConversorDeTemperatura(); // Llama a la función para convertir temperatura
                break;
            case "2":
                CalculadoraDeImc(); // Llama a la función para calcular IMC
                break;
            case "3":
                GeneradorNombreUsuario(); // Llama a la función para generar nombre de usuario
                break;
            case "4":
                SerieFibonacci(); // Llama a la función para calcular serie de Fibonacci
                break;
            case "5":
                console.log("¡Hasta luego!"); // Mensaje de despedida
                return; // Finaliza la función y sale del bucle
            default:
                console.log("La opción ingresada no es correcta"); // Mensaje de opción inválida
                break;
        }
    }
}

// Llama a la función menu para iniciar el programa
menu();

