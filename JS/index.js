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


var array1 = [1,2,3,4,5];
console.log(array1[2]);
console.log(typeof(array1));

var diccionario1 ={
        nombre:"Jeanpier",
        apellido: "Ancori",
        dni: 12121212
    }
console.log(diccionario1['nombre']);

var alumnos = [{
                    nombre:"Jeanpier",
                    apellido: "Ancori",
                    dni: 12121212
                },
                {
                    nombre:"Pablo",
                    apellido: "Ancori",
                    dni: 12121212,
                    cursos:["HTML","CSS","JS"]
                },  
                {
                    nombre:"Juan",
                    apellido: "Ancori",
                    dni: 12121212
                }
            ];
console.log(alumnos[1]['nombre']);
console.log(alumnos[1]['cursos'][0]);

console.log(alumnos[0]['nombre']);
console.log(alumnos[1]['nombre']);
console.log(alumnos[2]['nombre']);


for(let i=0; i<=2; i++){
    console.log(alumnos[i]['nombre']);
}

var object = {
    nombre:"Juan",
    apellido: "Ancori"

}
for(let i in alumnos){
    console.log("Mi nombre es:  " + alumnos[i].nombre);

}



