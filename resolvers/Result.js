const Result = require("../database/models/result");

module.exports = {
  Query: {
    getResults: async () => {
      //mislim da ti ne treba ceo ovaj populate
      //return await Rezultat.find().populate('uzorak').populate('karton').populate('tipuzorka').populate('doktor');
      return await Result.find().populate({
        path: "sample",
        populate: [
          { path: "medicalrecord", model: "Karton" },
          { path: "sampletype", model: "SampleType" },
          { path: "doctor", model: "Doctor" },
        ],
      });
    },
    getResultByID: async (_, { id }) => {
      return await Result.findById(id);
    },
  },
  Mutation: {
    newResult: async (_, args) => {
      const res = await Result.create(args.input);
      return await Result.findOne({ _id: res.id }).populate({
        path: "sample",
        populate: [
          { path: "medicalrecord", model: "MedicalRecord" },
          { path: "sampletype", model: "SampleType" },
          { path: "doctor", model: "Doctor" },
        ],
      });
    },
    deleteResult: async (_, { id }) => {
      try {
        return await Result.findByIdAndDelete(id).populate({
          path: "sample",
          populate: [
            { path: "medicalrecord", model: "MedicalRecord" },
            { path: "sampletype", model: "SampleType" },
            { path: "doctor", model: "Doctor" },
          ],
        });
      } catch (e) {
        throw e;
      }
    },
    editResult: async (_, { input }) => {
      try {
        if (await Result.findById(input.id)) {
          return await Result.findByIdAndUpdate(
            input.id,
            { ...input },
            { new: true }
          ).populate({
            path: "sample",
            populate: [
              { path: "medicalrecord", model: "MedicalRecord" },
              { path: "sampletype", model: "SampleType" },
              { path: "doctor", model: "Doctor" },
            ],
          });
        }
        throw new Error("Result doesn't exists.");
      } catch (e) {
        throw e;
      }
    },
  },
};
