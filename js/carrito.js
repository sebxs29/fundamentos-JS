let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

export function agregarAlCarrito(producto) {
    const id = String(producto.id);
    const nombre = producto.nombre ?? producto.title;
    const precio = producto.precio ?? producto.price;

    const existe = carrito.find(item => String(item.id) === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }

    guardarCarrito();
}

export function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => String(item.id) !== String(id));
    guardarCarrito();
}

export function obtenerCarrito() {
    return carrito;
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarVistaCarrito();
}

function actualizarVistaCarrito() {
    const contenedor = document.getElementById("carrito");
    if (!contenedor) return;

    const cantidad = document.getElementById("cantidad-carrito");
    if (cantidad) {
        cantidad.textContent = `Productos en el carrito: ${carrito.length}`;
    }

    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    let total = 0;

    carrito.forEach(item => {
        total += item.precio * item.cantidad;

        const div = document.createElement("div");
        div.classList.add("item-carrito");

        const texto = document.createElement("p");
        texto.textContent = `${item.nombre} - Cantidad: ${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`;

        const boton = document.createElement("button");
        boton.type = "button";
        boton.classList.add("boton-eliminar");
        boton.dataset.id = item.id;
        boton.textContent = "Eliminar";

        div.appendChild(texto);
        div.appendChild(boton);
        contenedor.appendChild(div);
    });

    const totalParrafo = document.createElement("p");
    totalParrafo.classList.add("total-carrito");
    totalParrafo.textContent = `Total: $${total.toFixed(2)}`;
    contenedor.appendChild(totalParrafo);
}

actualizarVistaCarrito();
