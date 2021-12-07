const dotenv = require("dotenv");
dotenv.config();
const path = require('path');
const express = require('express');
const app = express();
const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server is up on port: ${port}`);
});