const separator = () => console.log("\n\n");

/*
*
* EJERCICIOS BUCLES:
*  - MAP
*  - FOREACH
*  - FILTER
*  - REDUCE
*
* */


// ============================================================
//  EJERCICIOS
// ============================================================


/*
 * 1. Tienes el siguiente array de temperaturas en Celsius registradas
 *    durante una semana:
 *
 *    const temperaturas = [22, 35, 18, 40, 28, 15, 33]; // Estas temperaturas son en Celsius
 *
 *    - Usa map para crear un nuevo array con las temperaturas convertidas
 *      a Fahrenheit. La fórmula es: (celsius * 9/5) + 32
 *    - Usa filter para obtener solo las temperaturas (en Celsius) que
 *      superen los 30 grados.
 *    - Usa forEach para mostrar por consola cada temperatura en Celsius
 *      con el mensaje: "Día X: 22°C" (donde X es el número del día, empezando en 1).
 *
 * */

const temperaturas = [22, 35, 18, 40, 28, 15, 33];
// const tFahrenheit = temperaturas.map(item => {
//     return (item * 9/5) + 32
// })
const tFahrenheit = temperaturas.map(item => (item * 9 / 5) + 32);
console.log(tFahrenheit);

// const tUpCelcius = temperaturas.filter(item => {
//     return item > 30;
// })
const tUpCelcius = temperaturas.filter(item => item > 30);
console.log(tUpCelcius);

temperaturas.forEach((item, index) => {
    console.log(`Día ${(index + 1)}: ${item}°C`);
})
separator()
separator()

/*
 * 2. Tienes el siguiente array con los productos de un carrito de compra:
 *
 *    const carrito = [
 *      { nombre: "Camiseta",   precio: 19.99, cantidad: 3 },
 *      { nombre: "Pantalón",   precio: 49.99, cantidad: 1 },
 *      { nombre: "Zapatillas", precio: 89.99, cantidad: 2 },
 *      { nombre: "Calcetines", precio: 4.99,  cantidad: 5 },
 *      { nombre: "Gorra",      precio: 14.99, cantidad: 1 },
 *    ];
 *
 *    - Usa map para crear un nuevo array donde cada producto tenga
 *      una propiedad extra "total" con el resultado de precio * cantidad.
 *    - Usa reduce para calcular el precio total del carrito sumando
 *      el precio * cantidad de cada producto.
 *    - Usa filter para obtener solo los productos cuyo precio unitario
 *      sea menor de 20€.
 * */

const carrito = [
    {nombre: "Camiseta", precio: 19.99, cantidad: 3},
    {nombre: "Pantalón", precio: 49.99, cantidad: 1},
    {nombre: "Zapatillas", precio: 89.99, cantidad: 2},
    {nombre: "Calcetines", precio: 4.99, cantidad: 5},
    {nombre: "Gorra", precio: 14.99, cantidad: 1},
];

// const carritoConTotal = carrito.map(item => {
//     return {
//         nombre: item.nombre,
//         precio: item.precio,
//         cantidad: item.cantidad,
//         total: Number((item.precio * item.cantidad).toFixed(2)),
//     }
// })
/*
* ...parametros => añadir de 0 a n elementos
* {...productos} => {nombre: item.nombre, precio: item.precio, cantidad: item.cantidad,}
*
* */
const carritoConTotal = carrito.map(item => {
    return {
        ...item,
        total: Number((item.precio * item.cantidad).toFixed(2)),
    }
})
console.log(carritoConTotal);

// const sumaCarrito = carritoConTotal.reduce((acum, item) => {return acum + item.total}, 0)
const sumaCarrito = carritoConTotal.reduce((acum, item) => acum + item.total, 0)
console.log(sumaCarrito);

const precioMenorA20 = carrito.filter(item => item.precio <= 20);
console.log(precioMenorA20);

separator()
separator()
/*
 * 3. Tienes el siguiente array con los jugadores de un equipo de fútbol:
 *
 *    const jugadores = [
 *      { nombre: "Messi",    goles: 30, posicion: "Delantero" },
 *      { nombre: "Busquets", goles: 2,  posicion: "Centrocampista" },
 *      { nombre: "Piqué",    goles: 5,  posicion: "Defensa" },
 *      { nombre: "Modric", goles: 10, posicion: "Centrocampista" },
 *      { nombre: "Mbappe",     goles: 28,  posicion: "Delantero" },
 *      { nombre: "Lamine",    goles: 4,  posicion: "Centrocampista" },
 *    ];
 *
 *    - Usa filter para obtener solo los jugadores que jueguen de "Delantero".
 *    - Usa reduce para calcular el total de goles de todo el equipo.
 *    - Usa map para crear un nuevo array con solo los nombres de los jugadores
 *      y sus goles en formato: "Messi - 30 goles".
 * */
