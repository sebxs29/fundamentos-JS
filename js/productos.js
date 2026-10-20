const catalogo = [
    {
        id: 1,
        nombre: "Auriculares",
        precio: 25.99,
        categoria: "Tecnología"
    }, 
    {
        id: 2,
        nombre: "Teclado",
        precio: 35.50,
        categoria: "Accesorios"
    },
    {
        id: 3,
        nombre: "Reloj",
        precio: 49.99,
        categoria: "Accesorios"
    }
]

function mostrarCatalogo(lista) {
    const contenedor = document.getElementById("lista-local")

    contenedor.innerHTML = ""

    lista.forEach(function(producto) {
        const tarjeta = document.createElement("article")

        tarjeta.classList.add("producto")

        tarjeta.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Categoría: ${producto.categoria}</p>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
        `

        contenedor.appendChild(tarjeta)
        })
}

function calcularTotal(lista) {
    let total = 0

    lista.forEach(function(producto) {
        total += producto.precio
    })

    return total
}

function mostrarTotal(lista = catalogo) {
    const total = calcularTotal(lista)

    document.getElementById("total-catalogo").textContent =
    `Total de los productos: $${total.toFixed(2)}`
}

mostrarCatalogo(catalogo)
mostrarTotal()