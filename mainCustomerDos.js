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
const nameDos = document.querySelector(".nameDos")
const acountDos = document.querySelector(".acountDos")
const nipDos = document.querySelector(".nipDos")
const boton = document.querySelector(".botonLogin")


//Eventos
title.textContent= customers[1].name

function textDos(string){
    nameDos.textContent = string.name;
    acountDos.textContent = string.acount;
    nipDos.textContent = string.nip;
} textDos(customers[1])

boton.onclick = login 

