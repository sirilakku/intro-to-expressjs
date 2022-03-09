const readlineSync = require("readline-sync")
let answer
while(answer!=='STOP'){
    answer = readlineSync.question('What is your name? ')
    console.log("Hello," , answer);

}
console.log("Bye!")
