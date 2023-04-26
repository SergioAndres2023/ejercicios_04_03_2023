const rootElement = document.getElementById('root');
const chars = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const iaBoard = [
  ['', '3', '', '', '', '', '', '', '', '4',],
  ['', '3', '', '', '', '', '', '', '', '4',],
  ['', '3', '', '', '', '', '', '', '', '4',],
  ['', '', '', '', '', '', '', '', '', '4',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['5', '5', '5', '5', '5', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '2', '',],
  ['1', '', '', '', '', '', '', '', '2', '',]
];

const myShips = {
  aicraftcarrier: 5,
  vessel: 4,
  submarine: 3,
  cruise: 2,
  boat: 1,
};

const ships = [
  {
    barco: 1,
    disparos: 0,
    coordenadas: []
  },
  {
    barco: 2,
    disparos: 0,
    coordenadas: []
  },
  {
    barco: 3,
    disparos: 0,
    coordenadas: []
  },
  {
    barco: 4,
    disparos: 0,
    coordenadas: []
  },
  {
    barco: 5,
    disparos: 0,
    coordenadas: []
  }
];

const shipsIA = [
  {
    barco: 1,
    disparos: 0,
    coordenadas: []
  },
  {
    barco: 2,
    disparos: 0,
    coordenadas: []
  },
  {
    barco: 3,
    disparos: 0,
    coordenadas: []
  },
  {
    barco: 4,
    disparos: 0,
    coordenadas: []
  },
  {
    barco: 5,
    disparos: 0,
    coordenadas: []
  }
];

// const water = water ['~'];
// const hit = hit ['X'];
// const shunk = shunk ['*'];

// --------------------------------------

function bomb(rowIndex, cellIndex, name) {
  const cell = document.getElementById(`${chars[rowIndex]}${cellIndex}${name}`);


  if (iaBoard[rowIndex - 1][cellIndex - 1]) {

    // cell.innerText = 'X';
    cell.classList.add('hit');

    ships.forEach(ship => {
      if (ship.barco == iaBoard[rowIndex - 1][cellIndex - 1]) {
        ship.disparos++;
        ship.coordenadas.push(chars[rowIndex] + cellIndex);

        if (ship.disparos === ship.barco) {
          ship.coordenadas.forEach(coordenada => {

            const cellShip = document.getElementById(`${coordenada}${name}`);
            // cellShip.innerText = '*';
            cellShip.classList.add('shunk');
          });

        }
      }
    });
  } else {
    // cell.innerText = '~';
    cell.classList.add('water');
  }
  // invoco funcion disparoIa
  shotsIa();
}

function shotsIa() {
  let column, row;
  row = Math.floor(Math.random() * 10) + 1;
  column = Math.floor(Math.random() * 10) + 1;
  hits(row, column);
}
function hits(row, column) {
  const cell = document.getElementById(`${chars[row]}${column}myBoard`);
  /* console.log(row,column,cell.innerText,`${chars[row]}${column}myBoard`); */

  if (!cell.hasAttribute('executed')) {
    cell.setAttribute('executed', 'true');
    // console.log('no contiene');
    if (cell.innerText) {
      cell.classList.add('hit');
      shipsIA.forEach(ship => {
        if (ship.barco == cell.innerText) {
          ship.disparos++;
          ship.coordenadas.push(`${chars[row]}${column}myBoard`);
          if (ship.disparos >= cell.innerText) {
            ship.coordenadas.forEach(coord => {
              let cellCoordenada = document.getElementById(coord);
              cellCoordenada.classList.add('shunk');
            })
          }
        }

      });
      console.log('hit', `${chars[row]}${column}myBoard`)
    } else {
      cell.classList.add('water');
      console.log('agua', `${chars[row]}${column}myBoard`)
    }
  } else {
    // console.log('repito disparo,porque ya dispare en : ' + `${chars[row]}${column}myBoard`)
    shotsIa();
  }
}



function putShips(cell) {
  console.log(cell.innerText);
  if (cell.innerText === '1') {
    cell.innerText = '2';
  } else if (cell.innerText === '2') {
    cell.innerText = '3';
  } else if (cell.innerText === '3') {
    cell.innerText = '4';
  } else if (cell.innerText === '4') {
    cell.innerText = '5';
  } else if (cell.innerText === '5') {
    cell.innerText = '';
  } else {
    cell.innerText = '1';
  }
}

function printBoard(name) {

  // const container = document.getElementById('container');
  const board = document.createElement('div');
  board.setAttribute('class', 'board');
  board.id = name;

  for (let rowIndex = 0; rowIndex < 11; rowIndex++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    board.appendChild(row);

    for (let cellIndex = 0; cellIndex < 11; cellIndex++) {
      const cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      cell.setAttribute('id', `${chars[rowIndex]}${cellIndex}${name}`);
      if (name === 'myBoard') {
        cell.addEventListener('click', () => putShips(cell));
      } else {
        cell.addEventListener('click', () => bomb(rowIndex, cellIndex, name));
      }

      if ((!rowIndex || !cellIndex) && !(!rowIndex && !cellIndex)) {
        cell.innerText = `${chars[rowIndex]}${cellIndex || ''}`;

        if (!cellIndex) {
          cell.innerText = `${chars[rowIndex]}`;
        }
      }

      row.appendChild(cell);
    }
  }

  rootElement.appendChild(board);
}

printBoard('myBoard');
printBoard('enemyBoard');










