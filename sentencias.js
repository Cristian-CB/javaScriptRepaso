let a = 5 , b= 10 , c="10"

//==
if (b==c) {
    console.log(" b = c");
    
    
}
else {
    console.log("aqui no entra");
    
}



// ===
if (b===c) {
    console.log(" no entra");
    
    
}
else {
    console.log("aqui  entra");
    
}

// switch
switch (a) {
    case 5:
        
        console.log("entraste");
        
        
        break;

    default:
        break;
}



// for 

for(let i=0;i<a;i++){


    console.log(i)
}


// for solo diccionarios 
const persona = {nombre :" ana" , edad : 25}
for(p in persona){console.log(persona[p])}

// for para todo

const valores = [true,1,"camilo"]
for (let p of valores) {
    console.log(p)
    
}


const alumnos = ["a","b","c"]

for(p of alumnos){
    if (p == "a"){console.log("alumno encontrado")}
}

let encontrado = false

while (!encontrado){
  let contador=0
    for(let p of alumnos){
    if (p == "a"){console.log(encontrado)
        encontrado= true
    }
    else{contador+=1}

}
if (contador== alumnos.length) { 
    
    console.log("no encontrado")
    encontrado= true}
}