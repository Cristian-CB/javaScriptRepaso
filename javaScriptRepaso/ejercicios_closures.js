/*
* ###############
* EJERCICIOS
* ###############
* */


/*
*
* 1. Fábrica de mensajes con firma
*
* Crea una función llamada "crearMensajero". Crea una variable donde almacenaremos el nombre de un usuario (mensajero).
* Luego crea una función que asigne valor a esa variable de nombre. Finalmente, crearMensajero debe de retornar una
* función que muestre por consola el mensaje con la firma del autor al final.
*
* ejemplo de uso:
*
* mensajero = crearMensajero()
* mensajero.asignarUsuario("nombre")
* mensajero.mensaje() => Hola a todos - firmado: {nombre}
*
* */


function crearMensajero() {
    let nombre;

    const asignarNombre = (n) => {nombre = n;}

    const mensaje = () => console.log("Hola, " + nombre);

    return {asignarNombre, mensaje};
}

const mensj1 = crearMensajero()
const mensj2 = crearMensajero()

mensj1.asignarNombre("Juan")
mensj2.asignarNombre("Camilo")
mensj1.mensaje()
mensj2.mensaje()

/*
* 2. Calculadora de IVA
*
* Crea una función llamada "calculadoraIVA" la cual debe de recibir como parámetro un IVA (valor numérico int)
*
* esta función debe de retornar una función interior. Esta función interior debe de recibir como parámetro un valor
* sin IVA y debe mostrar por consola el precio final con el IVA aplicado.
*
* Ejemplo de uso:
*
* calculadora1 = calculadoraIVA(21);
* calculadora2 = calculadoraIVA(10);
*
* calculadora1.calcularIVA(100) => imprime 121
* calculadora2.calcularIVA(100) => imprime 110
* */

function calculadoraIVA(iva) {

    function calculaElIVA(sin_iva) {
        let total = sin_iva + ((sin_iva * iva) / 100);
        console.log("El resultado con IVA: " + total);
    }

    return {
        calculaElIVA
    }

}


const calc = calculadoraIVA(21);
const calc2 = calculadoraIVA(10);


calc.calculaElIVA(100)
calc2.calculaElIVA(10)