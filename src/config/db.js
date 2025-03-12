const mysql = require("mysql2");
require("dotenv").config();

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
    console.error("❌ DATABASE_URL is not defined in .env file!");
    process.exit(1); // Stop execution if URL is missing
}

const parsedUrl = new URL(dbUrl);

const pool = mysql.createPool({
    host: parsedUrl.hostname, // mysql.railway.internal
    user: parsedUrl.username, // root
    password: parsedUrl.password, // MySQL password
    database: parsedUrl.pathname.substring(1), // railway
    port: parsedUrl.port || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Check database connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
        return;
    }
    console.log("✅ Connected to MySQL database.");

    // ✅ Create `schools` table if not exists
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS schools (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            latitude FLOAT NOT NULL,
            longitude FLOAT NOT NULL
        )
    `;

    connection.query(createTableQuery, (err) => {
        if (err) {
            console.error("❌ Error creating table:", err.message);
        } else {
            console.log("✅ 'schools' table is ready.");
        }
        connection.release(); // Release connection
    });
});

module.exports = pool;
