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

const title = document.querySelector("#title")
const nameTres = document.querySelector(".nameTres")
const acountTres = document.querySelector(".acountTres")
const nipTres = document.querySelector(".nipTres")
const boton = document.querySelector(".botonLogin")
const screenMsg = document.querySelector(".screenMsg")


//Eventos

title.textContent= customers[2].name

function textTres(string){
    nameTres.textContent = string.name;
    acountTres.textContent = string.acount;
    nipTres.textContent = string.nip;
} textTres(customers[2])

screenMsg.textContent = "Hola, " + (customers[2].name)

