
/* pregunta al usario cual es la opcion que desea elegir */
function SelectionPlayer(){
    let respuesta = prompt("Escriba su opcion")
    return respuesta
}
/* Se ramdomiza un numero llamado opcion para elegir la jugada de la 
computador */
function SelectionComputer(){
    let opcion = Math.floor(Math.random() * 3);
    
    switch (opcion) {
        case 0 :
            return "Rock";
        case 1 :
            return "Paper"
        case 2 :
            return "Scissor"
        default:
            return "A ocurrdio un error"
    }
}

/* Toma  las variables con las con las jugadas y decide quien si gano 
perdio o empato*/
function resultado(respuesta1 , respuesta2){
   switch (respuesta1.toLowerCase()){
        case "rock":
            if(respuesta1.toLowerCase() === respuesta2.toLowerCase()){
                return "tie"
            }else if (respuesta2.toLowerCase() === "paper"){
                return "lose"
            }else if( respuesta2.toLowerCase() === "scissor"){
                return "win"
            }
        case "paper":
            if(respuesta1.toLowerCase() === respuesta2.toLowerCase()){
                return "tie"
            }else if (respuesta2.toLowerCase() === "scissor"){
                return "lose"
            }else if( respuesta2.toLowerCase() === "rock"){
                return "win"
            }
        case "scissor":
            if(respuesta1.toLowerCase() === respuesta2.toLowerCase()){
                return "tie"
            }else if (respuesta2.toLowerCase() === "rock"){
                return "lose"
            }else if( respuesta2.toLowerCase() === "paper"){
                return "win"
            }
        default :
            return "que paso amigito"
    
   }
}
/* funcion que empieza toma las variables de las decisiones y reparte en la funciones*/
function game (){
    let n = 0
    while (n < 5) {
        let respuesta1 = SelectionPlayer()
        let respuesta2 = SelectionComputer()
        let result = resultado(respuesta1 , respuesta2)

        console.log(result)
        n = n+1
    }
}
// funcion para determinar la cual es que selecciono con la opcion

function opcion (e){
    if (e.target.id === 'button-tijeras'){
        respuestaCom =  SelectionComputer()
        espuestaPla = 'scissor'
        
        
    }else if (e.target.id === 'button-piedra'){
        respuestaCom =  SelectionComputer()
        respuestaPla = 'rock'
        
        
    }else if (e.target.id === 'button-papel'){
        respuestaCom =  SelectionComputer()
        respuestaPla = 'paper'
        
        
    }
    let result = resultado(respuestaPla , respuestaCom)
    if(result === 'win'){
        VictoriasPla++
    }else if( result === 'lose'){
        VictoriasCom++
    }
    
    if(VictoriasCom >= 3){
        console.log('Gano la computadora')
    }else if(VictoriasPla >= 3){
        console.log("gano el jugador")
    }
  
}

// Manejando el DOM
let respuestaCom =""
let respuestaPla =""
let VictoriasPla = 0
let VictoriasCom = 0
const tijera = document.getElementById('button-tijeras').addEventListener('click',opcion)
const piedra = document.getElementById('button-piedra').addEventListener('click',opcion)
const papel = document.getElementById('button-papel').addEventListener('click',opcion)

let puntuacionPla = 0
let puntuacionCom


