const db = require("../config/db");

const School = {
    add: (schoolData, callback) => {
        const sql = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
        db.query(sql, [schoolData.name, schoolData.address, schoolData.latitude, schoolData.longitude], callback);
    },

    getAll: (callback) => {
        const sql = "SELECT * FROM schools";
        db.query(sql, callback);
    }
};

module.exports = School;
