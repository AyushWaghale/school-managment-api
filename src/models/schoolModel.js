const db = require("../config/db");

const School = {
    // Add a new school
    add: (schoolData, callback) => {
        const sql = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
        db.query(sql, [schoolData.name, schoolData.address, schoolData.latitude, schoolData.longitude], callback);
    },


    // Get all schools
    getAll: (callback) => {
        const sql = "SELECT * FROM schools";
        db.query(sql, callback);
    }
};

module.exports = School;
