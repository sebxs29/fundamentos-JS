const buscador = document.getElementById("buscador")
const filtroCategoria = document.getElementById("filtro-categoria")
const botonLimpiar = document.getElementById("limpiar-filtros")
const resultadoBusqueda = document.getElementById("resultado-busqueda")

function filtrarProductos() {
    const texto = buscador.value.toLowerCase()
    const categoria = filtroCategoria.value
 
    const productosFiltrados = catalogo.filter(function(producto) {
        const coincideNombre = producto.nombre.toLowerCase().includes(texto)

        const coincideCategoria =
            categoria === "todas" || producto.categoria === categoria


            return coincideNombre && coincideCategoria
    })

    mostrarCatalogo(productosFiltrados)
    mostrarTotal(productosFiltrados)

    resultadoBusqueda.textContent = 
    `Productos encontrados: ${productosFiltrados.length}`
}

buscador.addEventListener("input", filtrarProductos)
filtroCategoria.addEventListener("change", filtrarProductos)

botonLimpiar.addEventListener("click", function() {
    buscador.value = ""
    filtroCategoria.value = "todas"
    filtrarProductos()
})