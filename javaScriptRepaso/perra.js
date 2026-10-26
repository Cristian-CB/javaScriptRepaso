
/*
## Ejercicio 5

Crea una clase llamada "CuentaBancaria" con:

- constructor(titular, saldoInicial). Guarda el titular y el saldo. 
El historial empieza vacío.
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

class cuentaBancaria {

  constructor(titular,saldoInicial) {
    
    this.titular = titular
    this.saldoInicial = saldoInicial
    this.historial=[]

  }
   ingresar(cantidad) {
    this.saldoInicial+=cantidad;
    this.historial.push("ingreso: " + cantidad + " saldo: " + this.saldoInicial)
    
  }
    retirar(cantidad) {
    this.saldoInicial-=cantidad;
    this.historial.push("retiro: " + cantidad + " saldo: " + this.saldoInicial)
    
  }

  verHistorial (){
    this.historial.forEach((element,index) => {
      
      console.log(index + 1 , element);
      
      
    });

  }





}

const cuentaArturo = new cuentaBancaria("camilo",500)
cuentaArturo.ingresar(200)
cuentaArturo.ingresar(200)
cuentaArturo.ingresar(200)
cuentaArturo.ingresar(200)
cuentaArturo.verHistorial()