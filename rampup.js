// ¿Quién puede firmar un contrato de trabajo?
// Los mayores de edad (18 años).
// Los menores de 18 años legalmente emancipados.
// Mayores de 16 y menores de 18 si tienen autorización de los padres.



const people = [
  { name: 'Ana', age: 17, isEmancipated: false, isAuthorizated: false },
  { name: 'Berto', age: 15, isEmancipated: true, isAuthorizated: false },
  { name: 'Clara', age: 20, isEmancipated: true, isAuthorizated: false },
  { name: 'Daniel', age: 16, isEmancipated: false, isAuthorizated: true },
  { name: 'Elena', age: 17, isEmancipated: false, isAuthorizated: true },
  { name: 'Felix', age: 18, isEmancipated: false, isAuthorizated: false },
];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  let canSignContract = false;

  if (person.isEmancipated || person.isAuthorizated) {
    canSignContract = true;
  } else if (person.age >= 18) {
    canSignContract = true;
  } else if (person.age >= 16 && person.age < 18) {

    canSignContract = person.isAuthorizated;
  }

  console.log(person.name + ' can sign contract: ' + canSignContract);
}