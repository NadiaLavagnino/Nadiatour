function saludar(){
    let frase=("¡Hola!" + " bienvenido a Nadiatour")
    alert(frase)
    
}
saludar()
let usuario= prompt("Me dirias tu nombre")
alert("Mucho gusto "  +  usuario)

let finde = [
    {nombre: 'Merlo',
    dias: '3 dias',
    precio: 23200},

    {nombre: 'Iguazu',
    dias: '4 Dias',
    precio: 42800},

    {nombre: 'Salta',
    dias: '5 dias',
    precio: 50500}
]

function mostrarOpciones(){
    let mensaje= '¿Qué escapada te gustaria elegir?'
    let contador= 1

    for(let finde of finde){
        mensaje += '\n ${contador}- ${finde.nombre} - ${finde.dias} - $ ${finde.precio}'
        contador++
    }

    mensaje += '\n ${contador}- salir'

    return mensaje

}

prompt (mostrarOpciones())