

const url = 'http://localhost:3000/api/cameras';

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


const imprimirCards = product => {
    

       
        produitItems.querySelector('h3').textContent = product.name;
        produitItems.querySelector('p').textContent = product.description;
        produitItems.querySelector('img').setAttribute('src', product.imageUrl);
        produitItems.querySelector('.price-camera').textContent = product.price;
        produitItems.querySelector('.btn-dark').dataset.id = product.id;        
        
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