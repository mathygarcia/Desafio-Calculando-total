precio = '400000'
precioFijo = document.querySelector('#precio')
precioFijo.innerHTML = precio

function calcularTotal() {

    cantidad = document.querySelector('#cantidad');
    mostrarCantidad = document.querySelector('#cantidad-productos');
    mostrarCantidad.innerHTML = cantidad.value;

    totalBoleta = Number(cantidad.value) * Number(precio);
    precioTotal = document.querySelector('#precio-total');
    precioTotal.innerHTML = totalBoleta;

    customColor = document.querySelector("#color").value;
    color = customColor.toString().toLowerCase();
    c = new Option().style;
    c.color = color;

    if ((c.color == color) == true) {
        document.querySelector("#custom-color").style.backgroundColor = color;
    }
    console.log(cantidad.value);
    console.log(totalBoleta);
} 