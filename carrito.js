const carritoDeCompras = []

const carrito = (productoId)=>{

    const contenedorCarrito = document.getElementById('carrito-contenedor');

    const renderProdcutoCarrito = () =>{
        let producto = productos.find( producto => producto.id == productoId);
        carritoDeCompras.push(producto);

        producto.cantidad = 1;

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>`;
        contenedorCarrito.appendChild(div)
    }
    renderProdcutoCarrito()
}