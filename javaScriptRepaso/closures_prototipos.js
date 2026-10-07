// function exterior() {
//
//     let saludo = "Hola mundo";
//
//     function interior() {
//         console.log(saludo + ", nombre: Camilo");
//     }
//
//     return {
//         generico: saludo,
//         interior
//     };
// }
//
// let ejemplo = exterior(); // {generico: saludo, interior: interior}
//
// console.log(ejemplo["generico"]);
// console.log(ejemplo.generico);
// ejemplo.interior()

function base_de_datos() {
    let carrito = []; // []

    function add_producto(nombre) {
        carrito.push(nombre);
    }

    function del_producto(nombre) {
        carrito = carrito.filter(item => { if (item !== nombre) { return item; } })
    }

    function borrar_carrito() {
        carrito = []
    }

    function list_productos() {
        console.log(carrito.length);
        carrito.forEach(producto => {
            console.log(producto);
        })
    }


    return {
        carrito,
        listar: list_productos,
        add_producto,
        del_producto,
        borrar_carrito
    }
}


const ddbb = base_de_datos();
// ddbb.listar()
//
// ddbb.add_producto("Perrito caliente")
// ddbb.listar()
// ddbb.add_producto("Pizza")
// ddbb.listar()
// ddbb.del_producto("Perrito caliente")
// ddbb.listar()
// ddbb.add_producto("Perrito caliente")
// ddbb.listar()
// ddbb.borrar_carrito()
// ddbb.listar()





/*
* Prototipos
* */

function Contador() { // 15MB
    let cont = 0;

    const incrementar = () => {
        cont++;
    }

    const decrementar = () => {
        cont--;
    }

    const mostrar = () => {
        console.log(cont);
    }

    return {
        incrementar,
        decrementar,
        mostrar
    }
}

const contador = Contador(); // 15MB
const contador1 = Contador(); // 15MB
contador.incrementar(); // 15MB
contador.mostrar(); // 15MB

function Contador2() { // 2MB
    this.cont = 0; // PROP. Pub.
}

Contador2.prototype.incrementar = function () { // 3MB
    this.cont++;
};

Contador2.prototype.decrementar = function () { // 3MB
    this.cont--;
};

const contado2 = new Contador2(); // 2MB
const contado3 = new Contador2(); // 2MB
contado2.incrementar(); // 5MB
console.log(contado2.cont)

/*
* 
* 1. Calculadora
*   
* Crea una calculadora que recuerde el resultado en memoria. Debe de tener los métodos suma(), resta(), resultado().
* 
* */
function calculadora() { this.resultado = 0 }
calculadora.prototype.sumar = function (numero) {
    this.resultado += numero
    console.log(this.resultado);


}
const calculadora1 = new calculadora()
calculadora1.sumar(50)

/*
*
* 2. Sistema de Login
*
* Crea un sistema que permita hasta 3 intentos. Si se superan, bloquea la cuenta. Crea los atributos/variables y
* funciones que consideres que son necesarias para desarrollar este ejercicio.
*
* */

const usuarios = [
    {
        usuario: "juan",
        contraseña: "1234"
    },
    {
        usuario: "ana",
        contraseña: "1111"
    },
    {
        usuario: "pedro",
        contraseña: "2222"
    },
    {
        usuario: "lucia",
        contraseña: "3333"
    },
    {
        usuario: "carlos",
        contraseña: "0000"
    }
];








function Login(usuarios) {
    this.usuarioAceptado;
    this.intentos = 3
    this.correcta = false
   this.bloqueado = JSON.parse(localStorage.getItem("bloqueado")) || []
    this.userAcept = false;
    this.limpiar =false;
}

Login.prototype.VerificarUsuario = function () {
    while (this.intentos > 0 && !this.correcta && !this.bloqueado.includes(this.usuarioAceptado)&& !this.limpiar) {
        if(!this.userAcept){
            let usuario = prompt("cual es tu usuario ")
            if (usuario==1) {
                 console.log("ENTRA AQUÍ")
                localStorage.clear()
                this.limpiar = true
                
            }else{
        if (!usuarios.some(u=> u.usuario == usuario)) {
            this.intentos -= 1
        }
        else{this.userAcept = true
            this.usuarioAceptado= usuario

        }}
    
    }
        else {
            let contraseña = prompt("cual es tu contraseña")
            if (!usuarios.some(u=>u.usuario==this.usuarioAceptado && contraseña==u.contraseña)) { this.intentos -= 1 }
            else {

                console.log("Contraseña correcta ");

                this.correcta= true
            }

        }

    }
    if(!this.correcta && !this.limpiar){
        this.bloqueado.push(this.usuarioAceptado)
         localStorage.setItem("bloqueado", JSON.stringify(this.bloqueado))

    console.log("usuario bloqueadoo");
    
   }
}


Login.prototype.mostrarBloqueados = function() {
    alert("usuarios bloqueados = "+ this.bloqueado)
    
}



const login = new Login()

login.VerificarUsuario(usuarios)

   login.mostrarBloqueados()





//const usuarios = [
    //"juan",
   // "ana",
   // "pedro"
//];

//localStorage.setItem("usuarios", JSON.stringify(usuarios));



// Cuando recuperamos el dato con getItem(),
// obtenemos un STRING.
//
// Para volver a convertirlo en un array usamos
// JSON.parse().

//let usuariosGuardados = JSON.parse(
  //  localStorage.getItem("usuarios")
//);

//console.log(usuariosGuardados);



// Convierte un ARRAY u OBJETO → STRING

//let array = ["juan", "ana", "pedro"];

//let texto = JSON.stringify(array);

//console.log(texto);

// Resultado:
// ["juan","ana","pedro"]




// Convierte un STRING → ARRAY u OBJETO

//let texto2 = '["juan","ana","pedro"]';

//let array2 = JSON.parse(texto2);

//console.log(array2);


// Si no existe "usuarios" en localStorage,
// getItem() devuelve null.
//
// Con || [] hacemos que, si no existe,
// se cree un array vacío.

//let usuarios2 =
    //JSON.parse(localStorage.getItem("usuarios")) || [];

//console.log(usuarios2);




//let bloqueados =
    //JSON.parse(localStorage.getItem("bloqueado")) || [];


// Añadimos un usuario al array
//bloqueados.push("juan");


// Guardamos el array actualizado
//localStorage.setItem(
  //  "bloqueado",
    //JSON.stringify(bloqueados)
//);


//resumen

// GUARDAR
//localStorage.setItem("clave", "valor");

// OBTENER
//localStorage.getItem("clave");

// ELIMINAR UNO
//localStorage.removeItem("clave");

// ELIMINAR TODO
//localStorage.clear();

// ARRAY/OBJETO → STRING
//JSON.stringify();

// STRING → ARRAY/OBJETO
//JSON.parse();








