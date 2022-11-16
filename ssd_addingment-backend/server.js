const express = require("express");
const cors = require("cors");
const db = require("./server/model");

global.__basedir = __dirname;

//get env file configarations
require("dotenv").config();

const app = express();
const port = 5000;

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


app.use(express.json());

// connect mongo db database
db.sequelize.sync();

// const router = require("./server/routes/index");
const initRoutes = require("./server/routes");

//load routers
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
