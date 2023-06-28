const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const createUserTableSchema = require("./Schema/userSchema");
const sendToken = require("./utils/jwtToken");

const app = express();

app.use(express.json());
app.use(cors());

const port = 4000;

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "turfbooking",
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to database: ", err);
    return;
  }
  console.log("Connected to the database");
  createUserTableSchema(); // Create the user table schema

});

app.post("/register", (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    age,
    username,
    password,
    confirmPassword,
    email,
    phone,
  } = req.body;

  const user = {
    email: email,
    password: password,
  };

  con.query(
    `INSERT INTO user (firstName, middleName, lastName, age, username, password, confirmPassword, email, phone) VALUES (?,?,?,?,?,?,?,?,?)`,
    [firstName, middleName, lastName, age, username, password, confirmPassword, email, phone],
    (err, result) => {
      if (err) {
        console.error("An error occurred:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err });
      } else {
        console.log("Registration successful!");
        user.id = result.insertId;
        sendToken(user, 201, res);
        // return res.status(200).json({ message: "Registration successful", result });
      }
    }
  );
});

// User Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  con.query(
    `SELECT * FROM user WHERE username = ?`,
    [username],
    (err, result) => {
      if (err) {
        console.error("An error occurred:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      if (result.length === 0) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      const user = result[0];

      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      // Password is correct, generate and send token or any other authentication logic
      sendToken(result[0], 201, res);
      // res.status(200).json({ message: "Login successful", user });
    }
  );
});

app.post("/managerLogin", (req, res) => {
  const { username, password } = req.body;

  con.query(
    `SELECT * FROM manager WHERE username = ?`,
    [username],
    (err, result) => {
      if (err) {
        console.error("An error occurred:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      if (result.length === 0) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      const manager = result[0];

      if (manager.password !== password) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      // Password is correct, generate and send token or any other authentication logic
      sendToken(result[0], 201, res);
      // res.status(200).json({ message: "Manager login successful", manager });
    }
  );
});



// Define routes for handling turf booking operations
// app.post('/api/bookings', (req, res) => {
//   const { turfName, date, startTime, endTime } = req.body;
//   // Insert the booking into the database
//   const query = `INSERT INTO bookings (turfName, date, startTime, endTime) VALUES (?, ?, ?, ?)`;
//   connection.query(query, [turfName, date, startTime, endTime], (err, result) => {
//     if (err) {
//       console.error('Error creating booking: ', err);
//       res.status(500).send('Error creating booking');
//       return;
//     }
//     res.status(201).json({ id: result.insertId });
//   });
// });

// ... Define other routes for updating and retrieving bookings

// Start the server
app.listen(port, () => {
  console.log("Server is running on port 4000");
});
