const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quantitySchema = new Schema({
  number: { type: Double, required: true },
  unitOfMeasure: { type: String, required: true },
});

module.exports = mongoose.model("Quantity", quantitySchema);
