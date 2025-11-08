const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is a simple greeting
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
