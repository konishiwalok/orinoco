

const itemsCart = document.getElementById('items-cart')
const footerCart = document.getElementById('footer-cart')
const templateFooter = document.getElementById('template-footer').content;
const templateCart = document.getElementById('template-cart').content;

document.addEventListener('DOMContentLoaded', () => {
    showCart();
})


const showCart = () => {
    Object.values(cart).forEach(product => {
       
        templateCart.querySelector('th').textContent= product.id;
        templateCart.querySelector('td')[0].textContent= product.name;
        templateCart.querySelector('.item-cantidad').textContent= product.cantidad;
        templateCart.querySelector('span').textContent= product.price;
   
    const clone = templateCart.cloneNode(true);
    fragment.appendChild(clone);
})
   itemsCart.appendChild(fragment);
}