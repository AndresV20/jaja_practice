//user input 
import * as readline from "node:readline";
import { stdin, stdout } from "process";
var answer= " ";
const rl = readline.createInterface({
    input : stdin,
    output: stdout
});

rl.question ("Enter the word you'd like to search for:", (answer) => {
    var palabra= " ";
    palabra= answer;
    console.log(palabra + "jiji");
    rl.close();
})

//search engine 
"use strict";
exports.__esModule= true;
var data = require("data");
(data.readfile)("data.txt", function(err, content){
    if (err)
        throw err;
        console.log("String" +(content.indexof("capicola") > -1 ? " ": " not ") + "found");
})
//"capicola" string it searches for 
// find variable that acts as user input r
// ask Jim tomorrow