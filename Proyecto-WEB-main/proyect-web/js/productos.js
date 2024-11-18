const productos = [
    // BT21
    {
        id: "bt21-01",
        titulo: "Almohada Mang",
        imagen: "../imgs/productos/BT21/almohada-mang-bts.jpg",
        categoria: {
            nombre: "BT21",
            id: "A001"
        },
        precio: 79,
    },

    //CERDITOS
    {
        id: "cerditos-01",
        titulo: "Cerdita Mujer Maravilla",
        imagen: "../imgs/productos/CERDITOS/cerdita-mujer-maravilla.jpg",
        categoria: {
            nombre: "CERDITOS",
            id: "A002"
        },
        precio: 59,
    },

    {
        id: "cerditos-02",
        titulo: "Cerdita Rosada",
        imagen: "../imgs/productos/CERDITOS/cerdita-rosada.jpg",
        categoria: {
            nombre: "CERDITOS",
            id: "A002"
        },
        precio: 65,
    },

    //POKEMON
    {
        id: "pkmn-01",
        titulo: "Jiglipuf",
        imagen: "../imgs/productos/POKEMON/pokemon-jiglipuf.jpg",
        categoria: {
            nombre: "POKEMON",
            id: "A003"
        },
        precio: 90,
    },

    {
        id: "pkmn-02",
        titulo: "Raichu",
        imagen: "../imgs/productos/POKEMON/raichu.jpg",
        categoria: {
            nombre: "POKEMON",
            id: "A003"
        },
        precio: 90,
    },

    {
        id: "pkmn-03",
        titulo: "Snorlax",
        imagen: "../imgs/productos/POKEMON/snorlax.jpg",
        categoria: {
            nombre: "POKEMON",
            id: "A003"
        },
        precio: 90,
    },

    {
        id: "pkmn-04",
        titulo: "Sylveon",
        imagen: "../imgs/productos/POKEMON/sylveon.jpg",
        categoria: {
            nombre: "POKEMON",
            id: "A003"
        },
        precio: 90,
    },

    //DISNEY
    {
        id: "disney-01",
        titulo: "Dumbo",
        imagen: "../imgs/productos/DISNEY/dumbo.jpg",
        categoria: {
            nombre: "DISNEY",
            id: "A004"
        },
        precio: 85,
    },

    {
        id: "disney-02",
        titulo: "Goofie",
        imagen: "../imgs/productos/DISNEY/goofie.jpg",
        categoria: {
            nombre: "DISNEY",
            id: "A004"
        },
        precio: 85,
    },

    {
        id: "disney-03",
        titulo: "Mickey Mouse",
        imagen: "../imgs/productos/DISNEY/mickey-mouse.jpg",
        categoria: {
            nombre: "DISNEY",
            id: "A004"
        },
        precio: 85,
    },

    //SERIES ANIMADAS
    {
        id: "seriesA-01",
        titulo: "Bob Esponja",
        imagen: "../imgs/productos/SERIES-ANIMADAS/bob-esponja-.jpg",
        categoria: {
            nombre: "SERIES ANIMADAS",
            id: "A005"
        },
        precio: 85,
    },

    {
        id: "seriesA-02",
        titulo: "Elmo",
        imagen: "../imgs/productos/SERIES-ANIMADAS/elmo.jpg",
        categoria: {
            nombre: "SERIES ANIMADAS",
            id: "A005"
        },
        precio: 85,
    },

    {
        id: "seriesA-03",
        titulo: "Hello Kitty",
        imagen: "../imgs/productos/SERIES-ANIMADAS/hello-kitty.jpg",
        categoria: {
            nombre: "SERIES ANIMADAS",
            id: "A005"
        },
        precio: 85,
    },

    {
        id: "seriesA-04",
        titulo: "Little Pony",
        imagen: "../imgs/productos/SERIES-ANIMADAS/little-pony.jpg",
        categoria: {
            nombre: "SERIES ANIMADAS",
            id: "A005"
        },
        precio: 85,
    },

    {
        id: "seriesA-05",
        titulo: "Pato de Pocoyo",
        imagen: "../imgs/productos/SERIES-ANIMADAS/pato-de-pocoyo-.jpg",
        categoria: {
            nombre: "SERIES ANIMADAS",
            id: "A005"
        },
        precio: 85,
    },

    {
        id: "seriesA-06",
        titulo: "Pato Lucas",
        imagen: "../imgs/productos/SERIES-ANIMADAS/pato-lucas.jpg",
        categoria: {
            nombre: "SERIES ANIMADAS",
            id: "A005"
        },
        precio: 85,
    },

    {
        id: "seriesA-07",
        titulo: "Gato Tom",
        imagen: "../imgs/productos/SERIES-ANIMADAS/peluches-tom.jpg",
        categoria: {
            nombre: "SERIES ANIMADAS",
            id: "A005"
        },
        precio: 85,
    },

    {
        id: "seriesA-08",
        titulo: "Scooby Doo",
        imagen: "../imgs/productos/SERIES-ANIMADAS/scooby-doo.jpg",
        categoria: {
            nombre: "SERIES ANIMADAS",
            id: "A005"
        },
        precio: 85,
    },
];

