const translate = require("./scripts");
const promptly = require('promptly');

promptly.prompt("Enter a word to translate to pig latin...:")
.then(input => console.log(translate(input)))
