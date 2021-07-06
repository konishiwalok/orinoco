const btnCart = document.getElementById('confirmPurchase')

btnCart.addEventListener('click', e => {
  //console.log(e.target.id === 'confirmPurchase');
  sendInfo(e);
})

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
      invalidInputElt()
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

const sendInfo = e => {
  //console.log(e.target);
  //console.log(e.target.classList.contains('add-cart'));
  // console.log('====================================');
  //     console.log('inicio');
  //     console.log('====================================');

  if (e.target.classList.contains('confirmPurchase')) {
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
    //     console.log('====================================');
    // console.log('fallo');
    // console.log('====================================');
        alert("Veuillez remplir les champs correctements avant de procéder au paiement")

    }
    // console.log('====================================');
    // console.log('ultimo');
    // console.log('====================================');

    const lsc = JSON.parse(localStorage.getItem('cart'))
    const products = Object.values(lsc).map((product) => {
      return product.id
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

    const url = 'http://localhost:3000/api/cameras/order';
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }

    const totalPrice = document.getElementById('total-price').innerHTML
    

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        
        const info = {
          firstName: json.contact.firstName,
          lastName: json.contact.lastName,
          address: json.contact.address,
          city: json.contact.city,
          price: totalPrice,
        }
        console.log(info)
        localStorage.removeItem('cart', JSON.stringify(cart))
        localStorage.setItem('dUser', JSON.stringify(info));
        window.location.href = `${window.location.origin}/frontend/confirmation.html?orderId=${json.orderId}`
      })
      .catch(() => {
        alert(error)
      })
  }
  e.stopPropagation();
}

























