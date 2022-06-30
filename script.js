console.log("Funcionando!");

// HOISTING Y SCOPES

// hoisting es, que todas las variables creadas con var, son leidas como existen y suben al inicio del codigo.
// var myName = undefined;

console.log("antes de declarar", myName + " Berrizbeitia");
// console.log("antes de declarar", myAge)

var myName = "Jorge"; // var genera un efecto de hoisting
let myAge = 35;

console.log("despues de declarar", myName);
console.log("despues de declarar", myAge);

// ... muchas lineas de codigo

// let myName = "Bob"
var myName = "Bob"; // reemplazando el valor anterior
// es lo mismo que myName = "Bob" // esto crea problemas en el codigo

console.log("luego de crear nueva variable", myName);

// hoisting con funciones

// hace hoisting de myFunction con su referencia correcta 5555 => 9999

console.log("antes de declarar", myFunction());

// estas tambien aplican hoisting
// tiene una referencia 5555
function myFunction() {
  return "Hola";
}

console.log("despues de declarar", myFunction());

// ref 9999
function myFunction() {
  return "Adios";
}

console.log("despues de crearla nuevamente", myFunction());

// de esta forma se crean mejores funciones y previenen bugs
let myArrowFunction = () => {
  return "mejor funcion";
};

// nueva prueba

// JS hace una prelectura del codigo y buscar var y function
// var nuevaVariable = undefined;
// var nuevoArr = undefined
// function anotherFunc() {

// }

// ...
console.log(nuevoArr);

var nuevaVariable = "bob";
var nuevoArr = [2, 4, 6];

let nuevaVarLet = "patricio";

function anotherFunc() {}

let funcFlecha = () => {};

// SCOPES

// SCOPES son secciones delimitas de JS donde escribimos nuestro codigo

// 1. SCOPE GLOBAL

// cualquier lugar mi codigo tendrá acceso a varibles globales
let variableGlobal = 50;

function someFunc() {
  for (let i = 0; i < 5; i++) {
    if (5 === 5) {
      console.log(variableGlobal);
    }
  }
}
someFunc();

// 2. SCOPES DE BLOQUE => {  }
// var string2 = undefined

{
  // esto es un scope de bloque
  let string1 = "variable con let"; // variables creadas con let se mantienen en su scope
  var string2 = "variable con var";
  string3 = "variable sin haber sido declarada"; // no hace hoisting, esto simplemente la crea en el scope GLOBAL
  // NUNCA DECLARAR VARIABLES SIN USAR LET O CONST
  console.log(string1, string2, string3);
}

// ESO APLICA EN TODOS LOS CONDICIONALES Y TODOS LOS TIPOS DE BUCLES TRADICIONALES

// console.log(string1) // error, se mantiene dentro del scope
console.log(string2); // esta siendo creada en el scope global
console.log(string3);

// 3. SCOPES DE FUNCIONES

function someAges() {
  // var age2 = undefined;

  let age1 = 23; // siempre se queda dentro de su scope (de funcion o de bloque)
  var age2 = 40;
  age3 = 33;
}

someAges();

// console.log(age1) // no hay acceso, como debe ser
// console.log(age2) // no hay acceso, como debe ser
console.log(age3);

// CONCLUSIONES FINALES

/* 
- NO USAR VAR
- USAR FUNCIONES DE FLECHA SIEMPRE QUE SEA COMODO PARA USTEDES
- SIEMPRE DECLARA LAS VARIABLES (LET O CONST)
*/

for (i = 0; i < 5; i++) {
  console.log("hola");
}

console.log(i);

for (patata = 0; patata < 5; patata++) {
  console.log(i);
  console.log("hola");
}

// OBJETOS

// let headPhonePrice = 100;
// let headPhoneBrand = "SteelSeries";
// let headPhoneIsNew = true;

{
  // propiedad es todo
  // key: value
}

let headPhones = {
  price: 100, // propiedad
  brand: "SteelSeries",
  isNew: true,
  "max volume": 90,
  // someArr: [],
  // someObj: {},
  // someFunction() {
  //     // metodo
  //     return "Hola"
  // }
};

