# Historia de JavaScript: ¿qué es ECMAScript?
ECMAScript fue desarrollado por Brendan Eich, un ingeniero de Netscape Communications Corporation, y se basó en el lenguaje de programación Mocha.
[Ecma International](https://www.ecma-international.org/ "Ecma International") está a cargo de estandarizar este lenguaje de programación.
ECMAScript no es mas que un consorcio europeo que permitio generar un estandar del lenguaje del programacion Js.

- 1950: Las computadoras surgen para analizar informacion.
- 1969: Surge la Red **Arpanet**, precursora de Internet y capaz de conectar dos computadoras para compartir información.
- 1990: Tim Berners-lee crea las bases de la web, lo que se conoceria como World Wide Web.
- 1993: Se crea Mosaic, el primer navegador web. (*MOsaic + GodZill = moz://a*)
- 1994: Marc Andreessen crea la empresa Netscape, y a su vez crea el primer navegador comercial con el mismo nombre.

### Browser Wars:
La guerra de los navegadores surge por la necesidad de las empresas de acaparar con el mercado de la web. Fue una batalla entre Netscape y Microsoft. Netscape fue el primer navegador web popular, pero Microsoft utilizó su posición dominante en el mercado de los sistemas operativos Windows para promover Internet Explorer.
####Aquí hay un resumen de los acontecimientos más importantes de la guerra de los navegadores:

- 1995: Microsoft crea Internet Explorer.
- 1996: Microsoft introduce CSS.
- 1995: Netscape crea JavaScript.
- 1995: Microsoft crea JScript.
- 1997: ECMA se crea para estandarizar JavaScript.
- 1999: Netscape es comprado por AOL.

![ECMA Script Versions](https://static.platzi.com/media/user_upload/0_Im9v-j_Ik1s7BQyA-072fb555-1138-4c02-bb39-1a72b092cfc8.jpg "ECMA Script Versions")

#Qué es el TC39?

El Grupo de Trabajo de Ingeniería Técnica 39 (TC39) es un grupo de trabajo de la Ecma International que es responsable del desarrollo y mantenimiento del estándar ECMAScript, el lenguaje de programación de JavaScript. 
### Etapas de una nueva propuesta para ECMAScript:
- **Stage0:** Strawperson (borrador, cualquier persona puede tener una idea para implementar en el estandar).
- **Stage1:** Proposal (propuesta formal).
- **Stage2:** Draft (borrador, como va a funcionar la implementacion el impacto entre otros).
- **Stage3:** Candidate (se elige el candidato, vamos a tener una propuesta que va ayudar a mejorar el lenguaje).
- **Stage4:** Finished (va a ser desplegada en la version normalmente en JUNIO).

# ECMAScript (ES6)
En ECMAScript 6 (ES6 o ES2015) fueron publicadas varias características nuevas, dos de estas son una nueva forma de declaración de variables con `let` , `const` y funciones flechas ([Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions "Arrow Functions")).
Las nuevas palabras reservadas `let` y `const` resuelven varios problemas con `var` como el scope, hoisting, variables globales, re-declaración y re-asignación de variables.

- Las declaraciones `var` tienen un ámbito global, mientras que `let` y `const` tienen un ámbito de bloque. Eso quier decir que solo pueden ser accedidas dentro del bloque de codigo que se declaran.
- Las variables `var` pueden ser modificadas y re-declaradas dentro de su ámbito. Las variables `let` pueden ser modificadas, pero no re-declaradas; las variables `const` no pueden ser modificadas ni re-declaradas.
- Todas ellas se elevan a la parte superior de su ámbito. Pero mientras que las variables `var` se inicializan con undefined. `let` y `const` no se inicializan.
- Mientras que `var` y `let` pueden ser declaradas sin ser inicializadas, `const` debe ser inicializada durante la declaración.

En conclusión, si intentas re-declarar una variable declarada con `let` y `const` habrá un error de *variable ya declarada*; por otro lado, si intentas re-asignar una variable declarada con const existirá un*“error de tipo*”.
En los demás casos, JavaScript lo aceptará como válidos, algo problemático con `var`, y por eso deja de utilizarlo.

# Arrow Functions
Las funciones flecha son una nueva sintaxis para las funciones en JavaScript. Se introdujeron en la versión ES6 de JavaScript, y son una forma más compacta y concisa de escribir funciones. Se denominan función flecha por el elemento => en su sintaxis.
- **Las funciones flecha se definen con la siguiente sintaxis:**
`const myFunction = (param1, param2) => {
  // código de la función
};`

- **Retorno implícito**
Las funciones flecha tienen un retorno implícito, es decir, se puede omitir la palabra reservada return, para que el código sea escrito en una sola línea.
`const suma = (num1, num2) => num1 + num2`

# Stirngs
Las plantillas literales (template literals), también conocidas como template strings, permiten crear cadenas de texto de manera más flexible y expresiva al permitir la interpolación de variables y expresiones dentro de comillas invertidas (`) en lugar de comillas simples o dobles tradicionales.
- Ejemplo:
`const variable = "world";`
`const templateString = Hello, ${variable}!;`

# Default Params
Los parámetros por defecto (default params) consisten en establecer un valor por defecto a los parámetros de una función, para asegurar que el código se ejecute correctamente en el caso de que no se establezcan los argumentos correspondientes en la invocación de la función.
Antes de ES6, se debía establecer una variable y utilizar el operador OR ( ||) con el valor por defecto necesario.

# Asignación De Desestructuración
La destructuración (*destructuring*), es una de las característica que permite descomponer estructuras de datos, como objetos y arrays, en variables individuales. Esto hace que sea más fácil y conciso acceder a los elementos dentro de esas estructuras y asignarlos a variables específicas.
En JavaScript, el destructuring se puede utilizar tanto con **objetos** como con **arrays**.
- **Destructuring de Objetos:**
`const persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };`
`const { nombre, edad } = persona;`
`console.log(nombre); // Resultado: Juan`
`console.log(edad);   // Resultado: 30`

- **Destructuring de Arrays:**
`const numeros = [1, 2, 3, 4, 5];`
`const [primero, segundo] = numeros;`
`console.log(primero); // Resultado: 1`
`console.log(segundo); // Resultado: 2`

- **Destructuring con asignación por defecto:**
`const persona = { nombre: 'María' };`
`const { nombre, edad = 25 } = persona;`
`console.log(nombre); // Resultado: María`
`console.log(edad);   // Resultado: 25 (valor por defecto)`

# Operador de Propagación (Spread Operator)
El [Operador de Propagación (Spread Operator)](https://www.w3schools.com/react/react_es6_spread.asp "Operador de Propagación (Spread Operator)"), es una característica que se utiliza para descomponer elementos de arrays, objetos y otros tipos de datos en lugares donde se esperan múltiples elementos. En esencia, permite expandir una estructura en varios elementos individuales.
En JavaScript, el operador de propagación se denota mediante tres puntos consecutivos (...).
- **Uso con Arrays:**
```javascript
const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5];
console.log(nuevosNumeros); // Resultado: [1, 2, 3, 4, 5]
```
- **Uso con Objetos:**
```javascript
const persona = { nombre: 'Ana', edad: 30 };
const nuevaPersona = { ...persona, ciudad: 'Madrid' };
console.log(nuevaPersona); // Resultado: { nombre: 'Ana', edad: 30, ciudad: 'Madrid' }
```
- **Uso para Pasar Argumentos en Funciones:**
```javascript
function sumar(a, b, c) {
  return a + b + c;
}
const numeros = [1, 2, 3];
const resultado = sumar(...numeros);
console.log(resultado); // Resultado: 6
```
- **Uso para Clonar Arrays u Objetos:**
```javascript
const originalArray = [1, 2, 3];
const copiaArray = [...originalArray];
const originalObjeto = { nombre: 'Elena', edad: 25 };
const copiaObjeto = { ...originalObjeto };
```
- **Combinando Arrays:**
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado); // Resultado: [1, 2, 3, 4, 5, 6]
```

# Operador Rest (Rest Operator)
El operador rest se utiliza en la declaración de funciones para capturar un número variable de argumentos en forma de un array. A diferencia del operador de propagación (spread operator), que se utiliza para descomponer estructuras en elementos individuales, el operador rest se usa para agrupar múltiples elementos en un array.
En JavaScript, el operador rest se denota también mediante tres puntos consecutivos (...), pero su uso es diferente.
- **Uso en Declaración de Funciones**
En el siguiente ejemplo, el operador rest (...numeros) en la declaración de la función "sumar" permite que la función acepte cualquier número de argumentos y los agrupe en un array llamado *numeros*
```javascript
function sumar(...numeros) {
  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total;
}
console.log(sumar(1, 2, 3)); // Resultado: 6
console.log(sumar(4, 5, 6, 7)); // Resultado: 22
```

- **Uso en Destructuración**
El operador *rest* también se puede utilizar en destructuración para capturar valores restantes en un array o en parámetros de funciones.
```javascript
const [primero, segundo, ...restantes] = [1, 2, 3, 4, 5];
console.log(primero); // Resultado: 1
console.log(segundo); // Resultado: 2
console.log(restantes); // Resultado: [3, 4, 5]
```

- Uso en Parámetros de Funciones
```javascript
function mostrarDatos(nombre, edad, ...otros) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Edad: ${edad}`);
  console.log(`Otros: ${otros}`);
}
mostrarDatos('Juan', 30, 'Madrid', 'Programador');












