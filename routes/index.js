
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Strona główna' });
});

router.get('/rpg-games', (req, res) => {
  res.render('rpg-games', { title: 'Gry fabularne' });
});

router.get('/strategy-games', (req, res) => {
  res.render('strategy-games', { title: 'Gry strategiczne' });
});

router.get('/sport-games', (req, res) => {
  res.render('sport-games', { title: 'Gry sportowe' });
});


router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Kontakt' });
});

module.exports = router;