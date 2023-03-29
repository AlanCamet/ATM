//Variables
const customers =[
    {name: 'Alan camet',
    balance: 250,
    acount: 13572,
    nip: 9704},

    {name:'Melody Vargas',
    balance: 320,
    acount: 23627,
    nip: 2004},
    
    {name:'Adrian Camet',
    balance: 292,
    acount: 32638,
    nip: 9319}
]
const client = customers[0]
const title = document.querySelector("#title")
const nameUno = document.querySelector(".nameUno")
const acountUno = document.querySelector(".acountUno")
const nipUno = document.querySelector(".nipUno")

const screenMsg = document.querySelector(".screenMsg")
const screen = document.querySelector("#screen")
const screenUno = document.querySelector(".screenUno")
const pregunta = document.querySelector(".pregunta")
const saldo = document.querySelector(".saldo")
const ingresar = document.querySelector(".ingresar")
const retirar = document.querySelector(".retirar")

const buttonTop = document.querySelector(".buttonTop")
const buttonMiddle = document.querySelector(".buttonMiddle")
const buttonBottom = document.querySelector(".buttonBottom")
const buttonEnter = document.querySelector(".botonLogin")
const buttonCancel = document.querySelector(".buttonCancel")
const buttonExit = document.querySelector(".buttonExit")

let resultado

//Eventos
title.textContent= client.name                       //CAMBIO TITULO EN EL NAVEGADOR

function textUno(string){                           //CONTENIDO DE TARJETA
    nameUno.textContent = string.name;
    acountUno.textContent = string.acount;
    nipUno.textContent = string.nip;
} textUno(client)

screenMsg.textContent = "Hola, " + (client.name)      //SALUDO PERSONALIZADO EN PANTALLA

function cancelEvent(){                                        //EL BOTON CANCELAR FUNCIONA DESDE DONDE ESTES PARADO
       window.location = "customerOne.html"
}
buttonCancel.onclick = cancelEvent

function exitEvent(){
    window.location = "index.html"
}
buttonExit.onclick = exitEvent

function saldoEvent() {                                     //PANTALLA PARA VER EL SALDO
        screenMsg.textContent = "Your account balance is:"
        pregunta.textContent = "$" + client.balance + " USD"  
        saldo.textContent = ""
        ingresar.textContent = ""
        retirar.textContent = ""
        screenUno.innerHTML ='<p class="cancelMsg">Press CANCEL to return</p>'
} 
buttonTop.onclick = saldoEvent

function ingresarEvent(){
    window.location = "customerOneIngresar.html"
}
buttonMiddle.onclick = ingresarEvent

function retirarEvent(){
    window.location = "customerOneRetirar.html"
}
buttonBottom.onclick = retirarEvent


