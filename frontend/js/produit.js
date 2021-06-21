

const url = 'http://localhost:3000/api/cameras';

const products = document.getElementById('products'); // llama donde va a ir la info 
const produitItems = document.getElementById('produit-card').content; // llamado del template por id
const fragment = document.createDocumentFragment(); // agrega el fragmento de codigo que se quiere mostrar

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})


const fetchData = async () => {

    try {
        const res = await fetch(url); // respuesta del API
        const data = await res.json(); // cambio de los datos a archivo JSON
        console.log(data);  //
        imprimirCards(data) //
    } catch (error) {
        console.log(error);
    }
}


const imprimirCards = data => {
    data.forEach( product => {

       
        produitItems.querySelector('h3').textContent = product.name;
        produitItems.querySelector('p').textContent = product.description;
        produitItems.querySelector('img').setAttribute('src', product.imageUrl);
        produitItems.querySelector('.price-camera').textContent = product.price;
      


        const clone = produitItems.cloneNode(true);
        fragment.appendChild(clone);

    })
    products.appendChild(fragment);
}
/* PAGE PRODUIT */
