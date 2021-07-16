const Sample = require("../database/models/sample");

module.exports = {
  Query: {
    //populate prima naziv polja, ili u schemi
    getSamples: async () => {
      return await SampleType.find()
        .populate("medicalrecord")
        .populate("sampletype")
        .populate("doctor");
    },
    getSampleByID: async (_, { id }) => {
      return await Sample.findById(id);
    },
  },
};
