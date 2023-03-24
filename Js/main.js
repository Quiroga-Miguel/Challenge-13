// ejercicio 1

document.write('<h1>Ejercicio 1</h1>');
let saludo1="Hola, ";
let saludo2="gente bella" ;
document.write(saludo1 + saludo2);

//ejercicio 2

document.write('<h1>Ejercicio 2</h1>');
alert("Operaciones Matematicas basicas con dos numeros");
let numero1 = parseInt(prompt( "Ingrese primer numero")) ;
let numero2 = parseInt(prompt("Ingrese segundo numero"));
let suma,resta,multiplicacion,division;
alert("Los resultados se observa en consola y pantalla");
let numero3 = parseInt(prompt('Ingresar un numero para operaciones matematicas locas'));

// Operacion Suma
suma = numero1 + numero2;
let ParOImpar = suma % 2 == 1 ? "Es Impar" : "Es Par";
console.log(suma);
document.write('<br> La suma es: '+ suma);
console.log(ParOImpar);
document.write(' ' + ParOImpar);

//Operacion Resta
resta = numero1-numero2;
console.log(resta);
let ParOImparResta = resta % 2 == 1 ? "Es Impar" : "Es Par";
console.log(ParOImparResta);
document.write('<br>La resta es: '+ resta);
document.write(" "+ParOImparResta);

//Operacion Multiplicacion
multiplicacion = numero1 * numero2;
console.log(multiplicacion);
let ParOImparMultiplicacion = multiplicacion % 2 == 1 ? "Es Impar" : "Es Par";
document.write('<br>La multiplicacion es: '+ multiplicacion);
document.write(' '+ParOImparMultiplicacion);

//Operacion Division
division = numero1 / numero2;
console.log(division);
let ParOImparDivision = division % 2 == 1 ? "Es Impar" : "Es Par";
document.write('<br>La division es: '+ division);
document.write(' '+ParOImparDivision);

//Operacion loco
let ResultadoLocoSuma = numero3 + suma;
let ResultadoLocoMultiplicacion = multiplicacion * numero3;
let ResultadoLocoResta = resta - numero3;
document.write('<br> <br>El numero ingreso para la operacion loca es'+numero3);
document.write('<br>El Resultado de la operaciones matematicas loca de Suma es: '+ ResultadoLocoSuma);
document.write('<br>El Resultado de la operaciones matematicas loca de Multiplicacion es: '+ ResultadoLocoMultiplicacion);
document.write('<br>El Resultado de la operaciones matematicas loca de Resta es: '+ResultadoLocoResta);
