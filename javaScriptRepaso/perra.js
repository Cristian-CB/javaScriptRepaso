



/*
<<<<<<< HEAD
# Ejercicios

---

## Ejercicio 1

Escribe una función llamada "aplanar" que reciba un array de arrays
de números y retorne un único array con todos los números en orden, sin anidar

Usa reduce() y el operador spread (...)

```
aplanar([ [1, 2], [3, 4], [5] ]) -> [1, 2, 3, 4, 5]
aplanar([ [10], [20, 30], [] ]) -> [10, 20, 30]
```

---

*/
array = [[1, 2], [3, 4], [5]]
const aplanar =  array.reduce((contador,elemento)=>{
  return [...contador,...elemento]


},[])

console.log(aplanar);







const productos = [
    {nombre: "Camiseta", precio: 15, categoria: "ropa", stock: 3},
    {nombre: "Pantalón", precio: 40, categoria: "ropa", stock: 0},
    {nombre: "Teclado", precio: 75, categoria: "tecnología", stock: 12},
    {nombre: "Auriculares", precio: 60, categoria: "tecnología", stock: 5},
];

/*
a) Filtra solo los productos con stock > 0 y retorna un array con sus nombres en mayúsculas
`Resultado esperado: ["Camiseta", "Teclado", "Auriculares"]`

b) Calcula el precio total de todos los productos con stock > 0.

c) Devuelve el producto más caro de toda la lista (con o sin stock).

---
*/

const filtrado = productos.filter(elemento=> elemento.stock > 0)

.map(elemento=> {return [elemento.nombre.toLocaleUpperCase()]})
.reduce((acumulador,elemento)=>{
  return [...acumulador,...elemento]
},[])


console.log(filtrado);



const filtrado1 = productos.filter(elemento=> elemento.stock > 0)
.reduce((contador,elemento)=>{
  return contador+= elemento.precio
  
},0)

console.log(filtrado1);

let mayor = productos[0]
for (let index = 0; index < productos.length; index++) {
  if (mayor.precio < productos[index].precio) {
    mayor = productos[index]
    
  }
  
  
}
console.log(mayor);



/*

## Ejercicio 3

Tienes este array de alumnos con sus notas:

 master
const alumnos = [
    {nombre: "Ana", notas: [8, 7, 9, 6]},
    {nombre: "Luis", notas: [4, 5, 3, 6]},
    {nombre: "Maria", notas: [10, 9, 8, 10]},
    {nombre: "Pedro", notas: [5, 4, 6, 3]},
    {nombre: "Sofia", notas: [7, 8, 7, 9]},
];



const alumnos1 = 

alumnos.map(elemento => {
  const suma = elemento.notas.reduce((acumulador,nota)=>{
  return acumulador + nota;
  },0)

  
  return{
    ...elemento,
    notas : suma / elemento.notas.length

  };
});
console.log(alumnos1);



let aprobados1 = alumnos1.filter(elemento1 => elemento1.notas > 5)
.map(elemento => {
  return { 
    nombre : elemento.nombre,
    nota : elemento.notas
  }
}


)
console.log(aprobados1);

let algn = alumnos1.some(elemento=> elemento.notas===10)

console.log(algn);


/*
>>>>>>> master
```

a) Crea un nuevo array donde cada elemento sea un objeto con el nombre del alumno y su media de notas *(redondeada a 2 decimales)*
`Resultado esperado: [ {nombre: "Ana", media: 7.50} ]`

b) Filtra y devuelve solo los alumnos aprobados (media >= 5).

c) ¿Algún alumno tiene alguna nota perfecta (10)?. Retorna true o false usando un método de iteración avanzado.


---


## Ejercicio 4

Crea una función llamada "crearPila" que implemente una estructura de datos tipo pila (stack) usando un closure.

La función principal (crearPila) NO DEBE recibir parámetros y debe retornar un objeto JSON con estos métodos:
- apilar(valor) => añade el valor al tope de la pila.
- desapilar() => elimina y retorna el valor del tope. Si la pila está vacía retorna *null*.
- tope() => devuelve el valor del tope de la pila sin eliminarlo. Si está vacía retorna *null*. 
- tamano() => retorna el número de elementos que tiene la pila.

IMPORTANTE: La pila (el array interno) NO debe ser accesible desde fuera.

```
Ejemplo:
const pila = crearPila();
pila.apilar(1);
pila.apilar(2);
pila.apilar(3);
console.log(pila.tope()) // 3
console.log(pila.desapilar()) // 3

console.log(pila.tope()) // 2
console.log(pila.tamano()) // 2

```

---

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