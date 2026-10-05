class Producto {

    constructor(nombre, precio, descuento, imagen){

        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.imagen = imagen;

    }


    calcularPrecioFinal(){

        let descuentoAplicado = 
        this.precio * (this.descuento / 100);

        return this.precio - descuentoAplicado;
    }
}

let producto1 = new Producto(
    "Laptop Lenovo",
    2500,
    15,
    "https://carsaperupoc.vtexassets.com/arquivos/ids/194941-800-800?v=639184585498730000&width=800&height=800&aspect=true"
);


let producto2 = new Producto(
    "Celular Samsung",
    1200,
    20,
    "https://www.peru-smart.com/wp-content/uploads/2026/04/CELU1236DARKBLUE-256GB_1.jpg"
);


let producto3 = new Producto(
    "Audífonos Bluetooth",
    250,
    10,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaU217si75m9Tkd8savCWDTOYV9HwleBL242vZzHnMM4Llw_CgNq_41o&s=10"
);


let catalogo = [
    producto1,
    producto2,
    producto3

];


let contenedor = document.getElementById(
    "contenedor-productos"
);


catalogo.forEach((producto)=>{

    let tarjeta = document.createElement("div");

    tarjeta.className="tarjeta";

    tarjeta.innerHTML = `

        <img src="${producto.imagen}">

        <h2>${producto.nombre}</h2>

        <p>
        Precio base:
        S/ ${producto.precio}
        </p>

        <p>
        Descuento:
        ${producto.descuento}%
        </p>

        <button>
        Aplicar Descuento
        </button>

        <p class="precio-final"></p>

    `;

    contenedor.appendChild(tarjeta);

    let boton = tarjeta.querySelector("button");

    boton.addEventListener("click",()=>{

        let precioNuevo =
        producto.calcularPrecioFinal();

        tarjeta.querySelector(".precio-final").textContent = "Precio con descuento: S/ " + precioNuevo.toFixed(2);


    });

});