let divUno = document.getElementById("contenedor-ejemplo-uno")
let parrafo = document.getElementById("parrafo")

let listaDivs = document.getElementsByClassName("contenedor2")

console.log(listaDivs)

const NOMBRE = document.getElementById("nombre");
const EMAIL = document.getElementById("email");
const DESTINO = document.getElementById("destino");
const PASAJEROS = document.getElementById("cantidad-de-pasajeros");
const BOTON = document.getElementById("btn-enviar");

const CONTENEDOR = getElementById("contenedorUno")

class Producto {
constructor(id, nombre, precioCompra, precioVenta, cantidad) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precioCompra = precioCompra;
    this.precioVenta = precioVenta;
    this.cantidad = cantidad;
}
}