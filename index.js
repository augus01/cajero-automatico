const cuentas = [
    {
        nombre: "José Silva",
        saldo: 900,
        contrasena: "123"
    },
    {
        nombre: "Macarena Pardo",
        saldo: 523,
        contrasena: "12345"
    },
    {
        nombre: "Victor Gonzalez",
        saldo: 123,
        contrasena: "123456"
    },
    {
        nombre: "Anyela Cid",
        saldo: 780,
        contrasena: "1234567"
    }
];
const menuInteraccion =
    `<li><button class="boton-interaccion" onclick="consultarSaldo()">Consultar saldo</button></li>
    <li><button  class="boton-interaccion" onclick="ingresarMonto()">Ingresar monto</button></li>
    <li><button  class="boton-interaccion" onclick="retirarSaldo()"> Retirar Monto </button></li>`

document.getElementById("salida-1").innerHTML = "Bienvenid@!!"
document.getElementById("menu-interacciones").innerHTML = ` Inicie seción para utilizar todas las interacciones`

var inputUser = ''
var nuevoSaldo = ''
var saldoReal = ''

const validarForm = () => {
    let persona = document.getElementById("name").value
    let contraseña = document.getElementById("password").value
    cuentas.forEach((element) => {
        if (persona == element.nombre && contraseña == element.contrasena) {
            document.getElementById("menu-interacciones").innerHTML = `${menuInteraccion}`
            document.getElementById("form-dinamico").innerHTML = `<form onSubmit="return validarForm()" id="incia-secion" styles="display:none"></form>`
            document.getElementById("salida-1").innerHTML = `Bienvenid@ ${element.nombre}`
            document.getElementById("salida-2").innerHTML = `Escoja una de las interacciones para realizar en tu cuenta`
            saldoReal = element.saldo
        }
    })
    return (false)
}

const limpiarInput = () => {
    document.getElementById("introduce-num").innerHTML = ''
}

const remplazarSaldo = (newSaldo) => {
    cuentas.forEach((element) => {
        if (element.saldo == saldoReal) {
            element.saldo = newSaldo
            saldoReal = element.saldo
        }
    })
}


const consultarSaldo = () => {
    document.getElementById("salida-dinamica").innerHTML = `<p class="texto-dinamico" id="salida-3">  Tu cuenta tiene un total de ${saldoReal} dólares</p>`
}
const mostrarNumeros = (valor) => {
    let valorRetirar =  document.getElementById("introduce-num").innerHTML += valor
    parseInt(valorRetirar)
    if (valorRetirar.length <= 3) {
        inputUser = parseInt(valorRetirar)
    }else if (valorRetirar.length >= 4) {
        valorRetirar = document.getElementById("introduce-num").innerHTML = ``
        inputUser = ``
        document.getElementById("salida-dinamica").innerHTML = `<p class="texto-dinamico"> Solo se pueden introducir números de 3 dijitos</p> <img class="img-responsive" src="https:/c.tenor.com/INGHdW5pQjEAAAAC/chainsaw-man.gif">`
        
    }
}

const retirarSaldo = () => {
    document.getElementById("caja-panel-numerico").innerHTML = ` <ul class="num-interacciones">
    <button class="button-num" onclick="mostrarNumeros(1)">1</button>
    <button class="button-num" onclick="mostrarNumeros(2)">2</button>
    <button class="button-num" onclick="mostrarNumeros(3)">3</button>
    <button class="button-num" onclick="mostrarNumeros(4)">4</button>
    <button class="button-num" onclick="mostrarNumeros(5)">5</button>
    <button class="button-num" onclick="mostrarNumeros(6)">6</button>
    <button class="button-num" onclick="mostrarNumeros(7)">7</button>
    <button class="button-num" onclick="mostrarNumeros(8)">8</button>
    <button class="button-num" onclick="mostrarNumeros(9)">9</button>
    <button class="button-num" onclick="limpiarInput()"><i class="bi bi-x-lg"></i> Eliminar</button>
    <button class="button-num" onclick="mostrarNumeros(0)">0</button>
    <button class="button-num" onclick="restarSaldo()"><i class="bi bi-arrow-right"></i> Siguiente</button>
</ul>`
    document.getElementById("salida-dinamica").innerHTML = `Ingresa el dinero a retirar en el panel numerico`
}



const restarSaldo = () => {
    document.getElementById("introduce-num").innerHTML = ''
    if (saldoReal - inputUser < 10) {
        document.getElementById("salida-dinamica").innerHTML = `Tu cuenta no puede tener menos de 10 dólares`
    } else if (inputUser <= saldoReal) {
        nuevoSaldo = saldoReal - inputUser
        inputUser = ''
        remplazarSaldo(nuevoSaldo)
        document.getElementById("salida-dinamica").innerHTML = `Tu nuevo saldo es ${nuevoSaldo} dólares`
    } else {
        document.getElementById("salida-dinamica").innerHTML = `Tu cuenta no cuenta con el saldo suficiente para esta transacción`
    }
    
    document.getElementById("caja-panel-numerico").innerHTML =`<ul class="num-interacciones" styles="display:none"></ul> <img class="img-responsive" src="https://c.tenor.com/INGHdW5pQjEAAAAC/chainsaw-man.gif">`
}
const ingresarMonto = () => {
    document.getElementById("caja-panel-numerico").innerHTML = `
    <ul class="num-interacciones">
    <button class="button-num" onclick = "mostrarNumeros(1)">1</button>
    <button class="button-num" onclick="mostrarNumeros(2)">2</button>
    <button class="button-num" onclick="mostrarNumeros(3)">3</button>
    <button class="button-num" onclick="mostrarNumeros(4)">4</button>
    <button class="button-num" onclick="mostrarNumeros(5)">5</button>
    <button class="button-num" onclick="mostrarNumeros(6)">6</button>
    <button class="button-num" onclick="mostrarNumeros(7)">7</button>
    <button class="button-num" onclick="mostrarNumeros(8)">8</button>
    <button class="button-num" onclick="mostrarNumeros(9)">9</button>
    <button class="button-num" onclick=" limpiarInput()"><i class="bi bi-x-lg"></i> Eliminar</button>
    <button class="button-num" onclick="mostrarNumeros(0)">0</button>
    <button class="button-num" onclick="sumarSaldo()"><i class="bi bi-arrow-right"></i> Siguiente</button>
    </ul>`
    document.getElementById("salida-dinamica").innerHTML = `Ingresa el dinero a retirar en el panel numerico`
}

const sumarSaldo = () => {
    document.getElementById("salida-dinamica").innerHTML = `Ingresa el dinero a retirar en el panel numerico`
    document.getElementById("introduce-num").innerHTML = ''
    
    if (saldoReal + inputUser > 990) {
        document.getElementById("salida-dinamica").innerHTML = `Tu cuenta no puede tener más de 990 dolares`
    } else {
        nuevoSaldo = saldoReal + inputUser
        inputUser = ''
        remplazarSaldo(nuevoSaldo)
        document.getElementById("salida-dinamica").innerHTML = `Tu nuevo saldo es ${ nuevoSaldo } dólares`
    }
    document.getElementById("caja-panel-numerico").innerHTML =`<ul class="num-interacciones" styles="display:none"></ul> <img class="img-responsive" src="https://c.tenor.com/INGHdW5pQjEAAAAC/chainsaw-man.gif">`
}


