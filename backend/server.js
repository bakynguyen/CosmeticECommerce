const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const connectDB = require("./config/database");
const route = require("./routes");

const app = express();

dotenv.config({ debug: true, override: true });

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));

connectDB.connectDB();

route(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`E-commerce app is listening at http://localhost:${port}`);
});
