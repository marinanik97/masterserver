const MedicalRecord = require("../database/models/MedicalRecord");

module.exports = {
  Query: {
    getMedicalRecords: async () => {
      return await MedicalRecord.find();
    },
    getMedicalRecordById: async (_, { id }) => {
      return await MedicalRecord.findById(id);
    },
  },
  Mutation: {
    newMedicalRecord: async (_, args) => {
      const res = await MedicalRecord.create(args.input);
      return await MedicalRecord.findOne({ _id: res.id });
    },
    editMedicalRecord: async (_, { input }) => {
      try {
        if (await MedicalRecord.findById(input.id)) {
          return await MedicalRecord.findByIdAndUpdate(
            input.id,
            { ...input },
            { new: true }
          );
        }
        throw new Error("Medical Record doesn't exists.");
      } catch (e) {
        throw e;
      }
    },
  },
};
