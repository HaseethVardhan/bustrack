
const SERVER_URL = 'http://localhost:3000';
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