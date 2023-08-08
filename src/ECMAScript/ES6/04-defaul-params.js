// Forma Tradicional
function newUser(name, age, country){
    var name = name ||'fabia';
    var age = age || 35;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('Relax', 23, 'MX');

// Modificacion ES6
function nuevoUsuario(name = 'defaultName', age = 'defaultAge', country = 'defaultCountry'){
    console.log(name, age, country);
}

nuevoUsuario();
nuevoUsuario('user1', 'userAge', 'userCountry')

