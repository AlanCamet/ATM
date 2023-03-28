//Variables
const customers =[
    ['Alan camet', 250, 13572, 9704],
    ['Melody Vargas', 320, 23627, 2004],
    ['Adrian Velázquez', 292, 32638, 9319]
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
function nombreUno(string){
    nameUno.textContent = string
} nombreUno(customers[0][0])

function cuentaUno(string){
    acountUno.textContent = string
} cuentaUno(customers[0][2])

function passUno(string){
    nipUno.textContent = string
} passUno(customers[0][3])

function nombreDos(string){
    nameDos.textContent = string
} nombreDos(customers[1][0])

function cuentaDos(string){
    acountDos.textContent = string
} cuentaDos(customers[1][2])

function passDos(string){
    nipDos.textContent = string
} passDos(customers[1][3])

function nombreTres(string){
    nameTres.textContent = string
} nombreTres(customers[2][0])

function cuentaTres(string){
    acountTres.textContent = string
} cuentaTres(customers[2][2])

function passTres(string){
    nipTres.textContent = string
} passTres(customers[2][3])


