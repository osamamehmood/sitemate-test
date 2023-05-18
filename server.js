const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with the actual origin of your frontend application
};

app.use(cors(corsOptions));

let storedObject = 'hello';

// Rest of the code remains the same...

// Read operation
app.get('/read', (req, res) => {
    console.log('Returning object:', storedObject);
    // res.json('hi');
    res.send("Hello");
});

// Start the server
app.listen(3000, () => {
    console.log('REST API server is running on port 3000');
});