console.log(headPhones["max volume"]); // NOTACION DE CORCHETES. EL NOMBRE DE LA PROPIEDAD DEBE SER EN STRING
console.log(headPhones.price); // NOTACION DE PUNTOS

let someVariable = "max volume";
console.log(headPhones[someVariable]);

// usamos notacion de corchetes cuando la propiedad tiene espacios o cuando evaluamos la propiedad como una variable externa

// actualizar el objeto

// quiero cambiar isNew de true a false
headPhones.isNew = false;
console.log("luego de cambiar isNew", headPhones);

// para agregar una nueva propiedad color luego de que fue creado
headPhones.color = "white";
console.log("luego de agregar color", headPhones);

delete headPhones.brand;
console.log("luego de borrar brand", headPhones);

// delete headPhones["max volume"]
// console.log("luego de borrar max volume", headPhones);

console.log(headPhones.isSilent); // undefined

// headPhones.color = undefined // una forma truquillo de borrar una propiedad
// console.log("luego de borrar color", headPhones); // pero realmente se puede considerar mala practica

// OBJETO GLOBAL OBJECT

console.log(Object.keys(headPhones)); // da un array con todos las keys de propiedades
console.log(Object.values(headPhones)); // da un array con todos los valores de propiedades

let arrayOfKeys = Object.keys(headPhones);

for (let eachKey of arrayOfKeys) {
  console.log(eachKey);
  // como puedo acceder a los valores?
  // console.log(headPhones.eachKey) // no funciona asi
  console.log(arrayOfKeys[eachKey]);
}

// for in en objectos. Es el Loop utilizado para Objetos

for (let eachKey in headPhones) {
  // automaticamente el bucle for in me da los nombres de las propiedades del objeto
  console.log(eachKey);
  console.log(headPhones[eachKey]);
  if (typeof headPhones[eachKey] === "number") {
    headPhones[eachKey] = headPhones[eachKey] * 100;
  }
}

console.log(headPhones);

// estructura de datos

const superheroes = [
  {
    name: "Batman",
    location: "Gotham",
    superpowers: true,
  },
  {
    name: "Superman",
    location: "Metropolis",
    superpowers: true,
  },
  {
    name: "Aquaman",
    location: "Unknown",
    superpowers: true,
  },
  {
    name: "Wonder Woman",
    location: "Themyscira",
    superpowers: true,
    hairColor: "black"
  },
];

// quiero acceder al primer elemento del array y cambiar la propiedad superpower

superheroes[0].superpowers = false;
console.log(superheroes);

// ejemplo de borrar un obj dentro de un array
delete superheroes[3].hairColor

superheroes.push({
  name: "Green Lantern",
  location: "Unknown",
  superpowers: true,
});

console.log(superheroes);

// con const puedo modificar los valores primitivos dentro de un arr/obj pero no puedo asignarle un nuevo valor/ref
// const newArr = [4, 10, 20]
// //   newArr = [10, 10, 20]
// newArr[0] === 40


// vamos a hacer una funcion que:
// reciba un superheroe
// revise si el superheroe tiene poderes
// si tiene: "Enhorabuena! te ha salvado un heroe con poderes!"
// si no: "meh"

function hasSuperpowers(oneSuperhero) {
    // console.log(oneSuperhero)
    if ( oneSuperhero.superpowers === true ) {
        return "Enhorabuena! te ha salvado un heroe con poderes!"
    } else {
        return "meh, whatave"
    }
}

console.log( hasSuperpowers( superheroes[0] ) )
console.log( hasSuperpowers( superheroes[1] ) )


// funcion que determine un heroe aleatorio del array
// recibe el array
// arrojar un OBJ de heroe aleatorio del array

function randomSuperhero(superheroArr) {

    let numRandom = Math.random() * superheroArr.length
    let indexRandom = Math.floor(numRandom)
    // console.log(indexRandom)
    // console.log( superheroArr )
    let randomHero = superheroArr[indexRandom]
    // console.log(randomHero)
    return randomHero
}

console.log( randomSuperhero(superheroes) );
console.log( randomSuperhero(superheroes) );


let superheroQueNosSalvara = randomSuperhero(superheroes)
console.log( superheroQueNosSalvara.name )
console.log( hasSuperpowers(superheroQueNosSalvara) )
