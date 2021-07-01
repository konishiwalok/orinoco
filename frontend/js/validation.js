




// function enviarFormulario(){
//   console.log("enviando formulario")

//   let mensajesError =[]; 

//   if (nom.value === null ||nom.value === ''){
//     meansajError.push
//   }

//   return false
// }



// // Input validity
// let nom= document.getElementById('fistname');
// let lastname= document.getElementById('lastname');
// let email= document.getElementById('email');
// let adress= document.getElementById('adress');
// let zipcode= document.getElementById('zipcode');
// let city= document.getElementById('city');

// const formulario = document.getElementById('user-form');
// const submitBoton = document.getElementById('confirmPurchase');


// document.querySelectorAll('.form-box').forEach((box)) =>{

  //   const boxInput = box.querySelector('input');

//   boxInput.addEventListener('keydown',(event) => {
  
//     console.log ('input $ {boxInput.firstname} value ' , boxInput.value);

//   });

// Input validity
const expresiones = {
  	name: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  	lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

  }

watchValidity(document.getElementById('firstname'), (e) => e.target.value.length > 1)
watchValidity(document.getElementById('lastname'), (e) => e.target.value.length > 1)
  watchValidity(document.getElementById('email'), (e) => {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return emailRegex.test(e.target.value)
  })
  watchValidity(document.getElementById('adress'), (e) => e.target.value.length > 6)
  watchValidity(document.getElementById('zipcode'), (e) => {
    const zipcodeRegex = /[0-9]{5}(-[0-9]{4})?/
    return zipcodeRegex.test(e.target.value)
  })
  watchValidity(document.getElementById('city'), (e) => e.target.value.length > 1)

function watchValidity(elt, condition) {
  elt.oninput = (e) => {
    if (condition(e)) {
      validInputElt(e.target)
    } else {
      neutralInputElt(e.target)
    }
  }

  elt.onblur = (e) => {
    if (!condition(e)) {
      invalidInputElt(e.target)
    }
  }
}

function validInputElt(elt) {
  elt.style.border = 'solid 1px green'
  elt.style.boxShadow = '#00800066 0px 0px 4px'
}

function invalidInputElt(elt) {
  elt.style.border = 'solid 1px red'
  elt.style.boxShadow = 'rgba(128, 0, 0, 0.4) 0px 0px 4px'
}

function neutralInputElt(elt) {
  elt.style.border = ''
  elt.style.boxShadow = ''
}

function sendOrder() {
  const firstname = document.getElementById('firstname').value
  const lastname = document.getElementById('lastname').value
  const adress = document.getElementById('adress').value
  const zipcode = document.getElementById('zipcode').value
  const email = document.getElementById('email').value
  const city = document.getElementById('city').value
  
  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  const zipcodeRegex = /[0-9]{5}(-[0-9]{4})?/

  if (!(
    firstname.length > 1
    && lastname.length > 1
    && emailRegex.test(email)
    && adress.length > 6
    && zipcodeRegex.test(zipcode)
    && city.length > 1
  )) {
    alert("Veuillez remplir les champs correctements avant de procéder au paiement")
    return
  }

  const products = Object.values(Cart.products).map((product) => {
    return product._id
  })

  const order = {
    contact: {
      firstName: firstname,
      lastName: lastname,
      address: adress + ' ' + zipcode,
      city: city,
      email: email,
    },
    products: products,
  }

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(order),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  }
 
  fetch(`http://localhost:3000/api/camera/order`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      localStorage.removeItem('cart', JSON.stringify(cart))
      window.location.href = `${window.location.origin}/confirmation.html?orderId=${json.orderId}`
    })
    .catch(() => {
      alert(error)
    })
}


























