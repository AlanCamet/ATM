//Variables
const nameUno = document.querySelector(".nameUno")
const acountUno = document.querySelector(".acountUno")
const nipUno = document.querySelector(".nipUno")
const nameDos = document.querySelector(".nameDos")
const acountDos = document.querySelector(".acountDos")
const nipDos = document.querySelector(".nipDos")
const nameTres = document.querySelector(".nameTres")
const acountTres = document.querySelector(".acountTres")
const nipTres = document.querySelector(".nipTres")

let data =[];

async function getJSON(customer){
    let request = await fetch('customers.json')
    let response = await request.json()
    data = response
    console.log(data , "soy data")
}

getJSON()

const display = [
    {name: nameUno,
    acount: acountUno,
    nip: nipUno
    },

    {name: nameDos,
    acount: acountDos,
    nip: nipDos
    },

    {name: nameTres,
    acount: acountTres,
    nip: nipTres
    }
]
const boton = document.querySelector(".botonLogin")
const buttonExit = document.querySelector(".buttonExit")
const screenInputAcount = document.querySelector(".screenInputAcount")
const uno =document.querySelector(".uno")


//Eventos
function exitEvent(){
    window.location = "index.html"
}
buttonExit.onclick = exitEvent

function textUno(string,display){
    display.name.textContent = string.name;
    display.acount.textContent = string.acount;
    display.nip.textContent = string.nip;
} 
/* textUno(customers[0], display[0])
textUno(customers[1], display[1])
textUno(customers[2], display[2]) */

function login(){
    
    let userAcount = document.querySelector(".screenInputAcount").value
    let userNip = document.querySelector(".screenInputNip").value
    
    if(userAcount == customers[0].acount && userNip == customers[0].nip){
        window.location.href = "customerOne.html"
    } else if(userAcount == customers[1].acount && userNip == customers[1].nip){
        window.location.href = "customerDos.html"
    } else if(userAcount == customers[2].acount && userNip == customers[2].nip){
        window.location.href = "customerTres.html"
    }else {
        alert("Acount or NIP is not valid.")
    } 
}
boton.onclick = login 