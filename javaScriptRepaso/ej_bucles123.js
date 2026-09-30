/*
 * 1. Tienes el siguiente array de temperaturas en Celsius registradas
 *    durante una semana:
 *
 *    const temperaturas = [22, 35, 18, 40, 28, 15, 33];
 *
 *    - Usa map para crear un nuevo array con las temperaturas convertidas
 *      a Fahrenheit. La fórmula es: (celsius * 9/5) + 32
 *
 *    - Usa filter para obtener solo las temperaturas (en Celsius) que
 *      superen los 30 grados.
 *
 *    - Usa forEach para mostrar por consola cada temperatura en Celsius
 *      con el mensaje: "Día X: 22°C"
 *      (donde X es el número del día, empezando en 1).
 */









const separate = () => {
    console.log("\n \n");
}

const temperaturas = [22, 35, 18, 40, 28, 15, 33];

let pasarAFahrenheit = temperaturas.map(numero => (numero * 9 / 5) + 32);
console.log("Temperatura en Fahrenheit" + pasarAFahrenheit);
separate()

let temps30Grados = temperaturas.filter(temps => temps > 30);
console.log("Temperatura mas de 30 " + temps30Grados);
separate()

temperaturas.forEach((temp, indice) => {
    console.log(" Dia " + indice + " : " + "Temperatura " + temp);
});

separate()










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
 */





const carrito = [
    { nombre: "Camiseta", precio: 19.99, cantidad: 3 },
    { nombre: "Pantalón", precio: 49.99, cantidad: 1 },
    { nombre: "Zapatillas", precio: 89.99, cantidad: 2 },
    { nombre: "Calcetines", precio: 4.99, cantidad: 5 },
    { nombre: "Gorra", precio: 14.99, cantidad: 1 },
];





/*  - Usa map para crear un nuevo array donde cada producto tenga
*      una propiedad extra "total" con el resultado de precio * cantidad.*/

let nuevaPropiedad = carrito.map(propiedad => ({
    nombre: propiedad.nombre,
    precio: propiedad.precio,
    cantidad: propiedad.cantidad,
    precioTotal: Number((propiedad.cantidad * propiedad.precio).toFixed(2))
}))

console.log(nuevaPropiedad);





let suma = nuevaPropiedad.reduce((acumular, valor) => {
    return acumular + valor.precioTotal
}, 0)

console.log(suma);

let filtrar = nuevaPropiedad.filter(propiedad => {
    return propiedad.precio < 20
})

console.log("Filtrados ", filtrar);

separate()

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
*/

const jugadores = [
    { nombre: "Messi", goles: 30, posicion: "Delantero" },
    { nombre: "Busquets", goles: 2, posicion: "Centrocampista" },
    { nombre: "Piqué", goles: 5, posicion: "Defensa" },
    { nombre: "Modric", goles: 10, posicion: "Centrocampista" },
    { nombre: "Mbappe", goles: 28, posicion: "Delantero" },
    { nombre: "Lamine", goles: 4, posicion: "Centrocampista" },
];

//- Usa filter para obtener solo los jugadores que jueguen de "Delantero".

let delanteros = jugadores.filter(jugador => jugador.posicion === "Delantero")
console.log(delanteros);

//   - Usa reduce para calcular el total de goles de todo el equipo.

let goles = jugadores.reduce((acumulador, jugador) => {
    return jugador.goles + acumulador
}, 0)

// - Usa map para crear un nuevo array con solo los nombres de los jugadores ,y sus goles en formato: "Messi - 30 goles".

let formato = jugadores.map(jugador => {
    return jugador.nombre + " - " + jugador.goles
})

console.log(formato);

separate()

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
 */

const alumnos = [
    { nombre: "Ana", nota: 8.5 },
    { nombre: "Carlos", nota: 4.2 },
    { nombre: "Lucía", nota: 6.0 },
    { nombre: "Pedro", nota: 3.8 },
    { nombre: "Sara", nota: 9.1 },
    { nombre: "Diego", nota: 5.0 },
];

//- Usa filter para obtener solo los alumnos aprobados (nota >= 5).- Usa map para añadir a cada alumno una propiedad "estado" con el    
// valor "Aprobado" o "Suspenso" según su nota.

let aprobados = alumnos.filter(alumno => alumno.nota >= 5);
console.log(aprobados);

let estado = alumnos.map(alumno => {
    if (alumno.nota >= 5) {
        return {
            nombre: alumno.nombre,
            nota: alumno.nota,
            estado: "aprobado"
        }
    } else {
        return {
            nombre: alumno.nombre,
            nota: alumno.nota,
            estado: "suspenso"
        }
    }
})

console.log(estado);

// Usa reduce para calcular la nota media de toda la clase

let media = alumnos.reduce((acumulador, alumno) => {
    return acumulador + alumno.nota
}, 0)

console.log(" la media de la clase es " + media / alumnos.length);

//- Usa forEach para mostrar por consola el resultado de cada alumno: Ana → 8.50 (APROBADO)" si aprobó o "Carlos → 4.20 (SUSPENSO)" si suspendió.

alumnos.forEach(alumno => {
    if (alumno.nota >= 5) {
        console.log(alumno.nombre + " → " + alumno.nota + ("(Aprobado)"));
    } else {
        console.log(alumno.nombre + " → " + alumno.nota + "(Suspenso)");
    }
});

separate()

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
 */


  const ventas = [
       { mes: "Enero",      importe: 12500 },
       { mes: "Febrero",    importe: 9800  },
       { mes: "Marzo",      importe: 15200 },
       { mes: "Abril",      importe: 7300  },
       { mes: "Mayo",       importe: 18900 },
       { mes: "Junio",      importe: 11400 },
     ];





let totalVentas= ventas.reduce((acumulador,venta)=>{return venta.importe + acumulador},0)
console.log("Ventas totales: " + totalVentas);


//- Usa filter para obtener los meses en los que las ventas superaron los 12.000€.
     let ventasTop = ventas.filter(venta => venta.importe > 12000)
     console.log("ventas superiores a 12k: " , ventasTop);

     ventasTop.forEach(venta=> {
       console.log(venta.mes);
        
     })





// Usa map para crear un nuevo array donde el importe de cada mes ,tenga aplicado un incremento del 5% (previsión para el año siguiente).

let importeMes = ventas.map(ventas => ventas.importe += (ventas.importe *5) / 100)
     
console.log(importeMes);

//- Usa forEach para mostrar por consola el informe de cada mes: *      "Enero: 12.500€".

ventas.forEach(venta =>{

    console.log(venta.mes + ":"  + venta.importe);
    



})


