const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  sender: { type: String, required: true },
  dateofentry: { type: Date, required: true },
  sample: { type: mongoose.Types.ObjectId, required: true, ref: "Sample" },
  // required: true,
});

module.exports = mongoose.model("Result", resultSchema);
