

let runnerNumber = Math.floor(Math.random()*1000);
const registeredEarly = true;
const runnerAge = 20;

if (runnerAge>18 && registeredEarly) {
  runnerNumber+=1000;
}

if (runnerAge>18 && registeredEarly) {
  console.log(`Runner: ${runnerNumber}:- Your race willstart at 9:30 AM`);
} else if (runnerAge>18 && !registeredEarly) {
  console.log(`Runner: ${runnerNumber}:- Your race will star  at 11:00 AM`);
} else if (runnerAge < 18) {
  console.log(`Runner: ${runnerNumber}:- Your race willstart at 12:30 AM`)
}