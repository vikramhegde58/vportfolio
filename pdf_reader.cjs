const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('Vikram-Hegde-Frontend.pdf');
pdf(dataBuffer).then(function(data) {
  console.log(data.text);
}).catch(function(error){
  console.log(error);
});
