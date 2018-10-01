const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Hi!\nWrite something:\n", (input) => {
  if (input === "Hello World") {
    console.log("You typed Hello World");
    rl.close();
  }
  else {
    console.log("You did not type the Hello World. Try again!\n");
  }
});
