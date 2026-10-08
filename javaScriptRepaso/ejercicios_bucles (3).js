

// ============================================================
//  EJERCICIOS — (forEach, map, filter, reduce, find, some, every, with, reverse, toString)
// ============================================================


/*
 * 6. Gestión de una playlist de música
 *
 *    const playlist = [
 *      { titulo: "Bohemian Rhapsody", artista: "Queen",      duracion: 354, reproducciones: 1200 },
 *      { titulo: "Blinding Lights",   artista: "The Weeknd", duracion: 200, reproducciones: 980  },
 *      { titulo: "Shape of You",      artista: "Ed Sheeran", duracion: 234, reproducciones: 1500 },
 *      { titulo: "Hotel California",  artista: "Eagles",     duracion: 391, reproducciones: 870  },
 *      { titulo: "Levitating",        artista: "Dua Lipa",   duracion: 203, reproducciones: 620  },
 *      { titulo: "Smells Like Teen",  artista: "Nirvana",    duracion: 301, reproducciones: 1100 },
 *    ];
 *
 *    - Usa forEach para mostrar cada canción: "Queen — Bohemian Rhapsody".
 *    - Usa filter para obtener las canciones con más de 1000 reproducciones.
 *    - Usa map para crear un nuevo array con los títulos en mayúsculas
 *      y las reproducciones incrementadas un 10%.
 *    - Usa reduce para calcular la duración total de la playlist en segundos.
 *    - Usa find para encontrar la primera canción que dure más de 300 segundos.
 *    - Usa some para comprobar si alguna canción supera las 1400 reproducciones.
 *    - Usa every para comprobar si todas las canciones superan las 500 reproducciones.
 *    - Usa with para corregir las reproducciones de "Levitating" (índice 4) a 750.
 *    - Usa reverse (sin mutar el original) para mostrar la playlist al revés.
 *    - Usa toString para obtener una cadena con todos los títulos separados por comas.
 *      Pista: primero extrae los títulos con map.
 *
 * */


/*
 * 7. Sistema de pedidos de un restaurante
 *
 *    const pedidos = [
 *      { id: 1, cliente: "Ana",   plato: "Paella",      precio: 14.50, listo: true  },
 *      { id: 2, cliente: "Luis",  plato: "Ensalada",    precio: 8.00,  listo: false },
 *      { id: 3, cliente: "Marta", plato: "Chuletón",    precio: 22.00, listo: true  },
 *      { id: 4, cliente: "Pedro", plato: "Gazpacho",    precio: 6.50,  listo: false },
 *      { id: 5, cliente: "Sofía", plato: "Risotto",     precio: 16.00, listo: true  },
 *      { id: 6, cliente: "Jorge", plato: "Hamburguesa", precio: 11.00, listo: false },
 *    ];
 *
 *    - Usa forEach para mostrar cada pedido: "Pedido #1 — Ana — Paella — 14.50€".
 *    - Usa filter para obtener solo los pedidos que ya están listos.
 *    - Usa map para añadir a cada pedido una propiedad "precioConIva" (precio * 1.21).
 *    - Usa reduce para calcular la recaudación total de todos los pedidos.
 *    - Usa find para localizar el pedido del cliente "Marta".
 *    - Usa some para comprobar si hay algún pedido que supere los 20€.
 *    - Usa every para comprobar si todos los pedidos están listos.
 *    - Usa with para marcar el pedido de Luis (índice 1) como listo: true.
 *    - Usa reverse (sin mutar el original) para mostrar los pedidos del último al primero.
 *    - Usa toString para obtener una cadena con todos los platos.
 *      Pista: primero extrae los platos con map.
 *
 * */


