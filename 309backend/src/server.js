const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

const port = process.env.PORT || 5000;
const ip = process.env.IP || "localhost";

// Setup application middleware
app.use(express.json());
app.use(bodyparser.json());

// Link routers
const rootRouter = require("./routes/root");
const businessRouter = require("./routes/business");
const authRouter = require("./routes/auth");
const commentRouter = require("./routes/comment");

app.use("/", rootRouter);
app.use("/business", businessRouter);
app.use("/auth", authRouter);
app.use("/comment", commentRouter);

// Begin application routing
app.listen(port, ip, () => {
    console.log(`Server listening on ${ip}:${port}`);
});
