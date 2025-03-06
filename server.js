require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 7000;


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


db.connect(err => {
    if (err) {
        console.error('MySQL Connection Failed:', err.message);
        return;
    }
    console.log('Connected to MySQL Database');
});


app.get('/', (req, res) => {
    res.send('MySQL Database Connection Successful!');
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

