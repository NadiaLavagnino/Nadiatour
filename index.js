function saludar(){
    let frase=("¡Hola!" + " bienvenido a Nadiatour")
    alert(frase)
    
}
saludar()
let usuario= prompt("Me dirias tu nombre")

while(usuario== ""){
    alert("¡Dato incorrecto!" + usuario);
    usuario= prompt("Ingresa otro nombre");
}


alert("¡Mucho gusto "  +  usuario +"!")

function crearPersona(email, telefono,cuidad, cantidadPasajeros) {
    this.email= correoElectronico;
    this.telefono= celular;
    this.direccion=direccion
    this.ciudad=ciudad;
    this.cantidadPasajeros;
    }


let email= prompt("Ingresa tu Email");
let telefono = parseInt(prompt("Ingres un telefono"));
let ciudad = prompt("Ingresa tu ciudad");
let cantidadPasajeros = prompt("Ingresa la cantidad de pasajeros a viajar");


function elegirDestino(){
    let cantidadDias= prompt("¿Dime cuantos dias prefieres?")
    if(cantidadDias<= 3){
        alert("¡Tenemos un destino para vos,Villa Carlos Paz!")
    }
    else if(cantidadDias>=4 && cantidadDias<7 ){
        alert("¡Tenemos la opcion a Salta!")
    }
    else if( cantidadDias>=7 && cantidadDias<10){
        alert("¡Tenemos una paquete a Iguazú!")
    }
    else if(cantidadDias<=10){
        alert("¡tenemos un paquete super completo a Bariloche!")
    }
    else{
        alert("¡En este moemnto no contamos con un paquete que se ajuste a tus dias! Lo sentimos.")
    }
}

elegirDestino()

// let findes = [
//     { nombre: 'Merlo', dias: '3 dias', precio: 23200 },

//     { nombre: 'Iguazu', dias: '4 Dias', precio: 42800 },

//     { nombre: 'Salta', dias: '5 dias', precio: 50500 },
// ]

