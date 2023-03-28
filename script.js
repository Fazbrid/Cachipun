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

let opcion2 = SelectionComputer()

console.log(opcion2)