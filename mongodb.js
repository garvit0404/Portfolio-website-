const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json()); 

// Define the POST route for the form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Handle form data (save to DB or process it)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Send a response back to the client
  res.json({ message: "Form submitted successfully!" });
});

// Start the server on port 3000 (or 5500 if you are using that)
app.listen(5500, () => {
  console.log('Server is running on http://localhost:5500');
});
