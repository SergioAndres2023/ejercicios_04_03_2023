async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/independent?status=true');
  const countries = await response.json();
  return countries;
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getCountryData(countries, index) {
  const country = countries[index];
  const name = country.translations.spa.common;

  let coins = Object.keys(country.currencies);

  let coin = country.currencies[coins[0]].name ? country.currencies[coins[0]].name : ''

  const { flags, region } = country; // obtener la información de la región

  let capitalB = country.capital[0];

  console.log('capitalB', capitalB);
  const flagsUrl = flags.png;
  return { name, flagsUrl, region, coin, capitalB };
}

function createImageElement(flagsUrl) {
  const img = document.createElement('img');
  img.src = flagsUrl;
  document.body.appendChild(img);
  return img;
}

function generateInput() {
  const input = document.createElement('input');
  input.id = 'id';
  input.type = 'text';
  input.placeholder = '¿Sabes que país es?';
  document.body.appendChild(input);
}

function getWithoutAccents(word) {
  const splittedWord = word.split('');

  const accents = 'áéíóúçñü';
  const splittedAccents = accents.split('');

  const withoutAccents = 'aeioucnu';
  const splittedWithoutAccents = withoutAccents.split('');

  for (let index = 0; index < splittedWord.length; index++) {
    const letter = splittedWord[index];
    const accentsIndex = splittedAccents.indexOf(letter);
    if (accentsIndex !== -1) {
      splittedWord[index] = splittedWithoutAccents[accentsIndex];
    }
  }

  const joinedWord = splittedWord.join('');
  return joinedWord;
}


let numHints = 0; // variable para contar cuántas pistas se han mostrado

function checkButton(countryName, region, coin, capitalB) {
  const input = document.getElementById('id');

  const newValue = getWithoutAccents(input.value.toLowerCase());

  const newCountryName = getWithoutAccents(countryName.toLowerCase());

  if (newValue === newCountryName) {
    document.getElementById('result').textContent = '¡Respuesta correcta!';
  } else {
    console.log('Respuesta incorrecta. El país era ' + countryName);

    numHints++; // incrementa el número de pistas mostradas

    // Mostrar pista de región
    if (numHints === 1) {
      const firstLetter = countryName.charAt(0).toUpperCase();
      const p = document.createElement('p');
      p.textContent = `Pista: La primera letra del país es "${firstLetter}"`;
      p.classList.add('hidden');
      document.body.appendChild(p);
      p.classList.remove('hidden');
    } else if (numHints === 2) {
      const secondLetter = countryName.charAt(1).toUpperCase();
      const p = document.createElement('p');
      p.textContent = `Pista: La segunda letra del país es "${secondLetter}"`;
      p.classList.add('hidden');
      document.body.appendChild(p);
      p.classList.remove('hidden');
    } else if (numHints === 3) {
      const p = document.createElement('p');
      p.textContent = `Pista: La capital del país "${capitalB}"`;
      p.classList.add('hidden');
      document.body.appendChild(p);
      p.classList.remove('hidden');
    } else if (numHints === 4) {
      const countryLength = countryName.length;
      const p = document.createElement('p');
      p.textContent = `Pista: El país tiene ${countryLength} letras`;
      p.classList.add('hidden');
      document.body.appendChild(p);
      p.classList.remove('hidden');
    } else if (numHints === 5) { // Agregar pista de región
      const p = document.createElement('p');
      p.textContent = `Pista: El país se encuentra en la región ${region}`;
      p.classList.add('hidden');
      document.body.appendChild(p);
      p.classList.remove('hidden');
    } else if (numHints === 6) { // Agregar pista de moneda
      const p = document.createElement('p');
      p.textContent = `Pista: La moneda que se utiliza en este país es ${coin}`;
      p.classList.add('hidden');
      document.body.appendChild(p);
      p.classList.remove('hidden');

      // Mostrar mensaje de falla
      document.getElementById('result').textContent = 'Fallaste. La respuesta era ' + countryName;
    }
  }
}



function generateButton(text, functionProof) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', functionProof);
  document.body.appendChild(button);
}

async function generateFlagAndElements() {
  const countries = await getCountries();
  console.log(countries)
  const index = generateRandomNumber(countries.length);
  const { name, flagsUrl, region, coin, capitalB } = getCountryData(countries, index);
  const img = createImageElement(flagsUrl);
  generateInput();
  generateButton('¡¡Suerte !!', () => checkButton(name, region, coin, capitalB));
}






generateFlagAndElements();



















































