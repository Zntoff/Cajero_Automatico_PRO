
// Constructor para el usuario 
// let usuario = {
//     usuario : usuario.nombre,
//     telefono : usuario.telefono,
//     password: usuario.password,
//     money: usuario.money
// }
// Usuarios de testeo
let hernan = {
    nombre : "hernan",
    telefono : 300533,
    password : "asdfg",
    money : 300
}

let maria = {
    nombre : "maria",
    telefono : 123457,
    password : "asdfg",
    money : 250
}
let laura = {
    nombre : "laura",
    telefono : 123456,
    password : "asdfg",
    money : 700
}


// Acceder al dashboard verificando el usuario y la contraseña



function validarUsuario(){
    let telefono = getElementById("#telefono");
    let password = getElementById("#password");
    if (telefono == hernan.telefono && password == hernan.password) {
        alert("si esta correcto");
} else (alert("No se pudo validar"))};
