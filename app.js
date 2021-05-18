//EXPRESS TEMPLATE
const express = require('express');

// Create the Express app.
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  console.log(req)
  res.render('layout',);
  });

const port = 8081;

app.listen(port, () => console.log(`Listening on port ${port}...`));
