/*
* 1. Crea una función que calcule propina en un restaurante. Debe de recibir el total
* de la cuenta y el porcentaje de propina y debe devolver la cantidad total a pagar.
* Llama la función 3 veces con valores diferentes y muestra cada resultado con 2 decimales.

* */



const calcularPropina = (cuenta , propina)=> {

resultado = cuenta * propina / 100
resultado += cuenta
return resultado

}


for(let i =0 ; i < 3 ; i++ ){
    
    let cuenta= Math.floor(Math.random * (200 - 50 + 1 )+50), propina= Math.floor(Math.random * (30 - 5 + 1 )+5)


    console.log(calcularPropina(cuenta,propina))

}

/*
* 2. Crea una función llamada saludar que reciba un nombre y una hora (del 0 al 23). Según
* la hora debe devolver "Buenos días [NOMBRE]", "Buenas tardes [NOMBRE]",
* "Buenas noches [NOMBRE]". Hazla con Arrow Functions.
* */ 
const saludar = (n,h)=>{


if (h => 6 && 12 <= h ){console.log("buenos dias "+ n)}
else if (h => 12 && 18 <= h ){console.log("buenas tardes  "+ n)}
else if (h => 18 && 24 <= h ){console.log("buenas noches  "+ n)}
else{console.log("buenas madrugadas "+ n)}



}










/* 3. Crea 3 funciones:
*   - aplicarDescuento(precio, porcentaje) que retorne el precio con descuento.
*   - calcularIva(precio) que añada un 21%
*   - resumenCompra(nombre, precio, descuento) sin return que use los dos anteriores
*     y muestre por consola el precio original, el precio con descuento y el precio
*     final con IVA
* */ 


const apkDescuento = (precio , descuento)=> {

resultado = precio * descuento / 100
precio-= resultado

console.log(" precio con descuento " = descuento)


}
const calcularIva = (precio )=> {

resultado = precio * 21 / 100

precio += resultado


console.log("precio con iva sin descuento " + precio  )
return precio

}

const calcularIvaConDescuento= ( precio,descuento)=> {
let precioConDescuento = apkDescuento(precioConDescuento)

let resultado = calcularIva(precioConDescuento)


console.log("precio con iva con  ddescuento "  + resultado )


}



const resumenCompra = (nombre,descuento,precio )=>{
    console.log(nombre)
    console.log("precio original " + precio)
  let  precioDescuento= apkDescuento(precio,descuento)
    calcularIvaConDescuento(precioDescuento)

}

let nombre = "cristian"
let descuento = 10
let precio =100


console.log(resumenCompra(nombre,descuento.precio));












/*
* 4. Crea las notas de un alumno que reciba un nombre como primer parámetro y luego
* cualquier cantidad de notas. Debe calcular el promedio de las notas y mostrar por
* consola ej: "Ana - Promedio: 7.50 - Aprobado". Puede ser Aprobado / Suspenso si el
* promedio es >= 5.
* */ 



/*
* 5. Crea una función pedido que reciba el cliente como primer parámetro y luego
* la cantidad de productos (string). La función debe mostrar en consola el nombre
* del cliente, cuantos productos pidió y listar cada uno de ellos.
* Si no pidió nigún producto, mostrar "Sin productos en el pedido".
*
* Ejemplo de salida:
*   Cliente: Marta
*   Total productos: 3
*   1. Café
*   2. Tostada
*   3. Zumo
* */ 

