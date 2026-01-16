const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter switch type: toggle, push, joystick, selector\n> ", (switchTypeInput) => {
  // Your original switch logic starts here, using the input variable 'switchTypeInput'

  switch (switchTypeInput.toLowerCase()) {
      case "toggle":
          console.log("Toggle switch: Used to open or close a circuit with a lever.");
          break;

      case "push":
      case "push button":
          console.log("Push button: Activates the circuit only when pressed.");
          break;

      case "joystick":
          console.log("Joystick switch: Controls movement in multiple directions.");
          break;

      case "selector":
      case "selector switch":
          console.log("Selector switch: Selects one position or mode from multiple options.");
          break;

      default:
          console.log("Unknown switch type.");
  }

  // End of logic
  rl.close(); // Close the input interface
});