/*
 * 8. Resultados de un torneo de videojuegos
 *
 *    const jugadores = [
 *      { nombre: "XxGamer99",  puntos: 4200, victorias: 18, derrotas: 7,  pais: "España"   },
 *      { nombre: "ProPlayer",  puntos: 3800, victorias: 15, derrotas: 10, pais: "Francia"  },
 *      { nombre: "NinjaCode",  puntos: 5100, victorias: 22, derrotas: 3,  pais: "España"   },
 *      { nombre: "DarkMaster", puntos: 2900, victorias: 12, derrotas: 13, pais: "Alemania" },
 *      { nombre: "StarKiller", puntos: 4700, victorias: 20, derrotas: 5,  pais: "España"   },
 *      { nombre: "IronFist",   puntos: 3200, victorias: 14, derrotas: 11, pais: "Italia"   },
 *    ];
 *
 *    - Usa forEach para mostrar el ranking: "1. XxGamer99 — 4200 pts".
 *      Pista: forEach puede recibir el índice como segundo parámetro.
 *    - Usa filter para obtener solo los jugadores de "España".
 *    - Usa map para añadir a cada jugador una propiedad "ratio" calculada como
 *      victorias / (victorias + derrotas). Redondéala con toFixed(2).
 *    - Usa reduce para calcular el total de puntos del torneo.
 *    - Usa find para encontrar al primer jugador con más de 5000 puntos.
 *    - Usa some para comprobar si algún jugador tiene más de 20 victorias.
 *    - Usa every para comprobar si todos los jugadores tienen más de 10 victorias.
 *    - Usa with para corregir los puntos de "DarkMaster" (índice 3) a 3100.
 *    - Usa reverse (sin mutar el original) para ver la clasificación de último a primero.
 *    - Usa toString para obtener una cadena con todos los nombres de los jugadores.
 *      Pista: primero extrae los nombres con map.
 *
 * */


/*
 * 9. Liga de fútbol — jornada de partidos
 *
 *    const partidos = [
 *      { local: "Barcelona",  visitante: "Madrid",    golesLocal: 3, golesVisitante: 1, jornada: 1 },
 *      { local: "Sevilla",    visitante: "Valencia",  golesLocal: 1, golesVisitante: 1, jornada: 1 },
 *      { local: "Atlético",   visitante: "Villarreal",golesLocal: 2, golesVisitante: 0, jornada: 1 },
 *      { local: "Betis",      visitante: "Getafe",    golesLocal: 0, golesVisitante: 1, jornada: 2 },
 *      { local: "Madrid",     visitante: "Atlético",  golesLocal: 2, golesVisitante: 2, jornada: 2 },
 *      { local: "Valencia",   visitante: "Barcelona", golesLocal: 1, golesVisitante: 4, jornada: 2 },
 *    ];
 * 
 * 
 *
 *    - Usa map para añadir a cada partido una propiedad "resultado":
 *        "Victoria local" si golesLocal > golesVisitante
 *        "Victoria visitante" si golesLocal < golesVisitante
 *        "Empate" si son iguales.
 * 
 *
 *    - Usa filter para obtener solo los partidos de la jornada 2.
 *
 *    - Usa reduce para calcular el total de goles marcados en toda la liga
 *      (suma golesLocal + golesVisitante de cada partido).
 *
 *    - Usa forEach para mostrar cada partido como en una quiniela:
 *        "Barcelona 3 - 1 Madrid → 1"   (1 = local, X = empate, 2 = visitante)
 *
 *    - Usa find para localizar el primer partido en el que jugó el "Madrid"
 *      (como local O como visitante). Muestra el marcador.
 *
 *    - Usa some para comprobar si hubo algún partido con más de 4 goles en total.
 *
 *    - Usa every para comprobar si todos los partidos de la jornada 1
 *      tuvieron al menos un gol.
 *      Pista: encadena filter y every.
 *
 *    - Usa reduce para construir un objeto que cuente cuántas victorias locales,
 *      visitantes y empates hubo en total.
 *      Ejemplo resultado: { local: 3, visitante: 1, empate: 2 }
 *      Pista: el valor inicial del reduce puede ser un objeto {}.
 *
 *    - Usa with para corregir el resultado del partido Betis-Getafe (índice 3):
 *      los goles del Betis fueron 1, no 0.
 *
 *    - Usa reverse (sin mutar el original) para mostrar los partidos
 *      de la última jornada a la primera.
 *
 * 
 * */

const separator = () => {
     console.log("\n \n ");
}
console.log("Ejercicio 9 ");



