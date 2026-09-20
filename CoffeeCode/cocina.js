let productos = [];
let siguienteId = 1;

function agregarProducto(nombre, precio, categoria) {
  const producto = { id: siguienteId++, nombre, precio, categoria, disponible: true };
  productos.push(producto);
  return producto;
}

function listarProductos() {
  return productos;
}

// Productos predeterminados
agregarProducto("Café americano", 35, "bebida");
agregarProducto("Café con leche", 40, "bebida");
agregarProducto("Hamburguesa", 80, "comida");
agregarProducto("Refresco", 25, "bebida");
agregarProducto("Papas fritas", 40, "comida");

function agregar() {
    let nombre = prompt("Nombre del producto:");
    let precio = Number(prompt("Precio del producto:"));
    let categoria = prompt("Categoría (bebida/comida):");

    if (!nombre || precio <= 0) {
        alert("Datos inválidos");
        return;
    }

    let producto = agregarProducto(nombre, precio, categoria);

    document.getElementById("resultado").innerHTML = `
        <h2>Producto agregado</h2>
        <p><strong>ID:</strong> ${producto.id}</p>
        <p><strong>Nombre:</strong> ${producto.nombre}</p>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
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
                <p>${p.disponible ? "Disponible" : "No disponible"}</p>
            </div>
        `;
    });

    document.getElementById("resultado").innerHTML = contenido;
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

    if (nuevoNombre) producto.nombre = nuevoNombre;
    if (nuevoPrecio) producto.precio = Number(nuevoPrecio);

    document.getElementById("resultado").innerHTML = `
        <h2>Producto actualizado</h2>
        <p><strong>ID:</strong> ${producto.id}</p>
        <p><strong>Nombre:</strong> ${producto.nombre}</p>
        <p><strong>Precio:</strong> $${producto.precio}</p>
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
