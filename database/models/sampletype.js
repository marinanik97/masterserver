const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sampleTypeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("SampleType", sampleTypeSchema);
