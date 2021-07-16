const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reportItemSchema = new Schema({
  serialnumber: { type: Number, required: true },
  indicator: { type: String, required: true },
  parameterresult: { type: Number, required: true },
  status: { type: String, required: true },
  report: { type: mongoose.Types.ObjectId, required: true, ref: "Report" },
  parameter: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Parameter",
  },
});

module.exports = mongoose.model("ReportItem", reportItemSchema);
