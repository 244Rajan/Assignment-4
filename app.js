const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Load the Lego set data from the lego_sets.json file
const legoSets = require('./data/lego_sets.json'); // Added closing parenthesis

// Define the routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about', { page: '/about' });
});

app.get('/lego/sets', (req, res) => {
  res.render('sets', { sets: legoSets, title: 'Lego Sets' });
});

app.get('/lego/sets/:num', (req, res) => {
  const setNum = req.params.num;
  const legoSet = legoSets.find(set => set.set_num === setNum);
  if (legoSet) {
    res.render('set', { set: legoSet });
  } else {
    res.status(404).render('404', { message: `Set not found: ${setNum}` });
  }
});

app.use((req, res) => {
  res.status(404).render('404', { message: 'Page not found' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});