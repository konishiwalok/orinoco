
  // Input validity
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
  elt.style.border = 'solid 2px red'
  elt.style.boxShadow = 'rgba(128, 0, 0, 0.4) 0px 0px 4px'
}

// function neutralInputElt(elt) {
//   elt.style.border = ''
//   elt.style.boxShadow = ''
// }

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

  const product = Object.values(cart.product).map((product) => {
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
    product: product,
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
      window.location.href("confirmation.html")
    })
    .catch(() => {
      alert(error)
    })
}
