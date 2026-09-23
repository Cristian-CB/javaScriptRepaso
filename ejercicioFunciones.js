/*
* 1. Crea una función que calcule propina en un restaurante. Debe de recibir el total
* de la cuenta y el porcentaje de propina y debe devolver la cantidad total a pagar.
* Llama la función 3 veces con valores diferentes y muestra cada resultado con 2 decimales.

* */

console.log("Ejercicio 1 ");


const calcularPropina = (cuenta , propina)=> {

let resultado = cuenta * propina / 100
resultado += cuenta
return resultado

}


for(let i =0 ; i < 3 ; i++ ){
    
    let cuenta= Math.floor(Math.random() * (200 - 50 + 1 )+50), propina= Math.floor(Math.random () * (30 - 5 + 1 )+5)
    console.log("Precio final = " + calcularPropina(cuenta,propina).toFixed(2))
}

/*
* 2. Crea una función llamada saludar que reciba un nombre y una hora (del 0 al 23). Según
* la hora debe devolver "Buenos días [NOMBRE]", "Buenas tardes [NOMBRE]",
* "Buenas noches [NOMBRE]". Hazla con Arrow Functions.
* */
console.log("Ejercicio 2 "); 
const saludar = (n,h)=>{


if (h >= 6 && 12 >= h ){console.log("buenos dias "+ n)}
else if (h >= 12 && 18 >= h ){console.log("buenas tardes  "+ n)}
else if (h >= 18 && 24 >= h ){console.log("buenas noches  "+ n)}
else{console.log("buenas madrugadas "+ n)}



}

saludar("cristian",21)








/* 3. Crea 3 funciones:
*   - aplicarDescuento(precio, porcentaje) que retorne el precio con descuento.
*   - calcularIva(precio) que añada un 21%
*   - resumenCompra(nombre, precio, descuento) sin return que use los dos anteriores
*     y muestre por consola el precio original, el precio con descuento y el precio
*     final con IVA
* */ 
console.log("Ejercicio 3 ");

const apkDescuento = (precio , descuento)=> {
let operacion = precio * descuento / 100
precio-= operacion
return precio
}




const calcularIva = (precio )=> {
let operacion = precio * 21 / 100
precio += operacion
return precio
}




const calcularIvaConDescuento= (precio)=> {

let resultado = calcularIva(precio)

return resultado
}



const resumenCompra = (nombre,descuento,precio )=>{
    console.log("nombre: "+nombre)
    console.log("precio original = " + precio)

    let precioDescuento = apkDescuento(precio,descuento)
    console.log("Precio con descuento (sin iva) =  " + precioDescuento);

    let precioConIva = calcularIva(precio)
    console.log("precio con iva  = " + precioConIva);

    let precioConIvaDescuento = calcularIvaConDescuento(precioDescuento)
    console.log("Precio con iva y descuento " + precioConIvaDescuento);


}

let persona = {
nombre:"Cristian",descuento: 10 , precio:100

}
resumenCompra(persona.nombre,persona.descuento, persona.precio)












/*
* 4. Crea las notas de un alumno que reciba un nombre como primer parámetro y luego
* cualquier cantidad de notas. Debe calcular el promedio de las notas y mostrar por
* consola ej: "Ana - Promedio: 7.50 - Aprobado". Puede ser Aprobado / Suspenso si el
* promedio es >= 5.
* */ 

console.log("Ejercicio 4 ");






const CalcularMedia=(nombre,...notas)=>{

let suma = 0;
for(let nota of notas){

 suma+= nota

}
let media = (suma / notas.length).toFixed(2)



console.log("Notas " + notas)

if (media >= 5 ) {

    console.log(nombre + " -Promedio: "+ media +" - Aprobado " );
}
else{
    console.log(nombre + " -Promedio: "+ media +" - Suspenso " );
}


}

let notas=[]

let numeroRandom = Math.floor(Math.random()*(10 - 3 + 1) + 3) 

for(let i =0;i< numeroRandom; i ++ ){
    
   notas.push(Math.floor(Math.random()*(10  + 1) ) )

}

 

CalcularMedia(persona["nombre"],...notas)




















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


console.log("Ejercicio 5");

const pedido = (cliente,...varios) =>{
console.log("nombre : " + cliente);
for(let i= 0; i<varios.length;i ++ ){

console.log(i+1 + ".", varios[i]);
}
}
let cliente ="Marta"
pedido(cliente,"cafe","tostada","zumo")




s


















     