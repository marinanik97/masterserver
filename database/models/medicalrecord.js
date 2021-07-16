const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicalRecordSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  JMBG: { type: String, required: true },
  gender: { type: String, required: true },
  dateofbirth: { type: Date, required: true },
  phonenumber: { type: String, required: true },
  email: { type: String, required: true },
  reports: [{ type: mongoose.Types.ObjectId, ref: "Report" }],
  // required: true,
});

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);
