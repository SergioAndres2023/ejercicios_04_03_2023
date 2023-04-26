async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/independent?status=true');
  const countries = await response.json();
  return countries;
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
// En resumen, la función getCountryData devuelve un objeto con el nombre y la URL de la bandera del país
// correspondiente al índice proporcionado dentro del objeto countries.
function getCountryData(countries, index) {
  const country = countries[index];
  const name = country.translations.spa.common;
  // const flags = country.flags;
  const { flags } = country;
  const flagsUrl = flags.png;
  return { name, flagsUrl };
}
// En resumen, la función createImageElement es una función de ayuda que crea un elemento de imagen 
// y lo agrega al cuerpo del documento HTML con la URL proporcionada como atributo src.
function createImageElement(flagsUrl) {
  const img = document.createElement('img');
  img.src = flagsUrl;
  document.body.appendChild(img);
  return img;
}
// En resumen, la función generateInput es una función de ayuda que crea un elemento de entrada de texto
// y lo agrega al cuerpo del documento HTML con el tipo de entrada "text" y un texto de marcador de posición específico.
function generateInput() {
  const input = document.createElement('input');
  input.id = 'id';
  input.type = 'text';
  input.placeholder = '¿Sabes que país es?';
  document.body.appendChild(input);
}

function proof(countryName) {
  const input = document.getElementById('id');
  console.log(input.value);
  console.log(countryName);
}

// En resumen, la función generateButton crea un botón con un texto personalizado y un controlador de clic personalizado
// , lo agrega al cuerpo del documento y devuelve el elemento del botón generado.
function generateButton(text, functionProof) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', functionProof);
  document.body.appendChild(button);
}

async function generateFlagAndElements() {
  const countries = await getCountries();
  const index = generateRandomNumber(countries.length);
  const { name, flagsUrl } = getCountryData(countries, index);
  const img = createImageElement(flagsUrl);
  generateInput();
  // const checkButton = generateButton('¡¡Suerte !!',  () => console.log('Click'));
  generateButton('¡¡Suerte !!', () => proof(name));
}


generateFlagAndElements();

















// const checkButton = generateButton('¡¡Suerte !!', () => {
//   checkAnswer(input, name);
// });








//   // const hintButton = generateButton('Pista', () => {
//   //   giveHint(countries, index);
//   // });
//   // return { name, img, input, checkButton, hintButton };
// }

// // function giveHint(countries, index) {
// //   const { name } = getCountryData(countries, index);
// //   const firstLetter = name.charAt(0);
// //   alert(`La primera letra del país es "${firstLetter}"`);
// // }

// function checkAnswer(input, answer) {
//   if (input.value.trim().toLowerCase() === answer.toLowerCase()) {
//     alert('¡Correcto!');
//   } else {
//     alert('Respuesta incorrecta');
//   }
// }

// generateFlagAndElements();
