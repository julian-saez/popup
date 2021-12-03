const btn_activar_nots = document.querySelector("#btn-activar-nots")
const contenedor_modal = document.getElementById("contenedor-modal")

/** Esta es una función reutilizable. Si a lo largo de la aplicación se require mostrar otra ventana modal, con esta función 
se puede pasar los parametros y mostrar un contenido diferente cuantas veces lo deseas.*/ 
const ventanaModal = (titulo, texto) => {
    // Cambiamos el display del contenedor para que sea visible
    contenedor_modal.style.display = "flex"

    // Creamos los elementos
    let ventana = document.createElement("div");
    let titulo_modal = document.createElement("h2")
    let contenido_modal = document.createElement("p")
    let btn_aceptar = document.createElement("button")

    // Le asignamos los hijos al padre
    contenedor_modal.appendChild(ventana)
    ventana.appendChild(titulo_modal)
    ventana.appendChild(contenido_modal)
    ventana.appendChild(btn_aceptar)

    // Agregamos los atributos y contenido a los elementos creados
    ventana.id = "ventana-modal"
    titulo_modal.innerHTML = titulo;
    contenido_modal.innerHTML = texto;
    btn_aceptar.innerHTML = "Aceptar"

    // Este botón servirá para eliminar la ventana modal y volver al contenedor a su display inicial.
    btn_aceptar.addEventListener("click", () => {
        contenedor_modal.style.display = "none"
        contenedor_modal.removeChild(ventana)
    })
}

// Con este boton activamos la ventana modal llamando a la función ventanaModal.
btn_activar_nots.addEventListener("click", () => ventanaModal("Gracias por suscribirte", "Todos los días recibirás noticias acerca del contenido que más te interesa."))

