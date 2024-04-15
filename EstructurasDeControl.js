/*
Fecha y Hora de publicación: 3:00 am
Autores. Ing(Robert Carvajal Rodriguez) y Ing(Manuela Cardona)
Nombre del lenguaje utilizado: ECMASCRIPT 6.0
Versión del lenguaje utilizado: javascript 6.0
Universidad Tecnológica de Pereira: Programa de Ingeniería de Sistemas y Computación
*/

const prompt = require('prompt-sync')();
/*1. Adivina el Número [0, 100): Escribe un programa que genere un número aleatorio y pida 
al usuario que lo adivine. Si el usuario no acierta, indica si su número es demasiado 
alto o demasiado bajo.
 */

// Definición de la función AdivinaElNumero
function AdivinaElNumero() {
    // Generación de un número aleatorio entre 0 y 100 (ambos inclusive)
    let numero = Math.floor(Math.random() * 101);
    console.log(numero); // Imprime el número generado

    // Definición de la función UsuarioEntrada
    function UsuarioEntrada() { 
        // Solicita al usuario que ingrese un número entre 0 y 100
        let NumeroUsuario = prompt("Digita un número entre 0 y 100:");
        
        // Compara el número ingresado por el usuario con el número aleatorio
        if (NumeroUsuario == numero) {
            console.log("¡Felicidades!, lo conseguiste");
            return; // Finaliza la función si el número es correcto
        } else if (NumeroUsuario < numero) {
            console.log("Tu número es demasiado bajo, intenta de nuevo");
        } else {
            console.log("Tu número es demasiado alto, intenta de nuevo");      
        }
        // Llama recursivamente a la función UsuarioEntrada para seguir solicitando números
        UsuarioEntrada();
    } 

    // Inicia el proceso solicitando al usuario que ingrese un número
    UsuarioEntrada();
}


/*2. Calculadora de Factorial: Crea un programa que calcule el factorial de un número ingresado 
por el usuario. Utiliza tanto un ciclo for como un ciclo while para realizar el cálculo.
El factorial de un entero positivo n, el factorial de n o n factorial se define en principio 
como el producto de todos los números enteros positivos desde 1 hasta n.
 */

// Definición de la función CalculadoraDeFactorial
function CalculadoraDeFactorial() {
    // Solicita al usuario que ingrese un número
    let NumeroUsuario2 = prompt("Ingresa el número: ");
    let i = 1;

    // Verifica si el número ingresado es negativo
    if (NumeroUsuario2 < 0) {
        console.log("Ingresa un número válido, desde uno en adelante");
        CalculadoraDeFactorial(); // Llama recursivamente a la función para obtener un número válido
    }

    // Verifica si el número ingresado es 0 o 1 (casos especiales)
    if (NumeroUsuario2 == 1 || NumeroUsuario2 == 0) {
        console.log(`El factorial es 1`);
        return; // Finaliza la función si el número es 0 o 1
    }

    // Calcula el factorial del número utilizando un bucle while
    while (NumeroUsuario2 > 1) {
        i = NumeroUsuario2 * i;
        NumeroUsuario2 = NumeroUsuario2 - 1;
    }

    // Imprime el resultado del factorial
    console.log(`El factorial es ${i}`);
}


/*3. Contador de Vocales: Desarrolla un programa que cuente cuántas vocales
distintas hay en una frase proporcionada por el usuario y muestre las 
vocales encontradas.
 */
// Definición de la función ContarVocales
function ContarVocales() {
    // Solicita al usuario que escriba una frase
    let FraseUsuario = prompt("Escriba una frase: ");

    // Calcula el número de veces que aparece la letra "a" en la frase
    let NumeroVocalesA = (FraseUsuario.match(/[a]/gi) || []).length;
    // Calcula el número de veces que aparece la letra "e" en la frase
    let NumeroVocalesE = (FraseUsuario.match(/[e]/gi) || []).length;
    // Calcula el número de veces que aparece la letra "i" en la frase
    let NumeroVocalesI = (FraseUsuario.match(/[i]/gi) || []).length;
    // Calcula el número de veces que aparece la letra "o" en la frase
    let NumeroVocalesO = (FraseUsuario.match(/[o]/gi) || []).length;
    // Calcula el número de veces que aparece la letra "u" en la frase
    let NumeroVocalesU = (FraseUsuario.match(/[u]/gi) || []).length;

    // Imprime los resultados
    console.log(`"a" aparece ${NumeroVocalesA} veces`);
    console.log(`"e" aparece ${NumeroVocalesE} veces`);
    console.log(`"i" aparece ${NumeroVocalesI} veces`);
    console.log(`"o" aparece ${NumeroVocalesO} veces`);
    console.log(`"u" aparece ${NumeroVocalesU} veces`);
}

// Definición de la función menu
function menu() {
    // Bucle infinito para mostrar el menú continuamente
    while (true) {
        console.log("\nMenú:");
        console.log("1. Adivina el Número entre 0 y 100");
        console.log("2. Calculadora de Factorial");
        console.log("3. Contador de Vocales");
        console.log("4. Salir");

        // Solicita al usuario que seleccione una opción
        let opcion = prompt('Selecciona una opción: ');

        // Evalúa la opción seleccionada por el usuario
        switch (opcion) {
            case "1":
                AdivinaElNumero(); // Llama a la función para adivinar el número
                break;
            case "2":
                CalculadoraDeFactorial(); // Llama a la función para calcular el factorial
                break;
            case "3":
                ContarVocales(); // Llama a la función para contar las vocales
                break;
            case "4":
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




