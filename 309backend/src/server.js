const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
const ip = process.env.IP || "localhost";

// Setup application middleware
app.use(express.json());

// Link routers
const rootRouter = require("./routes/root");

app.use("/", rootRouter);

// Begin application routing
app.listen(port, ip, () => {
    console.log(`Server listening on ${ip}:${port}`);
});