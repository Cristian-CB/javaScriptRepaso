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



function Login() {
    this.usuario = "hola"
    this.contraseña = "hola"
    this.intentos = 3
    this.correcta = false
    this.bloqueado="hola"
}

Login.prototype.VerificarUsuario = function () {
    while (this.intentos > 0 && !this.correcta && this.bloqueado!=this.usuario) {
        let usuario = prompt("cual es tu usuario ")
        if (this.usuario != usuario) {
            this.intentos -= 1
        }
        else {
            let contraseña = prompt("cual es tu contraseña")
            if (this.contraseña != contraseña) { this.intentos -= 1 }
            else {

                console.log("Contraseña correcta ");

                this.correcta= true
            }

        }

    }
    if(!this.correcta || this.bloqueado==this.usuario){
    console.log("usuario bloqueadoo");
    
    return this.correcta}
}



Login.prototype.bloquear=function(){this.bloqueado=this.usuario
    console.log("asfasfas" + this.bloqueado);
}
const login = new Login()

if (!login.VerificarUsuario()){

    login.bloquear()
}







