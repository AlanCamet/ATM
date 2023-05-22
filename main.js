const cardsContainer = document.querySelector("#cardsContainer")
let data =[];
let usuario;

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
const cancel = document.querySelector("#cancel")
const exit = document.querySelector(".buttonExit")
const buttonTop = document.querySelector(".buttonTop")
const buttonMiddle = document.querySelector(".buttonMiddle")
const buttonBottom = document.querySelector(".buttonBottom")
const inpuAcount = document.querySelector(".screenInputAcount")
const inputNip = document.querySelector(".screenInputNip")

function clean(doc){
    doc.innerHTML = ''
}

function login(event){
    event.preventDefault()
    let acount = inpuAcount.value
    let nip = inputNip.value
    for(let i=0; i<data.length; i++){
        if (acount == data[i].acount & nip == data[i].nip){
            usuario = i
            clean(screen)
            inicio()
            break;
        }
    }
    enter.removeEventListener("click",login, true)
}

enter.addEventListener("click", login, true)

function inicio(){
    clean(cardsContainer)
    printCard(usuario)
    
    let h2 = document.createElement("h2")
    h2.textContent = `Hi, ${data[usuario].name}`
    let question = document.createElement("p")
    question.classList.add("question")
    question.textContent = "What operation do you want to perform?"
    let options = document.createElement("div")
    let optionOne = document.createElement("p")
    optionOne.textContent = "Check Balance"
    let optionTwo = document.createElement("p")
    optionTwo.textContent = "Enter"
    let optionThre = document.createElement("p")
    optionThre.textContent = "Withdraw"
    
    options.appendChild(optionOne)
    options.appendChild(optionTwo)
    options.appendChild(optionThre)
    let containerScreen = document.createElement("div")
    containerScreen.classList.add("containerScreen")
    containerScreen.appendChild(h2)
    containerScreen.appendChild(question)
    containerScreen.appendChild(options)
    
    screen.appendChild(containerScreen)
    
    cancel.addEventListener("click",cancelEvent,true)
    buttonTop.addEventListener("click",checkBalance,true)
    buttonMiddle.addEventListener("click",enterScreen,true)
    buttonBottom.addEventListener("click", withdrawScreen, true)

    exit.addEventListener("click", ()=>{
        console.log("hi")
        location.reload()
    } )
}

function cancelEvent(event){
    event.preventDefault()
    clean(screen)
    inicio()
    enter.removeEventListener("click",login, true)
    enter.removeEventListener("click", addMoney, true)
    enter.removeEventListener("click", withdraw, true)
}

function checkBalance(){
    clean(screen)
    let h2 = document.createElement("h2")
    h2.textContent = "Your account balance is:"
    let balance = document.createElement("p")
    balance.classList.add("balance")
    balance.textContent = `$${data[usuario].balance} USD`
    let aviso = document.createElement("p")
    aviso.textContent ="Press CANCEL to return"
    let div = document.createElement("div")
    div.classList.add("checkBalance")
    
    div.appendChild(h2)
    div.appendChild(balance)
    div.appendChild(aviso)

    screen.appendChild(div)
    enter.removeEventListener("click", addMoney, true)
    buttonMiddle.removeEventListener("click",enterScreen,true)
    buttonBottom.removeEventListener("click", withdrawScreen, true)
}


function enterScreen (){
    clean(screen)
    let h2 = document.createElement("h2")
    h2.textContent = "How much do you want to enter?"
    let input = document.createElement("input")
    input.classList.add("inputAdd")
    let aviso = document.createElement("p")
    aviso.textContent = "Press CANCEL to return"
    let div = document.createElement("div")
    div.classList.add("enter")

    div.appendChild(h2)
    div.appendChild(input)
    div.appendChild(aviso)

    screen.appendChild(div)

    enter.addEventListener("click", addMoney,true)
    buttonTop.removeEventListener("click",checkBalance,true)
    buttonBottom.removeEventListener("click", withdrawScreen, true)
}

function addMoney(){
    console.log("AddMoney")
    let inputAdd = parseInt(document.querySelector(".inputAdd").value)
    let balanceActual = data[usuario].balance 
    data[usuario].balance = balanceActual + inputAdd
    checkBalance()
    setTimeout(enterScreen,3000)
}

function withdrawScreen(){
    clean(screen)
    let h2 = document.createElement("h2")
    h2.textContent = "How much do you want to withdraw?"
    let input = document.createElement("input")
    input.classList.add("inputWithdraw")
    let aviso = document.createElement("p")
    aviso.textContent = "Press CANCEL to return"
    let div = document.createElement("div")
    div.classList.add("withdraw")

    div.appendChild(h2)
    div.appendChild(input)
    div.appendChild(aviso)

    screen.appendChild(div)

    enter.addEventListener("click", withdraw,true)
    buttonTop.removeEventListener("click",checkBalance,true)
    buttonMiddle.removeEventListener("click",enterScreen,true)
}

function withdraw(){
    console.log("withdraw money")
    let inputWithdraw = parseInt(document.querySelector(".inputWithdraw").value)
    let balanceActual = data[usuario].balance 
    data[usuario].balance = balanceActual - inputWithdraw
    checkBalance()
    setTimeout(withdrawScreen,3000)
}