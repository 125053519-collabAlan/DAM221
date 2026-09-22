let productos = [];
let siguienteId = 1;

function agregarProducto(nombre, precio, categoria, cantidad = 10) {
    const producto = {
        id: siguienteId++,
        nombre,
        precio,
        categoria,
        cantidad,
        disponible: cantidad > 0
    };
  productos.push(producto);
  return producto;
}

function listarProductos() {
  return productos;
}

// Productos predeterminados
agregarProducto("Café americano", 35, "bebida", 10);
agregarProducto("Café con leche", 40, "bebida", 10);
agregarProducto("Hamburguesa", 80, "comida", 10);
agregarProducto("Refresco", 25, "bebida", 10);
agregarProducto("Papas fritas", 40, "comida", 10);
agregarProducto("Pay de queso", 45, "postre", 10);
agregarProducto("Gelatina", 20, "postre", 10);
agregarProducto("Pastel de chocolate", 50, "postre", 10);
agregarProducto("Té helado", 30, "bebida", 10);
agregarProducto("Sándwich", 60, "comida", 10);

function agregar() {
    let nombre = prompt("Nombre del producto:");
    let precio = Number(prompt("Precio del producto:"));
    let categoria = prompt("Categoría (bebida/comida):");
    let cantidad = Number(prompt("Cantidad disponible:"));

    if (!nombre || precio <= 0 || !Number.isInteger(cantidad) || cantidad < 0) {
        alert("Datos inválidos");
        return;
    }

    let producto = agregarProducto(nombre, precio, categoria, cantidad);

    document.getElementById("resultado").innerHTML = `
        <h2>Producto agregado</h2>
        <p><strong>ID:</strong> ${producto.id}</p>
        <p><strong>Nombre:</strong> ${producto.nombre}</p>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
        <p><strong>Cantidad disponible:</strong> ${producto.cantidad}</p>
    `;
}

function mostrar() {
    let contenido = "<h2>Productos en cocina</h2>";

    if (productos.length === 0) {
        contenido += "<p>No hay productos registrados.</p>";
    }

    productos.forEach((p) => {
        contenido += `
            <div>
                <hr>
                <p><strong>${p.id}. ${p.nombre}</strong> - $${p.precio} (${p.categoria})</p>
                <p>Cantidad disponible: ${p.cantidad}</p>
                <p>${p.cantidad > 0 ? "Disponible" : "No disponible"}</p>
            </div>
        `;
    });

    document.getElementById("resultado").innerHTML = contenido;
}

function mostrarProductosFiltrados(titulo, filtro) {
    const productosFiltrados = productos.filter(filtro);
    let contenido = `<h2>${titulo}</h2>`;

    if (productosFiltrados.length === 0) {
        contenido += "<p>No hay productos para mostrar.</p>";
    }

    productosFiltrados.forEach((producto) => {
        contenido += `
            <div>
                <hr>
                <p><strong>${producto.id}. ${producto.nombre}</strong> - $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Cantidad disponible: ${producto.cantidad}</p>
                <p>${producto.cantidad > 0 ? "Disponible" : "No disponible"}</p>
            </div>
        `;
    });

    document.getElementById("resultado").innerHTML = contenido;
}

function mostrarProductosBaratos() {
    const productosBaratos = productos
        .filter(producto => producto.precio <= 40)
        .sort((a, b) => b.precio - a.precio);
    mostrarListaDeProductos("Productos baratos", productosBaratos);
}

function mostrarProductosCaros() {
    const productosCaros = productos
        .filter(producto => producto.precio > 40)
        .sort((a, b) => a.precio - b.precio);
    mostrarListaDeProductos("Productos caros", productosCaros);
}

function mostrarListaDeProductos(titulo, productosParaMostrar) {
    let contenido = `<h2>${titulo}</h2>`;

    if (productosParaMostrar.length === 0) {
        contenido += "<p>No hay productos para mostrar.</p>";
    }

    productosParaMostrar.forEach((producto) => {
        contenido += `
            <div>
                <hr>
                <p><strong>${producto.id}. ${producto.nombre}</strong> - $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Cantidad disponible: ${producto.cantidad}</p>
                <p>${producto.cantidad > 0 ? "Disponible" : "No disponible"}</p>
            </div>
        `;
    });

    document.getElementById("resultado").innerHTML = contenido;
}

const promociones = [
    {
        nombre: "Desayuno cafetero",
        descripcion: "Café con leche y papas fritas",
        descuento: 10
    },
    {
        nombre: "Dulce de la casa",
        descripcion: "Café americano y pay de queso",
        descuento: 15
    },
    {
        nombre: "Combo hamburguesa",
        descripcion: "Hamburguesa y refresco",
        descuento: 20
    }
];

function obtenerPromociones() {
    return promociones;
}

function mostrarPromociones() {
    let contenido = "<h2>Promociones</h2>";

    promociones.forEach((promocion) => {
        contenido += `
            <div>
                <hr>
                <p><strong>${promocion.nombre}</strong></p>
                <p>${promocion.descripcion}</p>
                <p>Descuento: ${promocion.descuento}%</p>
            </div>
        `;
    });

    document.getElementById("resultado").innerHTML = contenido;
}

function mostrarBebidas() {
    mostrarProductosFiltrados("Bebidas", producto => producto.categoria.toLowerCase() === "bebida");
}

function mostrarPostres() {
    mostrarProductosFiltrados("Postres", producto => producto.categoria.toLowerCase() === "postre");
}

function editarProducto() {
    let id = Number(prompt("Ingresa el ID del producto a editar:"));
    let producto = productos.find(p => p.id === id);

    if (!producto) {
        alert("Producto no encontrado");
        return;
    }

    let nuevoNombre = prompt("Nuevo nombre (deja vacío para no cambiar):", producto.nombre);
    let nuevoPrecio = prompt("Nuevo precio (deja vacío para no cambiar):", producto.precio);
    let nuevaCantidad = prompt("Nueva cantidad (deja vacío para no cambiar):", producto.cantidad);

    if (nuevoNombre) producto.nombre = nuevoNombre;
    if (nuevoPrecio && Number(nuevoPrecio) > 0) producto.precio = Number(nuevoPrecio);
    if (nuevaCantidad !== "" && Number.isInteger(Number(nuevaCantidad)) && Number(nuevaCantidad) >= 0) {
        producto.cantidad = Number(nuevaCantidad);
        producto.disponible = producto.cantidad > 0;
    }

    document.getElementById("resultado").innerHTML = `
        <h2>Producto actualizado</h2>
        <p><strong>ID:</strong> ${producto.id}</p>
        <p><strong>Nombre:</strong> ${producto.nombre}</p>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Cantidad disponible:</strong> ${producto.cantidad}</p>
    `;
}

function eliminarProducto() {
    let id = Number(prompt("Ingresa el ID del producto a eliminar:"));
    let existe = productos.find(p => p.id === id);

    if (!existe) {
        alert("Producto no encontrado");
        return;
    }

    productos = productos.filter(p => p.id !== id);

    document.getElementById("resultado").innerHTML = `
        <h2>Producto eliminado</h2>
        <p>Se eliminó el producto con ID ${id}.</p>
    `;
}
