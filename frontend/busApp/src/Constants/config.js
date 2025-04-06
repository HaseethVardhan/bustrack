
const SERVER_URL = 'https://bustrack-backend.onrender.com';
//const SERVER_URL = 'http://localhost:10000';

//Bypass ngrok browser warning will work with localhost as well
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
    }
}

const adminAddress = "haseethvardhan123456@gmail.com";

export {SERVER_URL, axiosConfig, adminAddress};