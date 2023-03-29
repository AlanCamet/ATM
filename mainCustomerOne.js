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
    
    {name:'Adrian Velázquez',
    balance: 292,
    acount: 32638,
    nip: 9319}
]
const title = document.querySelector("#title")
const nameUno = document.querySelector(".nameUno")
const acountUno = document.querySelector(".acountUno")
const nipUno = document.querySelector(".nipUno")
const screenMsg = document.querySelector(".screenMsg")



//Eventos
title.textContent= customers[0].name
function textUno(string){
    nameUno.textContent = string.name;
    acountUno.textContent = string.acount;
    nipUno.textContent = string.nip;
} textUno(customers[0])

screenMsg.textContent = "Hola, " + (customers[0].name)