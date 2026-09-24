


// QUEDATE CON NUMEROS PARES 



const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    numerosPares = numeros.filter(numero=> numero % 2 ===0)


    console.log(numerosPares);
    


 const edades = [12, 18, 15, 21, 16, 30, 17];

// Quédate con las edades mayores o iguales a 18



let mayorDeEdad = edades.filter(numero => numero >=18)





console.log(mayorDeEdad);


// Quédate con las palabras que tengan más de 5 letras
const palabras = ["sol", "ordenador", "casa", "programacion", "pan", "JavaScript"];




let palabrasLargas = palabras.filter(palabra => palabra.length>=5 )
console.log(palabrasLargas);



const productos = [
    { nombre: "Pan", precio: 2 },
    { nombre: "Leche", precio: 1 },
    { nombre: "Pizza", precio: 8 },
    { nombre: "Huevos", precio: 3 }
];

// Quédate con los productos que cuesten más de 3€



let precio = productos.filter(producto=> producto["precio"] >= 3)
console.log(precio);


// Quédate con las notas aprobadas (>= 5) 
const notas = [3, 7, 5, 9, 2, 10, 6];
let aprobados = notas.filter(nota => nota>= 5 )
console.log(aprobados);




// map

// Multiplica cada número por 2
const numeros1 = [1, 2, 3, 4, 5];
let numeros2 = numeros1.map(numero=> numero*2)
console.log(numeros2);



// Convierte todos los nombres a mayúsculas
const nombres = ["ana", "juan", "cristian", "lucas"];




let mayusc = nombres.map(nombre=> nombre.toUpperCase())


console.log(mayusc);



// Crea un array que contenga solamente los nombres
const personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Luis", edad: 30 }
];


let  soloNombres = personas.map(persona => {return{

  nombre:persona.nombre


}})

console.log(soloNombres);


// Crea un nuevo array con los precios
const productos1 = [
    { nombre: "Pan", precio: 2 },
    { nombre: "Leche", precio: 1 },
    { nombre: "Pizza", precio: 8 }
];


let precios = productos1.map(producto => {return{
    precio : producto.precio
}})




// Suma todos los números usando reduce()
const numeros123 = [5, 10, 15, 20];

let suma = numeros123.reduce((acumulador,numero)=> {return acumulador+numero},0)



console.log(suma);


const productos4 = [
    { nombre: "Pan", precio: 2 },
    { nombre: "Leche", precio: 1 },
    { nombre: "Pizza", precio: 8 },
    { nombre: "Huevos", precio: 3 }
];

// Calcula el precio total de todos los productos

let sumaPrecio = productos4.reduce((acumulador,producto)=> {return producto.precio + acumulador},0)




console.log(sumaPrecio);










