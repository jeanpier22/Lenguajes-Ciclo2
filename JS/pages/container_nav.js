const navbar = document.querySelector(".navbar");
const options = ["Portero","Defensa","Centrocampista","Delantero","Contacto"];


let links = options.map(option => `<a onmouseover="mostrarSeccion('${option}')">${option}s</a>`)  ;
console.log(links);

    nav = ` 
        <a href="#" class="logo">Real Madrid FC</a>
        <div class="nav-links">
        ${links}        
        </div>`;

navbar.innerHTML += nav ;

