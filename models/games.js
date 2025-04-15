require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const getAllGames = (callback) => {
    const sql = 'SELECT * FROM games';
    db.query(sql, callback);
};

const sortByYear = (callback) => {
    const sql = 'SELECT * FROM games ORDER BY rok_wydania desc';
    db.query(sql, callback);
};

const sortByScore = (callback) => {
    const sql = 'SELECT * FROM games ORDER BY ocena desc';
    db.query(sql, callback);
};

const deleteGame = (id, callback) => {
    db.query('DELETE FROM games WHERE id = ?', [id], (err, result) => {
        callback(err, result);
    });
};

const editGame = (id, callback) => {
    db.query('SELECT * FROM games WHERE id = ?', [id], callback);
};

const updateGame = (id, form_data, callback) => {
    db.query('UPDATE games SET ? WHERE id = ?', [form_data, id], callback);
};

const addGame = (form_data, callback) => {
    db.query('INSERT INTO games SET ?', form_data, callback);
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