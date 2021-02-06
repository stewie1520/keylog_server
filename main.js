const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require('dotenv').config();
require('./models/connect');
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/logs', require('./routes/logs'));

app.listen(3000, () => {
	console.log(`Server is running on port ${3000}`);
});
