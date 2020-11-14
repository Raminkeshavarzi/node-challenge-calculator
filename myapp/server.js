const express = require("express");
const app = express();

app.get("/add",  (req, res) => {
    const valueOfNumber1 = parseInt(req.query.value1);
    const valueOfNumber2 = parseInt(req.query.value2);
    const result = parseInt(valueOfNumber1 + valueOfNumber2);
    res.send("my numbers" + result);
  });
  
app.get("/substract", (req, res) => {
   const valueOfNumber1 = parseInt(req.query.valueOfNumber1);
   const valueOfNumber2 = parseInt(req.query.valueOfNumber2);
   res.send("my numbers " + (valueOfNumber1 - valueOfNumber2));
} )
app.get("/multiply",  (req, res) => {
    const valueOfNumber1 = parseInt(req.query.value1);
    const valueOfNumber2 = parseInt(req.query.value2);
    const result = parseInt(valueOfNumber1 * valueOfNumber2);
    res.send("my numbers " +result);
  });
  app.get("/divide",  (req, res) => {
    const valueOfNumber1 = parseInt(req.query.value1);
    const valueOfNumber2 = parseInt(req.query.value2);
    const result = parseFloat(valueOfNumber1 / valueOfNumber2);
    res.send("my numbers " + result);
  });

  app.get("/add/:valueOfNumber1/:valueOfNumber2",  (req, res) => {
    const valueOfNumber1 = parseInt(req.params.valueOfNumber1);
    const valueOfNumber2 = parseInt(req.params.valueOfNumber2);
    const result = parseInt(valueOfNumber1 + valueOfNumber2);
    res.send("my numbers " + result);
  });

  app.get("/substract/:valueOfNumber1/:valueOfNumber2",  (req, res) => {
    const valueOfNumber1 = parseInt(req.params.valueOfNumber1);
    const valueOfNumber2 = parseInt(req.params.valueOfNumber2);
    const result = parseInt(valueOfNumber1 - valueOfNumber2);
    res.send("my numbers " + result);
  });
  app.get("/multiply/:valueOfNumber1/:valueOfNumber2", (req, res) =>{
    const valueOfNumber1 = parseInt(req.params.valueOfNumber1);
    const valueOfNumber2 = parseInt(req.params.valueOfNumber2);
    const result = parseInt(valueOfNumber1 * valueOfNumber2);
    res.send("my numbers " + result);
  });
  app.get("/divide/:valueOfNumber1/:valueOfNumber2", (req, res) => {
    const valueOfNumber1 = parseInt(req.params.valueOfNumber1);
    const valueOfNumber2 = parseInt(req.params.valueOfNumber2);
    const result = parseInt(valueOfNumber1 / valueOfNumber2);
    res.send("my numbers " + result);
  });
app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!")
});