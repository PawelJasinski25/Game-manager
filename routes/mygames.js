var express = require('express');
const gameController = require('../controllers/gameController');
var router = express.Router();

router.get('/', gameController.getAllGames);

router.get('/sort-year', gameController.sortByYear);

router.get('/sort-score', gameController.sortByScore);

router.get('/delete/:id', gameController.deleteGame);

router.get('/edit/:id', gameController.renderEditGame);

router.post('/update/:id', gameController.updateGame);

router.get('/add', gameController.renderAddGame);

router.post('/add', gameController.addGame);

module.exports = router;
