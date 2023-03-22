let autos = [{
  marca: "Ford",
  modelo: "Fiesta",
  precio: 150000,
  km: 200,
  color: "Azul",
  cuotas: 24,
  anio: 2019,
  patente: "APL 123",
  vendido: false},
  { 
  marca: "Toyota",
  modelo: "Corolla",
  precio: 100000,
  km: 0,
  color: "Rojo",
  cuotas: 5,
  anio: 2019,
  patente: "jjk 116",
  vendido: true
  
  },
  { 
    marca: "Toyota",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Rojo",
    cuotas: 14,
    anio: 2019,
    patente: "jjk 258",
    vendido: false
    
    },
  
    {
      marca: "Ford",
      modelo: "Fiesta",
      precio: 150000,
      km: 200,
      color: "Negro",
      cuotas: 12,
      anio: 2019,
      patente: "APL 259",
      vendido: false},];



  
// for (let i = 0; i < autos.length -1 ; i++) {
//   if (autos[i].marca == "Ford") {
//     console.log(autos[i])
    
//   }
// }


for (let i = 0; i < autos.length; i++) {
  if(autos[i].color == 'Rojo'+ autos[i].cuotas>10)
  {
  console.log(autos[i])
  }
}
  
