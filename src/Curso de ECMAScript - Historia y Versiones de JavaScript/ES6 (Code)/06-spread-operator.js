// Uso Con Objetos
let person = {name: 'relaxadito', age: 100};
let country = 'Narnia';

let data = {...person, country}; 
console.log(data); // Return: {name: 'relaxadito', age: 100, country: 'Narnia'}

const persona = { nombre: 'Ana', edad: 30 };
const nuevaPersona = { ...persona, ciudad: 'Madrid' }; // Se puede add nuvos valores si se desea.
console.log(nuevaPersona); // Resultado: { nombre: 'Ana', edad: 30, ciudad: 'Madrid' }

// Uso para Clonar Arrays u Objetos
const originalArray = [1, 2, 3];
const copiaArray = [...originalArray];
const originalObjeto = { nombre: 'Elena', edad: 25 };
const copiaObjeto = { ...originalObjeto };

// Uso para Pasar Argumentos en Funciones
function sumar(a, b, c) {
    return a + b + c;
    }
    const numeros = [1, 2, 3];
    const resultado = sumar(...numeros);
    console.log(resultado); // Resultado: 6