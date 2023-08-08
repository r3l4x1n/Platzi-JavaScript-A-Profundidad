function suma(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[1];
}

suma(1, 1, 2, 3);

//Uso en Declaración de Funciones
//En el siguiente ejemplo, el operador rest (...numeros) en la declaración de la función "sumar" permite que la función acepte cualquier número de argumentos y los agrupe en un array llamado numeros.
function sumar(...numeros) {
  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total;
}
console.log(sumar(1, 2, 3)); // Resultado: 6
console.log(sumar(4, 5, 6, 7)); // Resultado: 22

// Uso en Destructuración
//El operador * rest * también se puede utilizar en destructuración para capturar valores restantes en un array o en parámetros de funciones.
const [primero, segundo, ...restantes] = [1, 2, 3, 4, 5];
console.log(primero); // Resultado: 1
console.log(segundo); // Resultado: 2
console.log(restantes); // Resultado: [3, 4, 5]


// Uso en Parámetros de Funciones
function mostrarDatos(nombre, edad, ...otros) {
  console.log(`Nombre: ${ nombre } `);
  console.log(`Edad: ${ edad } `);
  console.log(`Otros: ${ otros } `);
}
mostrarDatos('Juan', 30, 'Madrid', 'Programador');