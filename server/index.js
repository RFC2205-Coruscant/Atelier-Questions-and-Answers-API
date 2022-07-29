require("dotenv").config();

const express = require('express');
const path = require("path");
const controller = require("./controllers.js");

let app = express();

// app.use(express.static(__dirname + '/../client/dist'));

app.get("/*", controller.get);
app.post("/*", controller.post);
app.put("/*", controller.put);


const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

