#Curso Closures y Scope en JavaScript
### Término que se refiere a la accesibilidad que tiene una variable, función u objeto.
- Scope
                
----
### Qué sucederá si ejecutamos el siguiente código?
`nameOfDog("Elmo"); function nameOfDog(name) {console.log(name); }; `
- Se muestra en consola el siguiente mensaje: "Elmo".
                
----
### Cuál de las siguientes opciones NO se puede considerar como una variable global?
let scope = "I am global"; **(CAMBIAR)**
                
----
### Cuál es el alcance que tiene el function scope?
- Se puede acceder a una variable que se ubica dentro de una función, pero no podemos llamarla desde el ámbito global.
                
----
### Variables declaradas con "let" y "const" son de "block scope"
- Verdadero
                
----
### Es el tipo de dato que se asigna por defecto al declarar una variable.
- Undefined
                
----
### Para qué se utiliza el modo estricto en JavaScript?
- Es un modo de trabajo que nos asegura que cada variable está definida al momento de crear nuestro código.
                
----
###  En qué momento se genera una closure?
- Cuando una función accede a una variable fuera de su contexto y la recuerda.
                
----
### Las variables declaradas con let y const, NO se pueden volver a declarar en el mismo ámbito.
- Verdadero
                
----
### Qué es Code Runner?
- Es un plugin de Visual Studio Code que permite ejecutar el código dentro del editor.
                
----
### Analiza el siguiente código e identifica la variable declarada en el alcance de la función:
`const fruits = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } }`
- var fruit1 = ‘apple’;
                
----
### JavaScript solo utiliza el hoisting en declaraciones, mas no en inicializaciones
- Verdadero
                
----
### La herramienta de Google Chrome que nos permite hacer debugging se llama?
- Chrome DevTools