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


const separate = ()=>{console.log("\n \n");
}



const temperaturas = [22, 35, 18, 40, 28, 15, 33];


let pasarAFahrenheit = temperaturas.map(numero =>(numero* 9/5) +  32 );
console.log("Temperatura en Fahrenheit" + pasarAFahrenheit);
separate()


let temps30Grados = temperaturas.filter(temps => temps >=30);
console.log("Temperatura mas de 30 " + temps30Grados);
separate()

temperaturas.forEach((temp , indice)=> {
    
    console.log(" Dia " + indice + " : "  + "Temperatura "+ temp);
    
    
});



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
 *
 * */


separate()

const carrito = [
       { nombre: "Camiseta",   precio: 19.99, cantidad: 3 },
       { nombre: "Pantalón",   precio: 49.99, cantidad: 1 },
      { nombre: "Zapatillas", precio: 89.99, cantidad: 2 },
      { nombre: "Calcetines", precio: 4.99,  cantidad: 5 },
       { nombre: "Gorra",      precio: 14.99, cantidad: 1 },   ];


       /*  - Usa map para crear un nuevo array donde cada producto tenga
 *      una propiedad extra "total" con el resultado de precio * cantidad.*/


       let nuevaPropiedad = carrito.map(propiedad => ({
        nombre:propiedad.nombre,   precio: propiedad.precio, cantidad: propiedad.cantidad ,
         precioTotal:Number((propiedad.cantidad * propiedad.precio).toFixed(2))}))
       console.log(nuevaPropiedad);


       let suma = nuevaPropiedad.reduce((acumular, valor )=> {return acumular + valor.precioTotal},0)
       console.log(suma);
       
       let filtrar = nuevaPropiedad.filter(propiedad =>{ return propiedad.precio <20})
       console.log("Filtrados ",filtrar );
       