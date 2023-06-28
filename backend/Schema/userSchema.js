const mysql = require("mysql");

// Create a MySQL connection pool
const pool = mysql.createPool({
  user: "root",
  host: "localhost",
  password: "",
  database: "turfbooking",
});

function createUserTableSchema() {
  const sql = `
      CREATE TABLE IF NOT EXISTS user (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(255) NOT NULL,
        middleName VARCHAR(255),
        lastName VARCHAR(255) NOT NULL,
        age INT NOT NULL,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        confirmPassword VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(255) NOT NULL
      )
    `;

  pool.query(sql, (error) => {
    if (error) {
      console.error("Error creating user table:", error);
    } else {
      console.log("User table created successfully");
    }
  });
}

module.exports = createUserTableSchema;
