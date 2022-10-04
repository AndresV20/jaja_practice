"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//user input 
var readline = require("node:readline");
var process_1 = require("process");
var rl = readline.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
rl.question("Enter the word you'd like to search for:", function (answer) {
    console.log('The input was:', { answer: answer });
    rl.close();
});
//search engine 
//# sourceMappingURL=searchAWord.js.map