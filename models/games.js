
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gry"
});

const getAllGames = (callback) => {
    const sql = 'SELECT * FROM gry';
    db.query(sql, callback);
};

const sortByYear = (callback) => {
    const sql = 'SELECT * FROM gry ORDER BY rok_wydania desc';
    db.query(sql, callback);
};

const sortByScore = (callback) => {
    const sql = 'SELECT * FROM gry ORDER BY ocena desc';
    db.query(sql, callback);
};

const deleteGame = (id, callback) => {
    db.query('DELETE FROM gry WHERE id = ?', [id], (err, result) => {
        callback(err, result);
    });
};

const editGame = (id, callback) => {
    db.query('SELECT * FROM gry WHERE id = ?', [id], callback);
};

const updateGame = (id, form_data, callback) => {
    db.query('UPDATE gry SET ? WHERE id = ?', [form_data, id], callback);
};

const addGame = (form_data, callback) => {
    db.query('INSERT INTO gry SET ?', form_data, callback);
};

module.exports = {
    getAllGames,
    sortByYear,
    sortByScore,
    deleteGame,
    editGame,
    updateGame,
    addGame,
};