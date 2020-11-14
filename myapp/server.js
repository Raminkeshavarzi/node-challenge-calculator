const express = require("express");
const app = express();

app.get("/add", function (req, response) {
    const number1 = parseInt(req.query.value1);
    const number2 = parseInt(req.query.value2);
    const result = parseInt(number1 + number2);
    response.send("my numbers" + result);
  });
  
app.get("/substract", function(req, response){
   const number1 = parseInt(req.query.number1);
   const number2 = parseInt(req.query.number2);
   response.send("my numbers " + (number1 - number2));
} )
app.get("/multiply", function (req, response) {
    const number1 = parseInt(req.query.value1);
    const number2 = parseInt(req.query.value2);
    const result = parseInt(number1 * number2);
    response.send("my numbers " +result);
  });
  app.get("/divide", function (req, response) {
    const number1 = parseInt(req.query.value1);
    const number2 = parseInt(req.query.value2);
    const result = parseFloat(number1 / number2);
    response.send("my numbers " + result);
  });

  app.get("/add/:number1/:number2", function (req, response){
    const number1 = parseInt(req.params.number1);
    const number2 = parseInt(req.params.number2);
    const result = parseInt(number1 + number2);
    response.send("my numbers " + result);
  });

  app.get("/substract/:number1/:number2", function (req, response){
    const number1 = parseInt(req.params.number1);
    const number2 = parseInt(req.params.number2);
    const result = parseInt(number1 - number2);
    response.send("my numbers " + result);
  });
  app.get("/multiply/:number1/:number2", function (req, response){
    const number1 = parseInt(req.params.number1);
    const number2 = parseInt(req.params.number2);
    const result = parseInt(number1 * number2);
    response.send("my numbers " + result);
  });
  app.get("/divide/:number1/:number2", function (req, response){
    const number1 = parseInt(req.params.number1);
    const number2 = parseInt(req.params.number2);
    const result = parseInt(number1 / number2);
    response.send("my numbers " + result);
  });
app.listen(3000, function (){
    console.log("Server is listening on port 3000. Ready to accept requests!")
});