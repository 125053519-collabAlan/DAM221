let pagos = [];

function consultarPedidoCaja() {
    let numero = prompt("Ingresa el número del pedido:");
    let pedido = pedidos[numero - 1];

    if (!pedido) {
        document.getElementById("resultado").innerHTML = "<p>Pedido no encontrado.</p>";
        return;
    }

    document.getElementById("resultado").innerHTML = `
        <h2>Pedido #${numero}</h2>
        <p><strong>Cliente:</strong> ${pedido.cliente}</p>
        <p><strong>Producto:</strong> ${pedido.producto}</p>
        <p><strong>Precio:</strong> $${pedido.precio}</p>
        <p><strong>Cantidad:</strong> ${pedido.cantidad}</p>
    `;
}

function realizarPago() {
    let numero = prompt("Ingresa el número del pedido a cobrar:");
    let pedido = pedidos[numero - 1];

    if (!pedido) {
        alert("Pedido no encontrado");
        return;
    }

    let totalPagar = pedido.precio * pedido.cantidad;

    pagos.push({
        cliente: pedido.cliente,
        producto: pedido.producto,
        cantidad: pedido.cantidad,
        totalPagar: totalPagar
    });

    document.getElementById("resultado").innerHTML = `
        <h2>Pago realizado</h2>
        <p><strong>Cliente:</strong> ${pedido.cliente}</p>
        <p><strong>Producto:</strong> ${pedido.producto}</p>
        <p><strong>Cantidad:</strong> ${pedido.cantidad}</p>
        <p><strong>Total pagado:</strong> $${totalPagar}</p>
    `;

    console.log(`Pago registrado para ${pedido.cliente}: $${totalPagar}`);
}

function listarPagos() {
    let contenido = "<h2>Pagos realizados</h2>";

    if (pagos.length === 0) {
        contenido += "<p>Aún no hay pagos registrados.</p>";
    }

    pagos.forEach((p, indice) => {
        contenido += `
            <div>
                <hr>
                <p><strong>Pago #${indice + 1}</strong></p>
                <p>Cliente: ${p.cliente}</p>
                <p>Producto: ${p.producto}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <p>Total: $${p.totalPagar}</p>
            </div>
        `;
    });

    document.getElementById("resultado").innerHTML = contenido;
}
