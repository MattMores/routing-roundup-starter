//EXPRESS TEMPLATE
const express = require('express');

// Create the Express app.
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  // console.log(req)
  // res.render('layout', { method: '' });
  res.send('Hello from Express!')
});

app.get('/*xyz', (req, res) => {
  // console.log(req)
  // res.render('layout', { method: '' });
  res.send(`That's all I wrote.`)
});

app.get('/capital-letters/:word', (req, res) => {
  console.log(req.params)

  const upperCase = req.params.word.toUpperCase()
  res.send(`${upperCase}`)
});
app.all('/about', (req, res) => {

  res.render('layout', { method: req.method, path: req.path, randomNum: Math.random() * 100 });
})

const port = 8081;

app.listen(port, () => console.log(`Listening on port ${port}...`));