/*
* 
* 4. Tenéis dos valores guardados como strings ("42" y "8"). Si los sumas directamente,
* debería de aparecer en consola "428". Usa el métdo correspondiente para efectuar 
* una suma de valores numéricos reales e imprime el resultado por consola.
* 
* */


let valor1="42",valor2="8"
console.log(valor1 + valor2);

let suma = parseInt(valor1) + parseInt (valor2)

console.log(suma);




/*
* 
* 5. Crea un objeto llamado alumno, con las claves nombre, edad y nota. Luego, Añade 
* una clave llamada "aprobado" con el valor true o false si la nota es mayor o igual a 6.
* Muestra el objeto final en consola.
* 
* */


let alumno = {

nombre : "cristian" , 
edad : 18 , 
nota : 5





}


if (alumno.nota <6){


alumno["aprobado"] = false

}


else{
    alumno["aprobado"] = true
}


console.log(alumno)


/*
* 

11:56

Camilo says:/*
*
* 6. Crea un objeto llamado producto, con las claves nombre y precio. Luego, haciendo uso de prompt()
* Añade la cantidad de articulos que tiene ese producto. Imprime el objeto final.
*
* */

//let cantidad = prompt("Introduce la cantidad") 


let producto = {nombre : "Entradas cine",
    precio: 10.9
}



//let cantidad = prompt("introduce la cantidad")

producto["cantidad"] = cantidad

console.log(producto)


function pintarFoto() {

    
    let eresGay = document.getElementById("eresGay").value
    if(eresGay === "si"){
    const imagen = document.createElement("img")
    imagen.src= "images.jpg"

    document.getElementById("contenedor").appendChild(imagen)
}

else{

    const imagen = document.createElement("img")
   
   
    imagen.src= "imagesd.jpg"

    document.getElementById('contenedor').innerHTML += '<h2>Eso diria un gay</h2>';   

    document.getElementById("contenedor").appendChild(imagen)
    
    

    
}

}



// isNaN comprueba si es un sumero 