//mostrar los productos
const contenedorProductos = document.querySelector("#contenedor-productos")

function cargarProductos() {
    const PaginaCategoria = document.getElementById('pagina-categoria');
    const texto = PaginaCategoria.textContent;
    if (texto == 'Nuestros Productos') {
        productos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                            <img src="${producto.imagen}" alt="${producto.titulo}">
                        
                        <p>${producto.titulo}</p>
                        <h4>Precio: S/.${producto.precio}.00</h4>
                        <button class="agregar-producto-carrito" id="${producto.id}">Agregar al carrito</button
                        </div>
                        `;
            contenedorProductos.append(div);
        })
    } else {
        switch (texto) {
            case 'CATEGORIA: BT21':
                productos.forEach(producto => {
                    if (producto.categoria.nombre == "BT21") {

                        const div = document.createElement("div");
                        div.classList.add("producto");
                        div.innerHTML = `
                                <img src="${producto.imagen}" alt="${producto.titulo}">
                            
                            <p>${producto.titulo}</p>
                            <h4>Precio: S/.${producto.precio}</h4>
                            <button class="agregar-producto-carrito" id="${producto.id}">Agregar al carrito</button
                            </div>
                            `;
                        contenedorProductos.append(div);
                    }
                })
                break;
            case 'CATEGORIA: Cerditos':
                productos.forEach(producto => {
                    if (producto.categoria.nombre == "CERDITOS") {

                        const div = document.createElement("div");
                        div.classList.add("producto");
                        div.innerHTML = `
                                    <img src="${producto.imagen}" alt="${producto.titulo}">
                               
                                <p>${producto.titulo}</p>
                                <h4>Precio: S/.${producto.precio}</h4>
                                <button class="agregar-producto-carrito" id="${producto.id}">Agregar al carrito</button
                                </div>
                                `;
                        contenedorProductos.append(div);
                    }
                })
                break;
            case 'CATEGORIA: Disney':
                productos.forEach(producto => {
                    if (producto.categoria.nombre == "DISNEY") {

                        const div = document.createElement("div");
                        div.classList.add("producto");
                        div.innerHTML = `
                                        <img src="${producto.imagen}" alt="${producto.titulo}">
                                    
                                    <p>${producto.titulo}</p>
                                    <h4>Precio: S/.${producto.precio}</h4>
                                    <button class="agregar-producto-carrito" id="${producto.id}">Agregar al carrito</button
                                    </div>
                                    `;
                        contenedorProductos.append(div);
                    }
                })
                break;
            case 'CATEGORIA: Pokemon':
                productos.forEach(producto => {
                    if (producto.categoria.nombre == "POKEMON") {

                        const div = document.createElement("div");
                        div.classList.add("producto");
                        div.innerHTML = `
                                    <img src="${producto.imagen}" alt="${producto.titulo}">
                               
                                <p>${producto.titulo}</p>
                                <h4>Precio: S/.${producto.precio}</h4>
                                <button class="agregar-producto-carrito" id="${producto.id}">Agregar al carrito</button
                                </div>
                                `;
                        contenedorProductos.append(div);
                    }
                })
                break;
            case 'CATEGORIA: Series Animadas':
                productos.forEach(producto => {
                    if (producto.categoria.nombre == "SERIES ANIMADAS") {

                        const div = document.createElement("div");
                        div.classList.add("producto");
                        div.innerHTML = `
                                        <img src="${producto.imagen}" alt="${producto.titulo}">
                                    
                                    <p>${producto.titulo}</p>
                                    <h4>Precio: S/.${producto.precio}</h4>
                                    <button class="agregar-producto-carrito" id="${producto.id}">Agregar al carrito</button
                                    </div>
                                    `;
                        contenedorProductos.append(div);
                    }
                })
                break;
            default:
                break;
        }
    }
}

cargarProductos();



// Obtener los botones para agregar productos al carrito
document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregarCarrito = document.querySelectorAll(".agregar-producto-carrito");

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener("click", () => {
            const productoId = boton.id;
            agregarProductoAlCarrito(productoId);
        });
    });
});

// Función para agregar producto al carrito
function agregarProductoAlCarrito(id) {
    // Buscar el producto por su id
    const producto = productos.find(p => p.id === id);

    if (producto) {
        // Obtener carrito existente o inicializar uno nuevo
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        // Verificar si el producto ya está en el carrito
        const productoEnCarrito = carrito.find(p => p.id === id);

        if (productoEnCarrito) {
            // Incrementar la cantidad si ya existe
            productoEnCarrito.cantidad++;
        } else {
            // Agregar nuevo producto al carrito
            producto.cantidad = 1;
            carrito.push(producto);
        }

        // Guardar el carrito actualizado en LocalStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`¡${producto.titulo} agregado al carrito!`);
    }
}
