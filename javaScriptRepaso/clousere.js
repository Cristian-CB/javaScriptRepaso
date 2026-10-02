function exterior(){

    let saludo = "hola mundo"
    function interior (){
        console.log(saludo +  "nombre: cristian");
        
    }
    return{saludo,interior}
}



let ejemplo = exterior();
/*
* 
* 1. Fábrica de mensajes con firma
* 
* Crea una función llamada "crearMensajero". Crea una donde almacenaremos el nombre de un usuario (mensajero).
* Luego crea una función que asigne valor a esa variable de nombre. Finalmente, crearMensajero debe de retornar una 
* función que muestre por consola el mensaje con la firma del autor al final.
* 
* ejemplo de uso:
* 
* mensajero = crearMensajero()
* mensajero.asignarUsuario("nombre")
* mensajero.mensaje() => Hola a todos - firmado: {nombre} 

11:47


*/ 


function crearMensajero (){

    
        let usuario = ""
        
    function asignarUsuario(nombre) {
        
        usuario = nombre 
    }
    function asignarValorAmensaje (mensaje) {
        let mensaj = mensaje 
        console.log(mensaj + usuario  );
        
        
    }


    return{asignarValorAmensaje,
        asignarUsuario
    }






}


let hola =crearMensajero()
hola.asignarUsuario("Josue")
hola.asignarValorAmensaje("se q eres gay ")








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
* 

11:51

Camilo says:*
* calculadora1.calcularIVA(100) => imprime 121
* calculadora2.calcularIVA(100) => imprime 110
* */ 


function calcularIva(iva) {

    function interior (precio ) {
        
        console.log( "precio final = " , precio+= (iva*precio)/100);
        





    }
    return{
        interior



    }
    
}

let iva1 = 34
const iva = calcularIva(iva1)
let precio = 10
iva.interior(precio)

















