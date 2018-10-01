const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Hi!\nWrite Hello World:\n", (input) => {
  if (input === "Hello World") {
    console.log("You typed Hello World");
    rl.close();
  }
  else {
    console.log("You did not type Hello World. Try again!\n");
  }
});
