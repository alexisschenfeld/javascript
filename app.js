const mostrarProductos = (producto) => {
    const contenedorProductos = document.getElementById('producto-contenedor')
    producto.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = `<div class=card>
                         <h3>${producto.nombre}</h3>
                         <p>Precio:$ ${producto.precio}</p>
                         <button class= boton id=boton${producto.id}>Comprar</button>
                         </div>`
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', ()=>{
            carrito(producto.id)
        } )
    })
}
mostrarProductos(productos);