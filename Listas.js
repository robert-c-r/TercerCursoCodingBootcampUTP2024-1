/*
Fecha y Hora de publicación: 3:00 am
Autores. Ing(Robert Carvajal Rodriguez) y Ing(Manuela Cardona)
Nombre del lenguaje utilizado: ECMASCRIPT 6.0
Versión del lenguaje utilizado: javascript 6.0
Universidad Tecnológica de Pereira: Programa de Ingeniería de Sistemas y Computación
*/

/* 1. Mayores y Menores: Dada una lista de números, encuentra el número 
más grande y el más pequeño en la lista.
 */

// Definición de la lista de números
let lista1 = [5, 12, 3, 8, 1];

// Función MenorMayor que encuentra el número menor y mayor en la lista
function MenorMayor(lista1) {
    // Inicialización de las variables menor y mayor con el primer elemento de la lista
    let menor = lista1[0];
    let mayor = lista1[0];

    // Recorremos cada número en la lista
    for (numero of lista1) {
        // Actualizamos el valor de 'menor' si encontramos un número menor
        menor = menor < numero ? menor : numero;
        // Actualizamos el valor de 'mayor' si encontramos un número mayor
        mayor = mayor > numero ? mayor : numero; 
    }

    // Imprimimos los resultados
    console.log("Ejercicio número 1\n");
    console.log(`La lista de números es: [${lista1}]`);
    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}\n`);
}

// Llamamos a la función MenorMayor con la lista1 como argumento
let numeros = MenorMayor(lista1);


/* 2. Concatenación de Listas: Crea dos listas con diferentes 
elementos, luego combínalas en una sola lista y ordénalos.
 */

// Definición de la función listasConcatenadas
function listasConcatenadas() {
    // Creación de dos listas: list1 y list2
    let list1 = [4, 9, 2];
    let list2 = [7, 5, 1];

    // Concatenación de las dos listas en una nueva lista llamada list3
    let list3 = list1.concat(list2);

    // Ordenamiento de la lista3 en orden ascendente
    list3.sort();

    // Impresión de los resultados
    console.log("Ejercicio número 2\n");
    console.log(list3);
    console.log("\n");
}

// Llamada a la función listasConcatenadas
listasConcatenadas();


/* 3. Inversión de una Lista: Escribe un programa que invierta los 
elementos de una Lista.
 */
// Definición de la función inversionDeUnaLista
function inversionDeUnaLista() {
    // Creación de una lista llamada listaFinal con los números [3, 6, 9, 12, 15]
    let listaFinal = [3, 6, 9, 12, 15];

    // Impresión del mensaje de inicio
    console.log("Ejercicio número 3\n");

    // Impresión de la lista original
    console.log("listaFinal:", listaFinal);

    // Inversión de la lista utilizando el método .reverse()
    let reversed = listaFinal.reverse();

    // Impresión de la lista invertida
    console.log("reversed:", reversed);
}

// Llamada a la función inversionDeUnaLista
inversionDeUnaLista();




