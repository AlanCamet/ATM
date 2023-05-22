//Variables
const cardsContainer = document.querySelector("#cardsContainer")

let data =[];

async function getJSON(customer){
    let request = await fetch('customers.json')
    let response = await request.json()
    for(let i=0; i<response.length; i++){
        createData(response[i] , i)
    }
}
getJSON()

function createData(usuario, i){
    const newUser = {
        name: usuario.name,
        balance: usuario.balance,
        acount: usuario.acount,
        nip: usuario.nip
        }
    data.push(newUser)
    printCard(i)
    
}


function printCard(i){
    let img = document.createElement("img")
    img.classList.add("profileImg")
    img.src="assets/profile.png"
    let name = document.createElement("p")
    name.classList.add("name")
    name.textContent = `Name: ${data[i].name}`
    let nip = document.createElement("p")
    nip.classList.add("nip")
    nip.textContent = `Nip: ${data[i].nip}`
    let acount = document.createElement("p")
    acount.classList.add("acount")
    acount.textContent = `Acount: ${data[i].acount}`
    let div = document.createElement("div")
    div.classList.add("card")
    div.appendChild(name)
    div.appendChild(acount)
    div.appendChild(nip)
    cardsContainer.appendChild(div)
}

/* const display = [
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
] */
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