const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  dateofprinting: { type: Date, required: true },
  note: String,
  doctor: { type: mongoose.Types.ObjectId, required: true, ref: "Doctor" },
  medicalrecord: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "MedicalRecord",
  },
  reportitem: [
    { type: mongoose.Types.ObjectId, required: true, ref: "ReportItem" },
  ],
});

module.exports = mongoose.model("Report", reportSchema);
