
let pedidos = [];


function consultarPedidos() {

    let numero = prompt("Ingresa el número del pedido:");

    let posicion = numero - 1;

   

        let pedido = pedidos[posicion];

        document.getElementById("resultado").innerHTML = `
            <h2>Pedido encontrado</h2>

            <p><strong>Pedido:</strong> #${numero}</p>
            <p><strong>Cliente:</strong> ${pedido.cliente}</p>
            <p><strong>Producto:</strong> ${pedido.producto}</p>
            <p><strong>Cantidad:</strong> ${pedido.cantidad}</p>
        `;

    } 

        
    



function crearPedido() {

    let cliente = prompt("Ingresa el nombre del cliente:");
    let producto = prompt("Ingresa el producto:");
    let cantidad = prompt("Ingresa la cantidad:");

    let pedido = {
        cliente: cliente,
        producto: producto,
        cantidad: cantidad
    };

    pedidos.push(pedido);

    document.getElementById("resultado").innerHTML = `
        <h2>Pedido creado</h2>

        <p><strong>Cliente:</strong> ${cliente}</p>
        <p><strong>Producto:</strong> ${producto}</p>
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
                <p> Producto: ${pedido.producto}</p>
                <p> Cantidad: ${pedido.cantidad}</p>
            </div>
        `;

    });

    document.getElementById("resultado").innerHTML = contenido;
}