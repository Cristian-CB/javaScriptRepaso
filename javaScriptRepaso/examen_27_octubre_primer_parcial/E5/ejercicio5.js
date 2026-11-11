// ============================================================
//  EJERCICIO 5 - Encuentra y corrige el error [1,5 puntos]
//  Para cada fragmento:
//    · Di qué imprime / qué ocurre realmente
//    · Explica por qué está mal
//    · Escribe la línea o líneas corregidas en el espacio indicado
// ============================================================


// — Frag. A) [0,5 puntos] ———————————————————————————————
// Objetivo: crear 3 funciones que devuelvan 0, 1 y 2 respectivamente.

function crearFunciones() {
    const fns = [];
    for (let i = 0; i < 3; i++) {
        fns.push(() => i);
    }
    return fns;
}

const fns = crearFunciones();
console.log(fns[0]()); // Se espera 0
console.log(fns[1]()); // Se espera 1
console.log(fns[2]()); // Se espera 2

// ¿Qué imprime realmente?
//   fns[0]() → _____3______
//   fns[1]() → ____   3_______
//   fns[2]() → ______3_____
// ¿Por qué?
//fns.push(() => i); --> esto mete dentro () y el valor i eso hace 
// q i se sobreescriba al valor maximo impusto en el for  

// Corrección (escribe la línea que hay que cambiar y cómo):

// cambiando el tipo de variable de var a let. solucion 1 
// en vez de fns.push(() => i); --> fns.push( i); para q solo añada al array i y cambiando los conole.logs por console.log(fns[2]); sin parentesis .solucion2




//   ######################################################
// — Frag. B) [0,5 puntos] ———————————————————————————————
// Objetivo: filtrar solo los números mayores que 2.

const numeros = [1, 2, 3, 4, 5];
const mayores = numeros.filter(n => {
    n > 2
});
console.log(mayores); // Se espera [3, 4, 5]

// ¿Qué devuelve realmente? ____[]_______
// ¿Por qué? _____________________falta el return__________________________
// Corrección:
//   ____________añadir return___________________________________


// — Frag. C) [0,5 puntos] ———————————————————————————————
// Objetivo: sumar todos los salarios. Debe devolver 0 si el array está vacío.

const conDatos = [2800, 3200, 2600];
const sinDatos = [];

const total = conDatos.reduce((acc, sal) => acc + sal);
const totalVacio = sinDatos.reduce((acc, sal) => acc + sal);


// conDatos funciona: 8600
// sinDatos: se espera 0

// ¿Qué ocurre con sinDatos? _____error______
// ¿Por qué? ____________________que es un array vacio y reduce intenta iterar pero como no hay valores da el error de array vacio___________________________
// Corrección:
//   ___________________añadir valores al array____________________________
