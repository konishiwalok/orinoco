const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const items = document.getElementById('items')
const footer = document.getElementById('footer').content



const addCarrito = e => {
    // console.log(e.target)
    // console.log (e.target.classList.contains('btn-dark'))
    if(e.target.classList.contains('btn-dark')) {
    setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}
const setCarrito = objeto =>{
    // console.log(objeto)
    const producto = { 
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h3').textContent,
        price: objeto.querySelector('p').textContent,
        cantidad:1
    } 
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
    pintarCarrito = () => {
        console.log(carrito)
    }

    
}














