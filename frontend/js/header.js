


const header = `
<!-- NAVBAR-->
<nav class="navbar navbar-expand-sm navbar-light " id="navbar">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="img/logo.png" alt="" width="200">
        </a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto ">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Accueil</a></li>
                <li class="nav-item"><a class="nav-link" href="panier.html">Panier</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Register</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Sign in</a></li>
            </ul>
        </div>
    </div>
</nav>
</nav>
`

document.body.insertAdjacentHTML('afterbegin', header);