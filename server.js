const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend application
};

app.use(cors(corsOptions));

let storedObject = {
    issue1: {
        id: 1,
        title:'Issue Number 1',
        description: 'This is a description for issue 1'
    },
    issue2: {
        id: 2,
        title:'Issue Number 2',
        description: 'This is a description for issue 2'
    },
    issue3: {
        id: 2,
        title:'Issue Number 3',
        description: 'This is a description for issue 3'
    }
};

// Rest of the code remains the same...

// Read operation
app.get('/read', (req, res) => {
    console.log('Returning object:', storedObject);
    res.send(storedObject);
});

// Start the server
app.listen(3000, () => {
    console.log('REST API server is running on port 3000');
});