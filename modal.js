const modalContenedor = document.querySelector('.modal-container')
const abrirCarrito = document.getElementById('abrir-carrito')
const cerrarCarrito = document.getElementById('cerrar-carrito')
const modalCarrito = document.querySelector('.modal-carrito')


abrirCarrito.addEventListener('click', ()=> {
    modalContenedor.classList.toggle('modal-active')
})

cerrarCarrito.addEventListener('click', ()=> {
    modalContenedor.classList.remove('modal-active')
})

modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
})