const partidos = [
     { local: "Barcelona", visitante: "Madrid", golesLocal: 3, golesVisitante: 1, jornada: 1, },
     { local: "Sevilla", visitante: "Valencia", golesLocal: 1, golesVisitante: 1, jornada: 1 },
     { local: "Atlético", visitante: "Villarreal", golesLocal: 2, golesVisitante: 0, jornada: 1 },
     { local: "Betis", visitante: "Getafe", golesLocal: 0, golesVisitante: 1, jornada: 2 },
     { local: "Madrid", visitante: "Atlético", golesLocal: 2, golesVisitante: 2, jornada: 2 },
     { local: "Valencia", visitante: "Barcelona", golesLocal: 1, golesVisitante: 4, jornada: 2 },
];


const partidos1 = partidos.map(partido => {

     if (partido["golesLocal"] > partido["golesVisitante"]) {
          return { ...partido, resultado: "victoria Local" }

     }
     else if (partido["golesLocal"] === partido["golesVisitante"]) {
          return { ...partido, resultado: "empate " }
     } else {
          return { ...partido, resultado: "victoria Local" }
     }
}
)
console.log(partidos1);

separator()


const jornadados = partidos.filter(partido => partido["jornada"] === 2)
console.log(jornadados);
separator()

sumaGoles = partidos.reduce((acumulador, partido) =>


     (partido["golesLocal"] + partido["golesVisitante"]) + acumulador

     , 0)
console.log("La suma total de goles es :  ", Number(sumaGoles));
separator()






partidos1.forEach(partido => {

     if (partido.golesLocal > partido.golesVisitante) {
          resultado = 1
     }
     else if (partido.golesLocal < partido.golesVisitante) {

          resultado = 2
     } else {
          resultado = "X"

     }


     console.log(partido["local"] + " " + partido["golesLocal"] + " - " + partido["golesVisitante"] + " " + partido["visitante"] + " → " + resultado)
})
separator()





const primerPartido = partidos.find(partidos => partidos.local || partidos.visitante === "Madrid")
console.log(primerPartido);

separator()







const masDeCuatroGoles = partidos.some(parido => parido.golesLocal + parido.golesVisitante > 4)

masDeCuatroGoles ? console.log("Si hay partidos con mas de 4 goles en total") : console.log("no  hay partidos con mas de 4 goles en total");




const jornada1 = partidos.filter(partido => partido["jornada"] === 1)
const golesJornada1 = partidos.every(partido => partido.golesLocal + partido.golesVisitante > 0)

golesJornada1 ? console.log("si, todos los partidos de la jornada 1 tuvieron al menos un gol") : console.log("no, todos los partidos de la jornada 1 tuvieron un gol ");

const nuevosPartidos = partidos.with(3, {
     ...partidos[3],
     golesLocal: 1
})
console.log(nuevosPartidos);


const vuelta = partidos.toReversed()
console.log(vuelta);
console.log(partidos);

separator()
console.log("Ej 10:");

