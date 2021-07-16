const Report = require("../database/models/report");

module.exports = {
  Query: {
    getReports: async () => {
      return await Report.find({}).populate("doctor").populate("medicalrecord");
    },
  },
  Mutation: {
    newReport: async (_, args) => {
      const res = await Report.create(args.input);
      return await Report.findOne({ _id: res.id })
        .populate("doctor")
        .populate("medicalrecord");
    },
    deleteReport: async (_, { id }) => {
      try {
        return await Report.findByIdAndDelete(id)
          .populate("doctor")
          .populate("medicalrecord");
      } catch (e) {
        throw e;
      }
    },
  },
};
