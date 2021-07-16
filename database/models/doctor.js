const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  JMBG: { type: String, required: true },
  specialty: { type: String, required: true },
});

module.exports = mongoose.model("Doctor", doctorSchema);
