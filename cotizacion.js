let productos= [] ;
let usuario;

let formularioIdentificacion;
let contenedorIdentificacion;
let contenedorUsuario;
let limpiarStorage;

let formulario;
let inputId;
let inputNombre;
let precioVenta;
let paquetes;

class producto {
    constructor (id, nombre, precioVenta,cantidad) {
        this.id= id;
        this.nombre= nombre.toUpperCase();
        this.precioVenta= precioVenta;
        this.cantidad= cantidad;
    }
}





const NOMBRE = document.getElementById("nombre");
const EMAIL = document.getElementById("email");
const DESTINO = document.getElementById("destino");
const PASAJEROS = document.getElementById("cantidad-de-pasajeros");
const BOTON = document.getElementById("btn-enviar");

const CONTENEDOR = getElementById("contenedorUno")




const listaPrductos = [
    {
        id: contenedorUno,
        nombre:"saltaJujuy",
        precioVenta:"55000",
        cantidad: 5,
    },
    
    {
        id:contenedorDos,
        nombre: "misiones",
        precioVenta: "40000",
        cantidad:5,
    },
    {
        id:contenedorTres,
        nombre:"mendoza",
        precioVenta:"45000",
        cantidad: 6,
    },
    {
        id: contenedorCuatro,
        nombre: "bariloche",
        precioVenta: "65000",
        cantidad: 10,
    },
    {
        id: contenedorCinco,
        nombre:"calafate",
        precioVenta: "75000",
        contidad: 8,
    }
]

const contenedorProductos= document.getElementById("paquetes");













let boton = document.getElementById("botonCotizar")
boton.onclick=(multiplicar) => {
    alert("Su viaje es" + multiplicar)
}
