'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;
  // console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    console.log(output);
    // add(2, 3);
    // console.log(add(2, 3)); // It is display when strict mode is off
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
