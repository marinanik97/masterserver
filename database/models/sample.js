const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  requiredresults: { type: String, required: true },
  medicalrecord: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "MedicalRecord",
  },
  sampletype: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "SampleType",
  },
  doctor: { type: Schema.Types.ObjectId, required: true, ref: "Doctor" },
  // required: true,
});

module.exports = mongoose.model("Sample", sampleSchema);
