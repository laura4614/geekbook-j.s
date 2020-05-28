'use strict';
let edad=0,horasVividas=0;
edad=parseInt(prompt("Ingrese su edad actual en años: "));
horasVividas=edad*(365.25*24); //multi de días considerando el bisiesto por las 24horas del día por el numero de años vividos
console.log('El total aprox de horas vividas en '+edad+' años es de: '+horasVividas+' Horas');
document.querySelector("h1").innerHTML=('El total aprox de horas vividas en '+edad+' años es de: '+horasVividas+' Horas');