// ============================================================
//  EJERCICIO 1 - Misiones espaciales [1,5 puntos]
//  Escribe tu solución debajo de cada apartado.
//  Solo se permite usar métodos de array. No uses bucles for/while.
// ============================================================

const misiones = [
    {nombre: "Apollo 11", pais: "EEUU", anio: 1969, exitosa: true, tripulacion: 3},
    {nombre: "Sputnik 1", pais: "URSS", anio: 1957, exitosa: true, tripulacion: 0},
    {nombre: "Mars Climate", pais: "EEUU", anio: 1998, exitosa: false, tripulacion: 0},
    {nombre: "Vostok 1", pais: "URSS", anio: 1961, exitosa: true, tripulacion: 1},
    {nombre: "Challenger", pais: "EEUU", anio: 1986, exitosa: false, tripulacion: 7},
    {nombre: "Artemis I", pais: "EEUU", anio: 2022, exitosa: true, tripulacion: 0},
    {nombre: "Luna 9", pais: "URSS", anio: 1966, exitosa: true, tripulacion: 0},
];


// a) [0,5 puntos] ————————————————————————————————
// Filtra las misiones exitosas y devuelve solo sus nombres.

const misionesExitosas = misiones.filter(elemento => elemento.exitosa).map(elemento =>  {return {nombre : elemento.nombre}})
console.log(misionesExitosas);



// b) [0,5 puntos] ————————————————————————————————
// ¿Cuántos astronautas en total participaron en misiones exitosas?


const total = misiones.reduce((contador,elemento)=>( contador+=elemento.tripulacion),0)
console.log(total);


// c) [0,5 puntos] ————————————————————————————————
// Encuentra la misión más reciente de toda la lista.
// Usa reduce(). No uses sort().

/* 6 BUSQUEDA DE ELEMENTO MAYOR*/

const reciente = misiones.reduce((mayor, actual) => {
    if (actual.fecha > mayor.fecha) {
        return actual;
    } else {
        return mayor;
    }
});

console.log(reciente);


const numeros = [5, 2, 8, 1, 4];

const ordenados = numeros.reduce((acumulador, actual) => {

    acumulador.push(actual);

    acumulador.sort((a, b) => a - b);

    return acumulador;

}, []);

console.log(ordenados);


const empleadosOrdenados = empleados.reduce((acumulador, actual) => {

    acumulador.push(actual);

    acumulador.sort((a, b) => a.salario - b.salario);

    return acumulador;

}, []);


