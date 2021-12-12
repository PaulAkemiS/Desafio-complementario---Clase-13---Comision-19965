class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }
    sumaIva() {
        this.precio = Math.trunc(this.precio * 1.21);
    }
}

const avena = new Producto(1, "avena", 300, 25);
const harina = new Producto(2, "harina", 150, 30);
const mascabo = new Producto(3, "mascabo", 120, 10);
const coco = new Producto(4, "coco", 160, 20);
const nueces = new Producto(5, "nueces", 180, 50);
const almendras = new Producto(6, "almendras", 200, 60);

avena.sumaIva();
harina.sumaIva();
mascabo.sumaIva();
coco.sumaIva();
nueces.sumaIva();
almendras.sumaIva();

console.log(avena);
console.log(harina);
console.log(mascabo);
console.log(coco);
console.log(nueces);
console.log(almendras);

const lista = [avena, harina, mascabo, coco, nueces, almendras];

const carrito = []


let producto;

let btn1 = $("#producto1");
btn1.click(function (e) {
    e.preventDefault();
    agregarElemento(1);
})

localStorage.getItem("producto1");

let btn2 = $("#producto2");
btn2.click(function (e) {
    e.preventDefault();
    agregarElemento(2);
})
localStorage.getItem("producto2");

let btn3 = $("#producto3");
btn3.click(function (e) {
    e.preventDefault();
    agregarElemento(3);
})
localStorage.getItem("producto3");

let btn4 = $("#producto4");
btn4.click(function (e) {
    e.preventDefault();
    agregarElemento(4);
})
localStorage.getItem("producto4");

let btn5 = $("#producto5");
btn5.click(function (e) {
    e.preventDefault();
    agregarElemento(5);
})
localStorage.getItem("producto5");

let btn6 = $("#producto6");
btn6.click(function (e) {
    e.preventDefault();
    agregarElemento(6);
})
localStorage.getItem("producto6");


function agregarElemento(productoID) {
    producto = lista.find(function (producto) {
        if (producto.id == productoID)
            return true;
        else
            return false;
    })

    carrito.push(producto);

    mostrarCarrito();
}


function mostrarCarrito() {
    let contenedor = document.getElementById("carrito");
    let precioTotal = 0


    contenedor.innerHTML = "";
    htmlString = "CARRITO <ul>";
    for (const id in carrito) {
        let producto = carrito[id]
        htmlString += `
            <li> ${producto.nombre}, $ ${producto.precio}
            <button id="carrito_${id}" class="eliminar"> Eliminar</button>
            </li>`
        precioTotal += producto.precio;
    }

    htmlString += "</ul>";

    contenedor.innerHTML = htmlString;


    let conetendorPrecio = $('#precio')
    conetendorPrecio.html(`TOTAL: $ ${precioTotal}`);

    loadEliminar();

}


function loadEliminar() {
    let botones = document.getElementsByClassName("eliminar");
    for (const boton of botones) {

        boton.onclick = () => {
            let id = boton.getAttribute("id");
            idNumber = id.split("_")[1];
            carrito.splice(idNumber, 1);
            localStorage.removeItem("producto1");
            localStorage.removeItem("producto2");
            localStorage.removeItem("producto3");
            localStorage.removeItem("producto4");
            localStorage.removeItem("producto5");
            localStorage.removeItem("producto6");

            mostrarCarrito()
        }
    }

}

$("#header")
    .slideUp(1)
    .slideDown(1600);