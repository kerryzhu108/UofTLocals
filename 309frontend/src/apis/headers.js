const dotenv = require("dotenv");
dotenv.config();

export const domain = process.env.BACKENDDOMAIN || 'http://localhost:5000/'
export const headers = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

