// Pide la edad y si es mayor de 18 años indica que ya puede
// conducir.


const age = 35;
if (age >= 18) {
  console.log('Es mayor de edad, puede conducir');
} else {
  console.log('Es menor de edad, no puede conducir');
}


// --------------------------------------------------------


// Pide una nota (número). Muestra la calificación según la
// nota:
//  0-3: Muy deficiente
//  3-5: Insuficiente
//  5-6: Suficiente
//  6-7: Bien
//  7-9: Notable
//  9-10: Sobresaliente


let note = 10;
if (note <= 3) {
  console.log('Muy deficiente');
} else if (note >= 3 && note < 5) {
  console.log('Insuficiente');
}  else if (note >= 5 && note < 6) {
  console.log('Suficiente');
}  else if (note >= 6 && note < 7) {
  console.log('Bien');
}  else if (note >= 7 && note < 9) {
  console.log('Notable');
}  else if (note >= 9 && note <= 10) {
  console.log('Sobresaliente');
}


// --------------------------------------------------------



// Completa las condiciones de los if, del siguiente script para
// que los mensajes se muetren siempre de forma correcta.Completa




// if(...) {
//   console.log("numero1 no es mayor que numero2");

const numero1 = 5;
const numero2 = 8;

if (numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}


// if(...) {
//   console.log("numero2 es positivo");
// }

if (numero2 > 5) {
  console.log("numero2 es positivo");
} else if (numero2 <= 5) {
  console.log('numero2 es negativo');
}



// if(...) {
//   console.log("numero1 es negativo o distinto a cero");
// }

if (numero1 > 0) {
  console.log("numero2 es positivo");
} else if (numero1 <= 0) {
  console.log("numero1 es negativo o distinto a cero");
}


// if(...) {
//   console.log("Incrementar en 1 unidad el valor de numero1
//  no lo hace mayor o igual que numero2");
//   }

// if (numero1) {
//   console.log('numero1' + (3 + 2));
//   console.log(++numero1); // index = index + 1 & log (index -1, log = -1)
// }

if (numero1 == 5) {
  console.log("numero1" + (1));
} else if (numero1 < 8);{
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}






// if (typeof numero01 === 'number') {
//   numero01 = numero01 + 1;
// } else {
//   console.log('La variable no es un número');
// }


