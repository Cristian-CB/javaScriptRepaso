/*Ejercicio 1: aplanar en profundidad

Escribe una función aplanarProfundo que reciba un array con cualquier nivel de anidación y devuelva un único array plano.

Usa reduce(), Array.isArray() y recursión. No puedes usar .flat().

js
aplanarProfundo([1, [2, [3, [4]]], 5])   // [1, 2, 3, 4, 5]
aplanarProfundo([[[]], [10, [20]], 30])  // [10, 20, 30]
*/


function arrayPlano(array) {
    const aplanado = array.reduce((acumulador,elemento)=>{
        if (Array.isArray(elemento)) {
            
            return [...acumulador,...arrayPlano(elemento)]
        }
        else
            return [...acumulador, elemento]
    },[])
    return aplanado
    
    
}


console.log([1, [2, [3, [4]]], 5].flat())


/*
Con el array productos de tu ejercicio 2:

a) Crea una función agruparPor(array, clave) que use reduce y devuelva un objeto con los elementos agrupados:

js
agruparPor(productos, "categoria")
// { ropa: [ {...}, {...} ], tecnología: [ {...}, {...} ] }

b) Usando el resultado anterior, devuelve un resumen por categoría con el número de productos, el precio medio (2 decimales) y el stock total:

js
// {
//   ropa:       { cantidad: 2, precioMedio: 27.5, stockTotal: 3 },
//   tecnología: { cantidad: 2, precioMedio: 67.5, stockTotal: 17 }
// }

Pista: Object.entries() y Object.fromEntries().

*/

const productos = [
    { nombre: "Camiseta", categoria: "ropa", precio: 20, stock: 2 },
    { nombre: "Pantalón", categoria: "ropa", precio: 35, stock: 1 },
    { nombre: "Ratón", categoria: "tecnología", precio: 25, stock: 10 },
    { nombre: "Monitor", categoria: "tecnología", precio: 110, stock: 7 }
];





function agruparPor(array, clave) {
    return array.reduce((acumulador, elemento) => {
        let categoria = elemento[clave];

        if (!acumulador[categoria]) {
            acumulador[categoria] = [];
        }

        acumulador[categoria].push(elemento);

        return acumulador;
    }, {});
}

let agrupados = agruparPor(productos, "categoria");

console.log(agrupados);




function resumirCategorias(agrupados) {
    return Object.fromEntries(
        Object.entries(agrupados).map(([categoria, productos]) => {
            let cantidad = productos.length;

            let sumaPrecios = productos.reduce((acumulador, producto) => {
                return acumulador + producto.precio;
            }, 0);

            let precioMedio = Number((sumaPrecios / cantidad).toFixed(2));

            let stockTotal = productos.reduce((acumulador, producto) => {
                return acumulador + producto.stock;
            }, 0);

            return [
                categoria,
                {
                    cantidad: cantidad,
                    precioMedio: precioMedio,
                    stockTotal: stockTotal
                }
            ];
        })
    );
}

console.log(resumirCategorias(agruparPor(productos, "categoria")));


/*


Ejercicio 3: ranking de alumnos

Con el array alumnos de tu ejercicio 3, devuelve un array ordenado de mayor a menor media (si empatan, por nombre alfabético) con esta forma:

js
{ nombre: "Maria", media: 9.25, mejorNota: 10, estado: "sobresaliente" }

Reglas del estado:

media >= 9 → "sobresaliente"
media >= 5 → "aprobado"
resto → "suspenso"

Además, calcula con every si todos los alumnos tienen al menos una nota mayor o igual que 5.

Pistas: Math.max(...notas), .sort() con comparador, localeCompare. Ojo: .sort() modifica el array original, así que haz antes una copia.


*/

const alumnos = [
    { nombre: "Maria", notas: [9, 10, 8.75] },
    { nombre: "Carlos", notas: [4, 5, 3] },
    { nombre: "Ana", notas: [9, 9, 9] }
];





function rankingAlumnos(alumnos) {

    const ranking = alumnos.map(alumno => {
        // Calculamos la media
        let suma = alumno.notas.reduce((acumulador, nota) => {
            return acumulador + nota;
        }, 0);

        let media = suma / alumno.notas.length;

        // Buscamos la mejor nota
        let mejorNota = Math.max(...alumno.notas);

        // Calculamos el estado
        let estado;

        if (media >= 9) {
            estado = "sobresaliente";
        } else if (media >= 5) {
            estado = "aprobado";
        } else {
            estado = "suspenso";
        }

        return {
            nombre: alumno.nombre,
            media: Number(media.toFixed(2)),
            mejorNota: mejorNota,
            estado: estado
        };
    });

    // Ordenamos de mayor a menor media.
    // Si empatan, ordenamos por nombre.
    ranking.sort((a, b) => {
        if (b.media !== a.media) {
            return b.media - a.media;
        }

        return a.nombre.localeCompare(b.nombre);
    });

    return ranking;
}

console.log(rankingAlumnos(alumnos));

// ¿Todos tienen al menos una nota >= 5?
const todosTienenUnAprobado = alumnos.every(alumno =>
    alumno.notas.some(nota => nota >= 5)
);

console.log(todosTienenUnAprobado);
