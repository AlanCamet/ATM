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
const nameUno = document.querySelector(".nameUno")
const acountUno = document.querySelector(".acountUno")
const nipUno = document.querySelector(".nipUno")
const nameDos = document.querySelector(".nameDos")
const acountDos = document.querySelector(".acountDos")
const nipDos = document.querySelector(".nipDos")
const nameTres = document.querySelector(".nameTres")
const acountTres = document.querySelector(".acountTres")
const nipTres = document.querySelector(".nipTres")

//Eventos
function textUno(string){
    nameUno.textContent = string.name;
    acountUno.textContent = string.acount;
    nipUno.textContent = string.nip;
} textUno(customers[0])

function textDos(string){
    nameDos.textContent = string.name;
    acountDos.textContent = string.acount;
    nipDos.textContent = string.nip;
} textDos(customers[1])

function textTres(string){
    nameTres.textContent = string.name;
    acountTres.textContent = string.acount;
    nipTres.textContent = string.nip;
} textTres(customers[2])

function login(){
    let userAcount = document.querySelector(".screenInputAcount").value
    let userNip = document.querySelector(".screenInputNip").value
    if(userAcount == customers[0].acount && userNip == customers[0].nip || userAcount == customers[1].acount && userNip == customers[1].nip || userAcount == customers[2].acount && userNip == customers[2].nip){
        window.location = "login.hmtl"
    } else{
        Window.location = "error.html"
    }
} login()