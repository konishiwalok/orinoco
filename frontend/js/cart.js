

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
    })
}