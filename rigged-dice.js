const prompt = require('prompt-sync')();

const sides = Number(prompt('How many sides should the dice have?: '));
const rig = Number(prompt('What is the rig number?:  Warning!! must correlate with your dice.'));

let diceRoll = Math.floor( Math.random() * sides) + 1;

if (diceRoll === sides + 1 ) {
    roll = rig;
}
console.log('You have rolled a: ', diceRoll);