/*
*
* EJERCICIOS
*
*/





const NUMERO = 20
let contador = 0,
    pares = 0

while (NUMERO !== contador) {   /* mientras q numero sea diferente de contador*/

    if (contador % 2 === 0) {
        pares += 1
    }
    contador++
}
console.log(pares)

/*
* 2. Crea una variable llamada color. Con un solo valor o "rojo" o "verde" o "amarillo". Usa switch para mostrar la instrucción correspondiente ("Parado", "Arrancar", "Frenando").
* Prueba que el programa funciona cambiando el valor de la variable color.
* */


const COLORES = ["rojo", "verde", "amarillo"]

let x = Math.floor(Math.random() * 3) // nmr aleatorio entre 0 y 2 

let color = COLORES


switch (color) {


    case "rojo":
        console.log("parado");
        break
    case "verde":
        console.log("arrancado");
        break
    case "amarillo":
        console.log("frenando");
        break
    default:

        break


}

/*
* 3. Define na variable llamada saldo. Como valor inicial pon 1000 (Esto vamos a considerar que es dinero). Usa un bucle (tú decides cuál).
* Simulemos 3 retiros de dinero con cantidades diferentes. En cada vuelta del bucle, si hay saldo suficiente, 
* resta la cantidad al valor del saldo e imprime en pantalla el saldo retirado y el saldo que queda.
* Si no alcanza, imprime "Saldo insuficiente" y detén el programa saliendo del bucle.
* */

let saldo = 1000,
    dinero = false, contador1 = 0

while (!dinero && contador1 != 3) {
    let saldoRestar = Math.floor(Math.random() * (500 - 100 + 1)) + 100  // floor redondea a la baja; random = genera un num aleatorio entre 0 y 1 (numero maximo) - (reducimos rango para q no se pase del maximo)


    if (saldoRestar <= saldo) {
        saldo -= saldoRestar
        console.log("dinero disponible " + saldo);
        console.log(" Saldo retirado " + saldoRestar);
    }
    else {
        dinero = true
        console.log("Saldo insuficiente " + " vuelta: " + contador1);
    }
    contador1++
}






