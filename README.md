# 🛍️ Tienda JS - Laboratorio de Fundamentos

Este proyecto es una aplicación web de catálogo de productos desarrollada como parte del laboratorio de Fundamentos de JavaScript.

## 📖 Descripción

La aplicación muestra un catálogo de productos obtenidos desde una API (FakeStore API) y un catálogo local. Incluye funcionalidades de búsqueda, filtrado por categorías y un carrito de compras básico que persiste los datos en el navegador.

## 🚀 Características principales

- **Consumo de API:** Obtención dinámica de productos desde `https://fakestoreapi.com/products`.
- **Manipulación del DOM:** Renderizado dinámico de tarjetas de productos.
- **Buscador y filtros:** Filtrado en tiempo real por nombre y categoría.
- **Carrito de compras:** Agregar y eliminar productos con persistencia en `localStorage`.
- **Módulos (ES6):** Separación de responsabilidades usando `import` y `export`.

## 🛠 Tecnologías utilizadas

- HTML5
- CSS3 (Grid y Flexbox)
- JavaScript (ES6+)
- Fetch API
- Local Storage

## 📂 Estructura del proyecto

```text
fundamentos-JS/
│
├── index.html
├── styles.css
├── dom.js
└── js/
    ├── main.js        # Punto de entrada, importa módulos
    ├── api.js         # Consumo de API de usuarios
    ├── fundamentos.js # Variables, condicionales y strings
    ├── productos.js   # Datos y lógica del catálogo local
    └── carrito.js     # Lógica del carrito y Local Storage
