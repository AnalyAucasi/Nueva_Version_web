document.addEventListener("DOMContentLoaded", cargarCarrito);

function cargarCarrito() {
    const contenedorCarrito = document.querySelector("#contenedor-carrito");
    const totalCarrito = document.querySelector("#total-carrito");
    const botonVaciar = document.querySelector("#vaciar-carrito");

    // Obtener carrito desde LocalStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Mostrar productos en el carrito
    contenedorCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;

        const div = document.createElement("div");
        div.classList.add("carrito-item");
        div.innerHTML = `
            <div class="carrito-item">
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <div class="carrito-detalles">
            <h3 class="carrito-titulo">${producto.titulo}</h3>
            <p class="carrito-cantidad">Cantidad: ${producto.cantidad}</p>
            <p class="carrito-precio">Precio: S/. ${producto.precio}.00</p>
            <p class="carrito-subtotal">Subtotal: S/. ${(producto.precio * producto.cantidad).toFixed(2)}</p>
        </div>
        <button class="eliminar-producto" data-id="${producto.id}">Eliminar</button>
    </div>
        `;
        contenedorCarrito.appendChild(div);
    });

    totalCarrito.textContent = total.toFixed(2);

    // Manejar eliminación de productos (por cantidad)
    document.querySelectorAll(".eliminar-producto").forEach(boton => {
        boton.addEventListener("click", () => {
            const productoId = boton.dataset.id;
            eliminarUnoDelCarrito(productoId);
        });
    });

    // Manejar vaciado del carrito
    botonVaciar.addEventListener("click", () => {
        localStorage.removeItem("carrito");
        cargarCarrito();
    });
}

function eliminarUnoDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Buscar el producto y reducir su cantidad
    carrito = carrito.map(producto => {
        if (producto.id === id) {
            if (producto.cantidad > 1) {
                producto.cantidad--;  // Disminuir la cantidad
            } else {
                return null;  // Eliminar el producto si la cantidad es 1
            }
        }
        return producto;
    }).filter(producto => producto !== null); // Filtrar los productos nulos (eliminados)

    // Guardar el carrito actualizado
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
}