/*
 * 10. Gestión de alumnos con notas por asignatura
 *
 *    const alumnos = [
 *      {
 *        nombre: "Carmen",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 7.5 },
 *          { nombre: "Lengua",      nota: 8.0 },
 *          { nombre: "Historia",    nota: 6.5 },
 *          { nombre: "Inglés",      nota: 9.0 },
 *        ]
 *      },
 *      {
 *        nombre: "Roberto",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 4.0 },
 *          { nombre: "Lengua",      nota: 5.5 },
 *          { nombre: "Historia",    nota: 3.5 },
 *          { nombre: "Inglés",      nota: 6.0 },
 *        ]
 *      },
 *      {
 *        nombre: "Elena",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 9.5 },
 *          { nombre: "Lengua",      nota: 8.5 },
 *          { nombre: "Historia",    nota: 9.0 },
 *          { nombre: "Inglés",      nota: 8.0 },
 *        ]
 *      },
 *      {
 *        nombre: "David",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 5.0 },
 *          { nombre: "Lengua",      nota: 4.5 },
 *          { nombre: "Historia",    nota: 6.0 },
 *          { nombre: "Inglés",      nota: 5.5 },
 *        ]
 *      },
 *      {
 *        nombre: "Isabel",
 *        asignaturas: [
 *          { nombre: "Matemáticas", nota: 6.0 },
 *          { nombre: "Lengua",      nota: 7.0 },
 *          { nombre: "Historia",    nota: 5.5 },
 *          { nombre: "Inglés",      nota: 7.5 },
 *        ]
 *      },
 *    ];
 *
 *    - Usa map para crear un nuevo array donde cada alumno tenga:
 *        · nombre
 *        · promedio: la media de sus notas (usa reduce sobre sus asignaturas)
 *        · estado: "Aprobado" si el promedio >= 5, "Suspenso" si no.
 *      Pista: necesitarás un reduce DENTRO del map para calcular el promedio.
 *
 *    - Usa filter sobre el array del punto anterior para obtener
 *      solo los alumnos aprobados.
 *
 *    - Usa find para localizar al alumno que tenga alguna asignatura
 *      suspensa (nota < 5). Muestra su nombre y qué asignatura ha suspendido.
 *      Pista: usa some dentro del find para buscar en sus asignaturas.
 *
 *    - Usa forEach para mostrar el boletín de notas de cada alumno:
 *        "Carmen:"
 *        "  · Matemáticas: 7.5"
 *        "  · Lengua: 8.0"
 *        "  ..."
 *      Pista: usa forEach anidado para recorrer las asignaturas de cada alumno.
 *
 *    - Usa some para comprobar si algún alumno tiene un promedio mayor de 9.
 *      Pista: calcula el promedio dentro del some con reduce.
 *
 *    - Usa every para comprobar si todos los alumnos aprueban Inglés.
 *      Pista: usa find dentro del every para buscar la asignatura.
 *
 *    - Usa reduce para calcular la nota media global de toda la clase
 *      (la media de todos los promedios individuales).
 *
 *    - Usa with para actualizar las asignaturas de Roberto (índice 1)
 *      con las mismas pero con la nota de Matemáticas corregida a 5.0.
 *      Pista: tendrás que construir el nuevo array de asignaturas con map y with.
 *
 *    - Usa reverse (sin mutar el original) y forEach para mostrar
 *      la lista de alumnos en orden inverso.
 *
 *    - Usa map y toString para obtener una cadena con todos los nombres.
 *
 * */


const alumnos = [
     {
          nombre: "Carmen",
          asignaturas: [
               { nombre: "Matemáticas", nota: 7.5 },
               { nombre: "Lengua", nota: 8.0 },
               { nombre: "Historia", nota: 6.5 },
               { nombre: "Inglés", nota: 9.0 },
          ]
     },
     {
          nombre: "Roberto",
          asignaturas: [
               { nombre: "Matemáticas", nota: 4.0 },
               { nombre: "Lengua", nota: 5.5 },
               { nombre: "Historia", nota: 3.5 },
               { nombre: "Inglés", nota: 6.0 },
          ]
     },
     {
          nombre: "Elena",
          asignaturas: [
               { nombre: "Matemáticas", nota: 9.5 },
               { nombre: "Lengua", nota: 8.5 },
               { nombre: "Historia", nota: 9.0 },
               { nombre: "Inglés", nota: 8.0 },
          ]
     },
     {
          nombre: "David",
          asignaturas: [
               { nombre: "Matemáticas", nota: 5.0 },
               { nombre: "Lengua", nota: 4.5 },
               { nombre: "Historia", nota: 6.0 },
               { nombre: "Inglés", nota: 5.5 },
          ]
     },
     {
          nombre: "Isabel",
          asignaturas: [
               { nombre: "Matemáticas", nota: 6.0 },
               { nombre: "Lengua", nota: 7.0 },
               { nombre: "Historia", nota: 5.5 },
               { nombre: "Inglés", nota: 7.5 },
          ]
     },
];




console.log(alumnos[0].nombre);




const nAlumnos = alumnos.map(alumno => {

     let notas = alumno.asignaturas.reduce((acumulador, item) => item.nota + acumulador, 0)
     notas /= alumno.asignaturas.length

     return {


          nombre: alumno.nombre,
          promedio: notas

     }
})

console.log(nAlumnos);


const aprobados = nAlumnos.filter(a=> a.promedio > 5 )

console.log("alumnos aprobados = " , aprobados);

separator( )
const suspenso = alumnos.filter(s => s.asignaturas.some(a => a.nota < 5 ))
for(let s of suspenso){
     for(let nota of s.asignaturas){
          if (nota.nota < 4 ) {
               console.log(s.nombre + " : ", nota.nombre);
               
               
          }
     }
}





















