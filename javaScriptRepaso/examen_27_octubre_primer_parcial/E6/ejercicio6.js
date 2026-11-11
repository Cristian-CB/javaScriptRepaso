// ============================================================
//  EJERCICIO 6 - Array de empleados [1,5 puntos]
//  Escribe tu solución debajo de cada apartado.
//  Solo se permite usar métodos de array. No uses bucles for/while.
// ============================================================

const empleados = [
    {nombre: "Ana", departamento: "dev", salario: 2800},
    {nombre: "Luis", departamento: "diseño", salario: 2400},
    {nombre: "María", departamento: "dev", salario: 3200},
    {nombre: "Pedro", departamento: "dev", salario: 2600},
    {nombre: "Sofía", departamento: "diseño", salario: 2900},
    {nombre: "Carlos", departamento: "dev", salario: 3100},
];


// a) [0,5 puntos] ————————————————————————————————
// Obtén el salario medio del departamento "dev" (redondeado a 2 decimales).
let medio = empleados.filter(elemento=> elemento.departamento ==="dev")

const media = medio.reduce((contador,elemento)=> {return contador+ elemento.salario},0)


    console.log(media/medio.length);
    
    





// b) [0,5 puntos] ————————————————————————————————
// Crea un objeto que agrupe los nombres de los empleados por departamento.
// Usa reduce().
// Resultado esperado:
// {
//   dev:    ["Ana", "María", "Pedro", "Carlos"],
//   ...
// }


const porDev = empleados.reduce((acc, p) => {
if (!acc[p.departamento]) acc[p.departamento] = [];
acc[p.departamento].push(p.nombre);
return acc;
}, {})



// c) [0,5 puntos] ————————————————————————————————
// ¿Todos los empleados del departamento "diseño" cobran más de 2000 €?

const diseño = empleados.every(elemento=> elemento.salario>2000)

if (diseño) {
    console.log("si todos cobran 2000");
    
}
else{console.log("no");
}