const cardsContainer = document.querySelector("#cardsContainer")
let data =[];

//consumo de JSON
async function getJSON(customer){
    let request = await fetch('customers.json')
    let response = await request.json()
    for(let i=0; i<response.length; i++){
        createData(response[i] , i)
    }
}
getJSON()

//creando los usuarios dentro del array data
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
    let banckName = document.createElement("p")
    banckName.classList.add("bankName")
    banckName.textContent = "DEV.f Bank"
    let divText = document.createElement("div") 
    divText.classList.add("data")
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
    divText.appendChild(name)
    divText.appendChild(acount)
    divText.appendChild(nip)
    div.appendChild(img)
    div.appendChild(banckName)
    div.appendChild(divText)
    cardsContainer.appendChild(div)
}

const screen = document.querySelector(".contentScreen")
const enter = document.querySelector("#enter")
const inpuAcount = document.querySelector(".screenInputAcount")
const inputNip = document.querySelector(".screenInputNip")

function cleanScreen(){
    screen.innerHTML = ''
}

function login(event){
    event.preventDefault()
    let acount = inpuAcount.value
    let nip = inputNip.value
    for(let i=0; i<data.length; i++){
        if (acount == data[i].acount & nip == data[i].nip){
            console.log("holaperrillo")   
            break;
        }else{
            console.log("poraqui pasó")
        }    }
    cleanScreen()
}

enter.addEventListener("click", login)