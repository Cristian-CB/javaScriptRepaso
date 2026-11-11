// ============================================================
//  EJERCICIO 3 - Closure: cronómetro [1,5 puntos]
//  Escribe tu solución debajo del enunciado.
// ============================================================

// Crea una función "crearCronometro" usando un closure.
// No recibe parámetros y devuelve un objeto con estos métodos:
//
//   · iniciar()    → arranca el cronómetro desde donde estaba.
//                    Si ya está en marcha: muestra "El cronómetro ya está en marcha."
//
//   · pausar()     → pausa el cronómetro.
//                    Si ya está pausado: muestra "El cronómetro ya está pausado."
//
//   · sumar(seg)   → añade segundos al tiempo acumulado.
//                    Solo funciona si está pausado (si está en marcha, no hace nada).
//
//   · reiniciar()  → pone el tiempo a 0 y lo pausa.
//
//   · get tiempo() → devuelve el tiempo acumulado en segundos.
//
// El tiempo NO debe ser accesible ni modificable desde fuera
// salvo a través de los métodos anteriores.
//
// Verificación (estos console.log deben dar los resultados indicados):
//   const crono = crearCronometro();
//   crono.iniciar();
//   crono.iniciar();           // "El cronómetro ya está en marcha."
//   crono.sumar(30);           // no hace nada (está en marcha)
//   crono.pausar();
//   crono.sumar(30);           // suma 30 segundos
//   console.log(crono.tiempo); // 30
//   crono.reiniciar();
//   console.log(crono.tiempo); // 0




function crearCronometro(){
let iniciado = false;
let segundos = 0;

function iniciar(){
if (iniciado) {
    console.log("el Cronometro ya esta en marcha ");

    
    
}else{
    iniciado=true;
}



}
function pausar(){


    if (!iniciado) {
    console.log("el Cronometro ya esta parado ");

    
    
}else{
    iniciado=false;
}
}

function sumar(seg){


if (iniciado) {
    console.log("pausa primero");
    
    
}else{

segundos += seg;

}


}

function reiniciar(){
segundos = 0;
iniciado = false;

}
return{
get tiempo(){return segundos},
pausar,
reiniciar,
sumar,
iniciar

}
}




  const crono = crearCronometro();
  crono.iniciar();
  crono.iniciar();           // "El cronómetro ya está en marcha."
  crono.sumar(30);           // no hace nada (está en marcha)
  crono.pausar();
  crono.sumar(30);           // suma 30 segundos
  console.log(crono.tiempo); // 30
  crono.reiniciar();
  console.log(crono.tiempo); // 0


