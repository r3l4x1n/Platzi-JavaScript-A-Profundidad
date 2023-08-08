// Array Destructuring
let fruits = ['Apple', 'Banana', 'Orange', 'Cherry'];
let [a, b] = fruits;
console.log(a, fruits[2]);

const numeros = [1, 2, 3, 4, 5];
const [primero, segundo] = numeros;
console.log(primero); // Resultado: 1
console.log(segundo); // Resultado: 2

// Object Destructuring
let user = {userName: 'Fabian', age: 35};
let {userName, age} = user;
console.log(userName, user.age);

const persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
const { nombre, edad } = persona;
console.log(nombre); // Resultado: Juan
console.log(edad); // Resultado: 30

// Destructuring con asignación por defecto:
const person = { name: 'María' };
const { name, eddad = 25 } = person;
console.log(name); // Resultado: María
console.log(eddad); // Resultado: 25 (valor por defecto)


