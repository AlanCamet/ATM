//Variables
const screenInputAcount = document.getElementsByClassName('screenInputAcount')
const screenInputNip = document.getElementsByClassName('screenInputNip')
const uno = document.getElementById('uno')
const dos = document.getElementById('dos')
const tres = document.getElementById('tres')
const cuatro = document.getElementById('cuatro')
const cinco = document.getElementById('cinco')
const seis = document.getElementById('seis')
const siete = document.getElementById('siete')
const ocho = document.getElementById('ocho')
const nueve = document.getElementById('nueve')
const cero = document.getElementById('cero')
const tripleCero = document.getElementById('tripleCero')
const enter = document.getElementById('enter')
const clear = document.getElementById('clear')
const cancel = document.getElementById('cancel')

//Eventos
uno.onclick = function unoEvent() {
    screenInputAcount.textContent = screenInputAcount.textContent + "1"

}

dos.onclick = function (e) {
    screenInputAcount.textContent = screenInputAcount.textContent + "2"

}