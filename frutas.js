const frutas = [
  {
    name: 'Naranjas',
    size: 'mediano',
    color: 'naranja',
  },
  {
    name: 'Lima',
    size: 'pequeño',
    color: 'verde',
  },
  {
    name: 'Pera',
    size: 'pequeño',
    color: 'verde',
  },
  {
    name: 'Melón',
    size: 'grande',
    color: 'verde',
  },
  {
    name: 'Sandía',
    size: 'grande',
    color: 'verde',
  },
  {
    name: 'Manzana',
    size: 'pequeño',
    color: 'verde',
  }
];

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i].color === 'verde' && frutas[i].color === 'pequeño') {
    console.log('Sirve');
  }
}

