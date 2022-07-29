// const Model = require("./model.js");

const get = (req, res) => {
  console.log("get received");
  res.sendStatus(200);
}

const post = (req, res) => {
    console.log("post received");
    res.sendStatus(200);
  
}

const put = (req, res) => {
    console.log("put received");
    res.sendStatus(200);
  
}

module.exports = {
  get,
  post,
  put,
}