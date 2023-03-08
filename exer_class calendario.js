
const daysOfTheMonth = 31
const adaptedDaysOfTheWeekNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const weeklydayOfFirstDayOfTheMonth = 31

for (let i = 1; i <= daysOfTheMonth; i++) { 
    const currentdaysOfTheWeekNames = i % daysOfTheWeekNames.length;
    console.log('Dia ' + i + ' => ' + adaptedDaysOfTheWeekNames[currentdaysOfTheWeekNames] )
}
    




