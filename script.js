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
let respuesta1 = SelectionPlayer()
let respuesta2 = SelectionComputer()

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
    
   }
}

let result = resultado(respuesta1 , respuesta2)
console.log(result)