const jugadores = [
    {nombre: "Messi", goles: 30, posicion: "Delantero"},
    {nombre: "Busquets", goles: 2, posicion: "Centrocampista"},
    {nombre: "Piqué", goles: 5, posicion: "Defensa"},
    {nombre: "Modric", goles: 10, posicion: "Centrocampista"},
    {nombre: "Mbappe", goles: 28, posicion: "Delantero"},
    {nombre: "Lamine", goles: 4, posicion: "Centrocampista"},
];

const delanteros = jugadores.filter(item => item.posicion === "Delantero");
const golesTotal = jugadores.reduce((acum, item) => acum + item.goles, 0)
const jugad = jugadores.map(item => `${item.nombre} - ${item.goles} goles`);

console.log(delanteros);
console.log(golesTotal);
console.log(jugad);
jugad.forEach((item) => console.log(item));

separator()
separator()

/*
 * 4. Tienes el siguiente array con las calificaciones de varios alumnos:
 *
 *    const alumnos = [
 *      { nombre: "Ana",    nota: 8.5 },
 *      { nombre: "Carlos", nota: 4.2 },
 *      { nombre: "Lucía",  nota: 6.0 },
 *      { nombre: "Pedro",  nota: 3.8 },
 *      { nombre: "Sara",   nota: 9.1 },
 *      { nombre: "Diego",  nota: 5.0 },
 *    ];
 *
 *    - Usa filter para obtener solo los alumnos aprobados (nota >= 5).
 *    - Usa map para añadir a cada alumno una propiedad "estado" con el
 *      valor "Aprobado" o "Suspenso" según su nota.
 *    - Usa reduce para calcular la nota media de toda la clase.
 *    - Usa forEach para mostrar por consola el resultado de cada alumno:
 *      "Ana → 8.50 (APROBADO)" si aprobó o "Carlos → 4.20 (SUSPENSO)" si suspendió.
 * */
const alumnos = [
    {nombre: "Ana", nota: 8.5},
    {nombre: "Carlos", nota: 4.2},
    {nombre: "Lucía", nota: 6.0},
    {nombre: "Pedro", nota: 3.8},
    {nombre: "Sara", nota: 9.1},
    {nombre: "Diego", nota: 5.0},
];

console.log(alumnos.filter(alumno => alumno.nota >= 5))
const alumnosAprobados = alumnos.map(alumno => {
    return {
        ...alumno,
        estado: alumno.nota >= 5 ? "Aprobado" : "Suspenso"
    }
})
console.log(alumnosAprobados);

const sumaNotas = alumnos.reduce((acum, alumno) => acum + alumno.nota, 0)
console.log("Media de la clase: ", (sumaNotas / alumnos.length).toFixed(2));

alumnos.forEach(alumno => {
    let haAprobado = alumno.nota >= 5 ? 'APROBADO' : 'SUSPENSO'
    console.log(`${alumno.nombre} → ${alumno.nota} (${haAprobado})`)
})
separator()
separator()
/*
 * 5. Tienes el siguiente array con las ventas mensuales de una empresa:
 *
 *    const ventas = [
 *      { mes: "Enero",      importe: 12500 },
 *      { mes: "Febrero",    importe: 9800  },
 *      { mes: "Marzo",      importe: 15200 },
 *      { mes: "Abril",      importe: 7300  },
 *      { mes: "Mayo",       importe: 18900 },
 *      { mes: "Junio",      importe: 11400 },
 *    ];
 *
 *    - Usa reduce para calcular el total de ventas del semestre.
 *    - Usa filter para obtener los meses en los que las ventas
 *      superaron los 12.000€.
 *    - Usa map para crear un nuevo array donde el importe de cada mes
 *      tenga aplicado un incremento del 5% (previsión para el año siguiente).
 *    - Usa forEach para mostrar por consola el informe de cada mes:
 *      "Enero: 12.500€".
 * */

const ventas = [
    {mes: "Enero", importe: 12500},
    {mes: "Febrero", importe: 9800},
    {mes: "Marzo", importe: 15200},
    {mes: "Abril", importe: 7300},
    {mes: "Mayo", importe: 18900},
    {mes: "Junio", importe: 11400},
];
console.log(ventas.reduce((acum, venta) => acum + venta.importe, 0))
console.log(ventas.filter(venta => venta.importe > 12000))

const incremento = ventas.map(venta => {
    return {
        mes: venta.mes,
        importe: venta.importe * 1.05,
    }
})
console.log(incremento);

ventas.forEach(venta => console.log(`${venta.mes}: ${venta.importe}€`));
