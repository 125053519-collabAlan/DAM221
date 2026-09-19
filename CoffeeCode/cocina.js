let productos = [];
let siguienteId = 1;

function agregarProducto(nombre, precio, categoria) {
  const producto = { id: siguienteId++, nombre, precio, categoria, disponible: true };
  productos.push(producto);
  return producto;
}

function editarProducto(id, cambios) {
  const p = productos.find(p => p.id === id);
  if (!p) return null;
  Object.assign(p, cambios);
  return p;
}

function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
}

function listarProductos() {
  return productos;
}
