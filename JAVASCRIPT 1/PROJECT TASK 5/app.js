
// temperature in kelvin degrees.
const kelvin = 293;

//converting kelvin to Celsius.
const celsius = kelvin - 273;

//Convert celsius to Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;

//Rounding down fahrenheit by using floor() function 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

// Extra Practise, conversion to Newton
let Newton = celsius * (33/100);