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
            return "Rock"
        case 2 :
            return "Rock"
        default:
            return "A ocurrdio un error"
    }
}
let respuesta1 = SelectionPlayer()
let respuesta2 = SelectionComputer()

function resultado(respuesta1 , respuesta2){
    if (respuesta1.toLowerCase() === respuesta2.toLowerCase()){
        return "Tie"
    }
}

let result = resultado(respuesta1 , respuesta2)
console.log(result)