/*













Crea una función llamada "crearPila" que implemente una estructura de datos tipo pila (stack) usando un closure.

La función principal (crearPila) NO DEBE recibir parámetros y debe retornar un objeto JSON con estos métodos:
- apilar(valor) => añade el valor al tope de la pila.
- desapilar() => elimina y retorna el valor del tope. Si la pila está vacía retorna *null*.
- tope() => devuelve el valor del tope de la pila sin eliminarlo. Si está vacía retorna *null*. 
- tamano() => retorna el número de elementos que tiene la pila.

IMPORTANTE: La pila (el array interno) NO debe ser accesible desde fuera.


Ejemplo:
const pila = crearPila();
pila.apilar(1);
pila.apilar(2);
pila.apilar(3);
console.log(pila.tope()) // 3
console.log(pila.desapilar()) // 3

console.log(pila.tope()) // 2
console.log(pila.tamano()) // 2

*/


let stack =[0,1]

console.log(stack[stack.length -1]);

console.log(stack);



function crearPila(){

  stack=[]
function apilar (valor) {
  stack.push(valor)
}
function desapilar () {
  if (stack.length !=0) {
    
    return stack.pop()
  }
  return null
  
}
function tope () {
  if (stack.length !=0) {
    
    return stack[stack.length-1]
  }
  return null

  
}
function tamano () {

  return stack.length
  
}
return{
  apilar,
  desapilar,
  tope,
  tamano

}
}


const pila = crearPila()

pila.apilar(1)
pila.apilar(2)
pila.apilar(3)


console.log(pila.tope()) // 3
console.log(pila.desapilar()) // 3

console.log(pila.tope()) // 2
console.log(pila.tamano())


class cuentaBancaria{

 constructor(titular,saldoInicial){
  this._titulartitular = titular
  this._saldoInicial = saldoInicial

 }

 

}
/*
## Ejercicio 5

Crea una clase llamada "CuentaBancaria" con:

- constructor(titular, saldoInicial). Guarda el titular y el saldo. El historial empieza vacío.
- ingresar(cantidad) => Suma la cantidad al saldo y guarda en el historial:
  - "Ingreso: +100 | Saldo: 600"
- retirar(cantidad) => Resta la cantidad al saldo si hay fondos suficientes y guarda en el historial.
  - "Retiro -50 | Saldo: 550"
  - Si no hay fondos, muestra por consola: "Saldo insuficiente" y NO guardes nada en el historial.
- verHistorial() => imprime por consola cada movimiento del historial numerado:
  - "1. Ingreso: +100 | Saldo: 500"
  - "2. Ingreso: +100 | Saldo: 600"
  - "3. Ingreso: +50 | Saldo: 650"
  - "4. Retiro: -250 | Saldo: 400"
- getSaldoActual() => Getter que retorna el saldo actual.

```
Ejemplo:

const cuenta = new CuentaBancaria("Camilo", 500);
cuenta.ingresar(100);
cuenta.retirar(50);
cuenta.retirar(700); // Saldo insuficiente
console.log(cuenta.saldoActual); // 550
cuenta.verHistorial();
```
*/