const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODBURL, {
  keepAlive: true,
  useMongoClient: true
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
