const games = require('../models/games');

const getAllGames = (req, res) => {
    games.getAllGames((error, data) => {
        if (error) {
            return res.status(500).send("Database error: " + error.message);
        }
        res.render('mygames', { title: 'Moje gry', data: data });
    });
};


const sortByYear = (req, res) => {
    games.sortByYear((error, data) => {
        if (error) {
            return res.status(500).send("Database error: " + error.message);
        }
        res.render('mygames', { title: 'Moje gry', data: data });
    });
};

const sortByScore = (req, res) => {
    games.sortByScore((error, data) => {
        if (error) {
            return res.status(500).send("Database error: " + error.message);
        }
        res.render('mygames', { title: 'Moje gry', data: data });
    });
};


const deleteGame = (req, res) => {
    const filmId = req.params.id;
    games.deleteGame(filmId, (error, result) => {
        if (error) {
            return res.status(500).send("Database error: " + error.message);
        }
        res.redirect('/mygames');
    });
};

const renderEditGame = (req, res) => {
    const filmId = req.params.id;
    games.editGame(filmId, (error, rows) => {
        if (error) {
            return res.status(500).send("Database error: " + error.message);
        }
        res.render('edit', {
            Title: 'Edytuj film',
            id: rows[0].id,
            title: rows[0].tytul,
            producer: rows[0].producent,
            year: rows[0].rok_wydania,
            genre: rows[0].gatunek,
            score: rows[0].ocena
        });
    });
};

const updateGame = (req, res) => {
    const filmId = req.params.id;
    const title = req.body.title;
    const director = req.body.producer;
    const year = req.body.year;
    const genre = req.body.genre;
    const score = req.body.score;

    const form_data = {
        tytul: title,
        producent: director,
        rok_wydania: year,
        gatunek: genre,
        ocena: score
    };

    games.updateGame(filmId, form_data, (error, result) => {
        if (error) {
            console.error("Error updating game:", error);
            return res.status(500).send("Internal Server Error");
        } else {
            console.log("Game updated successfully");
            res.redirect('/mygames');
        }
    });
};

const renderAddGame = (req, res) => {
    res.render('add', { title: 'Dodaj nowy film' });
};

const addGame = (req, res) => {
    const title = req.body.title;
    const producer = req.body.producer;
    const year = req.body.year;
    const genre = req.body.genre;
    const score = req.body.score;

    const form_data = {
        tytul: title,
        producent: producer,
        rok_wydania: year,
        gatunek: genre,
        ocena: score
    };

    games.addGame(form_data, (error, result) => {
        if (error) {
            console.error("Error adding game:", error);
            return res.status(500).send("Internal Server Error");
        } else {
            console.log("Game added successfully");
            res.redirect('/mygames');
        }
    });
};

module.exports = {
    getAllGames,
    sortByYear,
    sortByScore,
    deleteGame,
    renderEditGame,
    updateGame,
    renderAddGame,
    addGame,
};
