const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parameterSchema = new Schema({
  name: { type: String, required: true },
  referencevalues: { type: String, required: true },
});

module.exports = mongoose.model("Parameter", parameterSchema);
