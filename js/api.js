const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const listaUsuarios = document.getElementById("lista-usuarios");
const estadoUsuarios = document.getElementById("estado-usuarios");

const nombresEcuadorianos = [
    { nombre: "Andrés Oto", correo: "andres.oto@gmail.com" },
    { nombre: "Sebastián Toapanta", correo: "sebastian.toapanta@gmail.com" },
    { nombre: "Denisse Pazmiño", correo: "denisse.pazmino@gmail.com" },
    { nombre: "Alexandra Guamaní", correo: "alexandra.guamani@gmail.com" },
    { nombre: "Jhon Cedeño", correo: "jhon.cedeno@gmail.com" },
    { nombre: "María Fernanda Quizhpe", correo: "maria.quizhpe@gmail.com" },
    { nombre: "Kevin Loja", correo: "kevin.loja@gmail.com" },
    { nombre: "Camila Zambrano", correo: "camila.zambrano@gmail.com" },
    { nombre: "Diego Naranjo", correo: "diego.naranjo@gmail.com" },
    { nombre: "Valeria Achig", correo: "valeria.achig@gmail.com" }
];

async function cargarUsuarios() {
    try {
        const respuesta = await fetch(urlUsuarios);

        if (!respuesta.ok) {
            throw new Error("Error al obtener los usuarios");
        }

        const usuarios = await respuesta.json();

        estadoUsuarios.textContent = "";

        usuarios.forEach(function (usuario, indice) {
            const ecuatoriano = nombresEcuadorianos[indice] ?? {
                nombre: usuario.name,
                correo: usuario.email
            };

            const tarjeta = document.createElement("article");
            tarjeta.classList.add("usuario");

            tarjeta.innerHTML = `
                <h3>${ecuatoriano.nombre}</h3>
                <p>${ecuatoriano.correo}</p>
                <p>${usuario.company.name}</p>
            `;

            listaUsuarios.appendChild(tarjeta);
        });
    } catch (error) {
        estadoUsuarios.textContent = "No se pudieron cargar los usuarios.";
        console.error(error);
    }
}

cargarUsuarios();
