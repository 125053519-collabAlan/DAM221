function consultarPedidoCaja() {
    let numero = prompt("Ingresa el número del pedido:");
    let pedido = pedidos[numero - 1];

    if (!pedido) {
        document.getElementById("resultado").innerHTML = "<p>Pedido no encontrado.</p>";
        return;
    }

    // Destructuring: sacamos las propiedades del objeto "pedido" en una sola línea
    const { cliente, producto, precio, cantidad } = pedido;

    document.getElementById("resultado").innerHTML = `
        <h2>Pedido #${numero}</h2>
        <p><strong>Cliente:</strong> ${cliente}</p>
        <p><strong>Producto:</strong> ${producto}</p>
        <p><strong>Precio:</strong> $${precio}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
    `;
}

function realizarPago() {
    let numero = prompt("Ingresa el número del pedido a cobrar:");
    let pedido = pedidos[numero - 1];

    if (!pedido) {
        alert("Pedido no encontrado");
        return;
    }

    // Destructuring
    const { cliente, producto, precio, cantidad } = pedido;

    // reduce() aplicado a ESTE pedido individual: creamos un arreglo con el precio repetido "cantidad" veces (una entrada por cada unidad pedida) y las sumamos.
  
    const unidades = Array(cantidad).fill(precio);
    const subtotal = unidades.reduce((acumulador, precioUnidad) => {
        return acumulador + precioUnidad;
    }, 0);

    const IVA = subtotal * 0.16;
    const total = subtotal + IVA;

    document.getElementById("resultado").innerHTML = `
        <h2>Pago realizado - Pedido #${numero}</h2>
        <p><strong>Cliente:</strong> ${cliente}</p>
        <p><strong>Producto:</strong> ${producto}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>IVA (16%):</strong> $${IVA.toFixed(2)}</p>
        <p><strong>Total a pagar:</strong> $${total.toFixed(2)}</p>
    `;

    console.log(`Pago calculado para ${cliente}: $${total.toFixed(2)}`);
}

function notificarPedidoCaja() {
    const nombre = prompt("¿Qué producto vas a verificar en caja?");
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "<p>Cocina está preparando el pedido...</p>";

    prepararCafe(nombre)
        .then(function pedidoListo(mensaje) {
            resultado.innerHTML = `
                <h2>Pedido listo</h2>
                <p>${mensaje}</p>
                <p>Puedes proceder a cobrar con "Realizar pago".</p>
            `;
        })
        .catch(function pedidoCancelado(error) {
            resultado.innerHTML = `
                <h2>Pedido cancelado</h2>
                <p>${error}</p>
            `;
        });
}