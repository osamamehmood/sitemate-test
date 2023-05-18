const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000';

async function readObject() {
    try {
        const response = await axios.get(`${API_BASE_URL}/read`);
        console.log('Read response:', response.data);
    } catch (error) {
        console.error('Read error:', error);
    }
}

async function runClient() {
    // Read
    await readObject();
}

runClient().then(r => console.log('done reading'));
