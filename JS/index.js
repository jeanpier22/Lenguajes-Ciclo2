/* alert("Bienvenido"); */

const form = document.getElementById('form');


form.addEventListener('submit',function(event){
    event.preventDefault();

    const nombre = document.getElementById('name').value;
    const edad = document.getElementById('age').value;

    console.log(nombre);
    console.log(edad);
    console.log(typeof(parseInt(edad)));
    
    document.getElementById('resultado').innerHTML = nombre;

});
/* Operaciones */

var a = 2+2;
var b = 2-2;
var c = 2*2;
var d = 2/2;
console.log(typeof(a));
console.log(b);
console.log(c);
console.log(d);

var nombre = "Jeanpier";
var apellido = "Ancori";
console.log(typeof(nombre));
console.log(apellido);

var state = true;
console.log(typeof(state))

var numero = "5";
console.log(parseInt(numero));

codigo = `<h1>Mi proyecto</h1>
          <p>Lorem ipsum, ${nombre}  ${apellido} sit amet consectetur adipisicing elit. Perspiciatis doloremque, provident eveniet neque magni distinctio omnis ullam, rem ducimus iusto dolor praesentium sed quis iste perferendis exercitationem? Facere, doloribus dolores.</p>`;

document.getElementById('resultado').innerHTML = codigo;


function suma(a,b){
    const res = a+b;
    console.log(res);
    return res;
}


document.getElementById('resultado').innerHTML = suma(3,10);


