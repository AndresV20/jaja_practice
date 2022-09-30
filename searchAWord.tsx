//user input 
import * as readline from "node:readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({
    input : stdin,
    output: stdout
});

rl.question ("Enter the word you'd like to search for:", function (answer:string){
    console.log ('The input was:', {answer})
    rl.close();
})

//search engine 
