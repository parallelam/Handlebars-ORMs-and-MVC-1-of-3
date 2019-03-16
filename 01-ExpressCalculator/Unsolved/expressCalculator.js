// Dependencies
const express = require("express");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;
// Create express app instance.
const app = express();
// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:num1/:num2", function(req, res) {
  const operation = req.params.operation;
  const firstNum = parseInt(req.params.num1);
  const secondNum = parseInt(req.params.num2);
  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  // Initialize the result variable to send later
  let result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    // Add your logic here. Pun intended.
    result = firstNum + secondNum;
    break;
  case "subtract":
    // Subtract logic
    result = firstNum - secondNum;
    break;
  case "multiply":
    // Multiply
    result = firstNum * secondNum;
    break;
  case "divide":
    // Divide
    result = firstNum / secondNum;
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }
  // We return the result back to the user in the form of a string
  res.send(result.toString());
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
