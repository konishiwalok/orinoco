


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