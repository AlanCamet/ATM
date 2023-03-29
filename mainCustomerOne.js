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
let client = customers[0]
const title = document.querySelector("#title")
const nameUno = document.querySelector(".nameUno")
const acountUno = document.querySelector(".acountUno")
const nipUno = document.querySelector(".nipUno")

const screenMsg = document.querySelector(".screenMsg")
const screen = document.querySelector("#screen")
const pregunta = document.querySelector(".pregunta")
const saldo = document.querySelector(".saldo")
const ingresar = document.querySelector(".ingresar")
const retirar = document.querySelector(".retirar")

const buttonTop = document.querySelector(".buttonTop")
const buttonMiddle = document.querySelector(".buttonMiddle")
const buttonBottom = document.querySelector(".buttonBottom")
const buttonEnter = document.querySelector(".botonLogin")

let controlState = false
let resultado
/* let enter = enterMoney */
/* let enterMoney = document.querySelector(".enterMoney").value */


//Eventos
/* function suma(string){
    resultado = string.balance + enterMoney
    string.balance = resultado
} suma(client)
console.log(client.balance) */

title.textContent= client.name                       //CAMBIO TITULO

function textUno(string){                           //CONTENIDO DE TARJETA
    nameUno.textContent = string.name;
    acountUno.textContent = string.acount;
    nipUno.textContent = string.nip;
} textUno(client)

screenMsg.textContent = "Hola, " + (client.name)      //SALUDO PERSONALIZADO EN PANTALLA



function ingresarEvent (){ 
    let enterMoney                             //PANTALLA PARA INGRESAR UN MONTO
    if(!controlState){  
        screenMsg.textContent = "How much do you want to enter?"
        pregunta.innerHTML ='<input type="text" class="enterMoney">'
        enterMoney = document.querySelector(".enterMoney").value
        saldo.textContent = ""
        ingresar.textContent = "Go back"
        retirar.textContent = "Press Enter"
        controlState = true 
    }else{
        screenMsg.textContent = "Hola, " + (client.name)
        pregunta.textContent = "¿Que operación quieres realizar?"
        saldo.textContent = "Consultar saldo"
        ingresar.textContent = "Ingresar monto"
        retirar.textContent = "Retirar monto"
        controlState = false
    }
    
    function suma(string){
        resultado = string.balance + enterMoney
        string.balance = resultado
    } suma(client)
    buttonEnter.onclick = suma
    console.log(client.balance)
}
buttonMiddle.onclick = ingresarEvent

function saldoEvent() {                                     //PANTALLA PARA VER EL SALDO
    if(!controlState){
        screenMsg.textContent = "Your account balance is:"
        pregunta.textContent = "$" + client.balance + " USD"
        saldo.textContent = "Go back"
        ingresar.textContent = ""
        retirar.textContent = ""
        controlState = true
    }else{
        screenMsg.textContent = "Hola, " + (client.name)
        pregunta.textContent = "¿Que operación quieres realizar?"
        saldo.textContent = "Consultar saldo"
        ingresar.textContent = "Ingresar monto"
        retirar.textContent = "Retirar monto"
        controlState = false
    }
}
buttonTop.onclick = saldoEvent


