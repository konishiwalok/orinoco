

const valores = window.location.search;
//Creamos la instancia
const urlParams = new URLSearchParams(valores);
//Accedemos a los valores
let orderId = urlParams.get('orderId');




const usuarioInfo = JSON.parse(localStorage.getItem('dUser') || '{}')



console.log(usuarioInfo);
document.getElementById('commandId').textContent = orderId
document.getElementById('nomId').textContent = usuarioInfo.lastName
document.getElementById('prenomId').textContent = usuarioInfo.firstName
document.getElementById('adresseId').textContent = usuarioInfo.address
document.getElementById('prixId').textContent = usuarioInfo.price


localStorage.removeItem('dUser')



// ;(() => {
//     const orderId = new URL(location.href).searchParams.get('orderId') || 'ERREUR'
//     document.getElementById('commandId').textContent = orderId
//   })()
 
//   function sendOrder() {
//     const firstname = document.getElementById('firstname').value
//     const lastname = document.getElementById('lastname').value
//     const adress = document.getElementById('adress').value
//     const zipcode = document.getElementById('zipcode').value
//     const email = document.getElementById('email').value
//     const city = document.getElementById('city').value
    
//     const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
//     const zipcodeRegex = /[0-9]{5}(-[0-9]{4})?/
  
//     if (!(
//       firstname.length > 1
//       && lastname.length > 1
//       && emailRegex.test(email)
//       && adress.length > 6
//       && zipcodeRegex.test(zipcode)
//       && city.length > 1
//     )) {
//       alert("Veuillez remplir les champs correctements avant de procéder au paiement")
//       return
      
//     }
    
// const showAllCards = data => {
//   data.forEach( product => {

//       cardItems.querySelector('h5').textContent = product.name;
//       cardItems.querySelector('p').textContent = product.description;
//       cardItems.querySelector('img').setAttribute('src', product.imageUrl);
//       cardItems.querySelector('a').setAttribute('href',  `product.html?id=${product._id}`);

//       const clone = cardItems.cloneNode(true);
//       fragment.appendChild(clone);
//   })
//   items.appendChild(fragment);
// }