
const url = "https://fakestoreapi.com/products";
const contenedor = document.getElementById("productos");
const estado = document.getElementById("estado");

async function cargarProductos() {
    try {
        const respuesta = await fetch(url);
        const productos = await respuesta.json();

        estado.textContent = "";

        productos.forEach(function(producto) {
            const tarjeta = document.createElement("article");

            tarjeta.classList.add("producto");

            tarjeta.innerHTML = `
                <img src="${producto.image}" alt="${producto.title}">
                <h2>${producto.title}</h2>
                <p>${producto.category}</p>
                <p class="precio">$${producto.price.toFixed(2)}</p>
            `;

            contenedor.appendChild(tarjeta);
        });
    } catch (error) {
        estado.textContent = "No se pudieron cargar los productos.";
        console.error(error);
    }
}

cargarProductos();