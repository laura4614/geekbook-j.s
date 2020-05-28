'use strict';
let nombre1 = 'Dubenis', nombre2='Andrea',entrada;

entrada=prompt("Ingrese su nombre: ");

if (entrada === nombre1 || entrada ===nombre2 ) {
  alert('Bienvenida, '+entrada); // Esta línea se ejecuta solo si se cumple la condición
} 
else {
  alert('Lo siento pero el usuario que has introducido no está registrado'); // Esta línea se ejecuta solo si se NO cumple la primera condición y SÍ se cumple la segunda
}