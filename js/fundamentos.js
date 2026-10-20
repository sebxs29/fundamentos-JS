const nombreTienda = "Tienda JS"
const nombreProducto = "Auriculares"
const precioProducto = 25.99
const descuentoActivo = true
let cantidadProductos = 0

// Mostrar strings en el navegador
document.getElementById("bienvenida").textContent = `Bienvenido a ${nombreTienda}`

document.getElementById("nombre-producto").textContent = nombreProducto

document.getElementById("precio-producto").textContent = precioProducto.toFixed(2)


// Aplicar una condicion
if (descuentoActivo) {
    document.getElementById("mensaje-tienda").textContent = "¡Tenemos descuentos disponibles!"
} else {
    document.getElementById("mensaje-tienda").textContent = "Revisa nuestros productos disponibles"
}

// Mostrar disponibilidad
if (cantidadProductos < 10) {
    document.getElementById("disponibilidad").textContent = "¡Producto destacado de nuestra tienda!"
} else {
    document.getElementById("disponibilidad").textContent = "Tenemos varios productos disponibles"
}