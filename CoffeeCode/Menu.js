let pedidos = [];


function consultarProductos() {

    let contenido = "<h2>Productos disponibles</h2>";


    listarProductos().forEach((producto) => { 
        if (producto.disponible === true) {
            contenido += `
                <p>
                    <strong>${producto.id}. ${producto.nombre}</strong>
                    - $${producto.precio}
                    - Disponible: ${producto.disponible}
                </p>
            `;

        }
        
    });

    document.getElementById("resultado").innerHTML = contenido;
    
    
}


function consultarPedidos() {

    let numero = prompt("Ingresa el número del pedido:");

    let posicion = numero - 1;

    let pedido = pedidos[posicion];

    document.getElementById("resultado").innerHTML = `
        <h2>Pedido encontrado</h2>

        <p><strong>Pedido:</strong> #${numero}</p>
        <p><strong>Cliente:</strong> ${pedido.cliente}</p>
        <p><strong>Producto:</strong> ${pedido.producto}</p>
        <p><strong>Precio:</strong> $${pedido.precio}</p>
        <p><strong>Cantidad:</strong> ${pedido.cantidad}</p>
    `;
}


function crearPedido() {

    let cliente = prompt("Ingresa el nombre del cliente:");

    let numeroProducto = prompt("Ingresa el número del producto:");

    let cantidad = prompt("Ingresa la cantidad:");

    // Llamamos a la función de Cocina
    let producto = listarProductos().find(p => p.id == numeroProducto);//find busca el numero del producto 
    //  resta la cantidad solicitada A la cantidad disponible del producto
    producto.disponible = producto.disponible - cantidad;

    
    let pedido = {
        cliente: cliente,
        producto: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad
    };

    pedidos.push(pedido);

    document.getElementById("resultado").innerHTML = `
        <h2>Pedido creado</h2>

        <p><strong>Cliente:</strong> ${cliente}</p>
        <p><strong>Producto:</strong> ${producto.nombre}</p>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
    `;

    console.log(`Pedido creado para ${cliente}`);
}


function listarPedidos() {

    let contenido = "<h2>Lista de Pedidos</h2>";

    pedidos.forEach((pedido, indice) => {

        contenido += `
            <div>
                <hr>
                <p><strong>Pedido #${indice + 1}</strong></p>
                <p>Cliente: ${pedido.cliente}</p>
                <p>Producto: ${pedido.producto}</p>
                <p>Precio: $${pedido.precio}</p>
                <p>Cantidad: ${pedido.cantidad}</p>
            </div>
        `;

    });

    document.getElementById("resultado").innerHTML = contenido;
}
