const dotenv = require("dotenv");
dotenv.config();

export const domain = process.env.DOMAIN || 'localhost:3000/'
export const headers = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

