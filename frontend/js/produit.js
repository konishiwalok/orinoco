

const url = 'http://localhost:3000/api/cameras';

const items = document.getElementById('items')
const products = document.getElementById('products'); // llama donde va a ir la info 
const produitItems = document.getElementById('produit-card').content; // llamado del template por id
const fragment = document.createDocumentFragment(); // agrega el fragmento de codigo que se quiere mostrar
let carrito = {}
let lensesAllButtons;

const valores = window.location.search;
//Creamos la instancia
const urlParams = new URLSearchParams(valores);
//Accedemos a los valores
var producto = urlParams.get('id');

console.log(producto)

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

products.addEventListener('click' , e => {
 addCarrito(e)
 })

const fetchData = async () => {

    try {
        const res = await fetch(url+'/'+producto); // respuesta del API
        const data = await res.json(); // cambio de los datos a archivo JSON
        console.log(data);  //
        imprimirCards(data) //
    } catch (error) {
        console.log(error);
    }
}


const imprimirCa%rds = product => {
    
        produitItems.querySelector('h3').textContent = product.name;
        produitItems.querySelector('p').textContent = product.description;
        produitItems.querySelector('img').setAttribute('src', product.imageUrl);
        produitItems.querySelector('.price-camera').textContent = product.price;
        produitItems.querySelector('.btn-dark').dataset.id = product._id;        
        
        console.log(product.lenses)
        product.lenses.forEach(element => {
            console.log(element)
            const lenseButton = `
                <input id="${element}" type="radio" name="lense" onclick="getCurrentItemQuantity('${element}');">${element}</button>
            `;
            lensesAllButtons = produitItems.querySelector("#lenses-all-buttons");
            lensesAllButtons.innerHTML += lenseButton;
        });

        const clone = produitItems.cloneNode(true);
        
        fragment.appendChild(clone);

    products.appendChild(fragment);
}


products.addEventListener('click', e =>{
    addCarrito(e)
})
// esto es para agregar el boton y su id
 
const addCarrito = e => {
    // console.log(e.target)
    // console.log (e.target.classList.contains('btn-dark'))
    if(e.target.classList.contains('btn-dark')) {
    setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto =>{
     console.log(objeto)
    const producto = { 
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h3').textContent,
        price: objeto.querySelector('p').textContent,
        cantidad:1
    } 
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = { ...producto }
    pintarCarrito() 
    pintarCarrito = () => {
        console.log(carrito)
    }
}

const  pintarCarrito = () => {
    // console.log(carrito)
    items.innerHtml = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('.span').textContent = producto.cantidad + producto.price

        const clone = templateCarrito.cloneNode(true)
        fragment.appendchild(clone)
})
    items.appendChild(fragment)

    pintarFooter()
    localStorage.setItem('carrito', JSON.stringify(carrito))



/*esta parte es para modif el txt de carrito vacio a lleno */
const pintarFooter = () =>{
    footer.innerHtml =''
    if(Object.keys(carrito).length === 0) {
        footer.innerHtml = `
        <th scope="row "class="bg-info" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}
const btnAccion = e => {
    console.log(e.target)
    /*accion augmentar  */
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }
    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
    }
    e.stopPropagation()
}}
    
