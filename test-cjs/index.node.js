// const GreetModule = require("./test.cjs.js");
const GreetModule = require("./test.cjs.cjs");

console.log(GreetModule.greet("node cjs foo"));
console.log(GreetModule.greet("node cjs bar"));
