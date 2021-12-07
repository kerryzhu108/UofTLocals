const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

const port = process.env.PORT || 5000;
const ip = process.env.IP || "localhost";

// Setup application middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());


// Seed databse
require("./seed");

// express-session for managing user sessions
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Link routers
const rootRouter = require("./routes/root");
const businessRouter = require("./routes/business");
const authRouter = require("./routes/auth");
const commentRouter = require("./routes/comment");
const studentRouter = require("./routes/student");
const announcementRouter = require("./routes/announcement");
const reviewRouter = require("./routes/review");

app.use(
    session({
        secret: process.env.SESSION_SECRET || "somesessionsecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000,
            httpOnly: true,
        },
        // store the sessions on local database for now
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/uoftlocals',
        }),
    })
);

app.use("/", rootRouter);
app.use("/business", businessRouter);
app.use("/auth", authRouter);
app.use("/comment", commentRouter);
app.use("/student", studentRouter);
app.use("/announcement", announcementRouter);
app.use("/review", reviewRouter);

// Begin application routing
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
