 
 /* 
 atajo 

ctrl shift a 


 */
 
 
 // comentario simple
 

 // variables var/let/ const

 let a,b,c
 a = 1 
 
 b=2
// const varible q no cambia, nombre:mayuscula
const PI = Math.PI
console.log(PI)

 // imprimir en consola 
 console.log(a);
 
// IMPRIMIR TIPOS
console.log(typeof a)
//operadores 

console.log(a + b)
console.log(a - b)
console.log( a /b)
console.log(a%b)
console.log(a ** b)
console.log(b ++ ) // postIncremento (primero funcion)
console.log(++b ) // preIncremento (primero suma)
console.log();



// operadores logicos 




console.log(1 == "1"); //true
console.log(1 ==="1"); //false
console.log();
/* 
!== estricto
!= no estricto 


*/
// !== != 
/* json */






let persona1 = {nombre : "cristian",
    edad: 18
}

let persona2 = {"nombre" : "cristian",
    edad: 18
}

// no comillas llamada
persona1.nombre

persona1 ["nombre"]
console.log(persona1 ["nombre"]);

// comillas llamada 

persona2 ["nombre "]

let persona3 = {"nombre" : "cristian",
    edad: 18 , esMayor: function(){

        if (this.edad >=18){

            console.log("es mayor de edad")
        }
        else{
        console.log("es mayor de edad")}
    }



}
// añadir 

persona1.perro="perro"
persona1["estudios"]= "daw"
persona2["estudios"]= "daw"

// borrar
persona2.delete["estudios"]
persona1.delete(estudios)






