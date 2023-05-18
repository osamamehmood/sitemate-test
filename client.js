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

async function updateObject(updatedObject) {
    try {
        const response = await axios.put(`${API_BASE_URL}/update`, updatedObject);
        console.log('Update response:', response.data);
    } catch (error) {
        console.error('Update error:', error);
    }
}

async function runClient() {
    // Read
    await readObject();


    const updatedObject = {
        id: 1,
        title:'Issue Number 1 updated',
        description: 'This is an UPDATED description for issue 1'
    };
    await updateObject(updatedObject);

    // re read object after updating
    await readObject();

}

runClient().then(r => console.log('done reading'));
