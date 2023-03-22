
// const daysOfTheMonth = 31
// const adaptedDaysOfTheWeekNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
// const weeklydayOfFirstDayOfTheMonth = 31

// for (let i = 1; i <= daysOfTheMonth; i++) { 
//     const currentdaysOfTheWeekNames = i % daysOfTheWeekNames.length;
//     console.log('Dia ' + i + ' => ' + adaptedDaysOfTheWeekNames[currentdaysOfTheWeekNames] )
// }

let aicraftcarrier = 5;
let vessel = 4;
let submarine = 3;
let cruise = 2;
let boat = 1;

const water = '~';
const hit = 'X';
const dead = '*';

const myBoard  = [
  [' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#',],
  [' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#',],
  [' ', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#',],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#',],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
  ['#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', ' ',],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ',],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ',]
];

const iaBoard  = [
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',],
  ['', '', '', '', '', '', '', '', '', '',]
];

const column = Math.floor(Math.random() * 10);
const row = Math.floor(Math.random() * 10);
console.log(myBoard);

const symbol = myBoard[row][column];
console.log('row', row + 1);
console.log('column', column + 1);
console.log(symbol);

if (!symbol) {
  iaBoard [row][column] = water;
} else {
  iaBoard [row][column] = hit;
}

for (let i = 0; i < 100; i++) {
  const column = (Math.floor (Math.random() * 10));
  const row = (Math.floor (Math.random() * 10));
  if (iaBoard[row][column] !== ' ') {
    i--;
    continue;
  }
}

console.log(iaBoard);




