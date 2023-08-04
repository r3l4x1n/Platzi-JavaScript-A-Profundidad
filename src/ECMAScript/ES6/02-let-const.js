var lastName = 'David'; // Declaracion e Inicializacion
lastName = 'Oscar'; // Reasignacion de Variable
console.log(lastName);

// En el caso de "let" tambien aplica, con la salvedad de que las variables con "let" no pueden ser redeclaradas.
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

// las variables "const" no pueden ser modificadas, ni re-declaradas.
const animal = 'Dog';
animal = 'Cat';
console.log(animal);



const fruits = () => {
    if(true){
        var fruit1 = 'Piña'; //Funcion Scope
        let fruit2 = 'Melon'; //Block Scope
        const fruit3 = 'Fresa'; //Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();


//Scope
//En el tema del scope, let y const tienen un scope de bloque y var no.
//Ejemplo:
    {
    var nameVar = "soy var"
    let nameLet = "soy let"
    }
    
    console.log(nameVar) // 'soy var'
    console.log(nameLet) // ReferenceError: nameLet is not defined



