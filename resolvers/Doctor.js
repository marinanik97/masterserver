const Doctor = require("../database/models/doctor");

module.exports = {
  Query: {
    getDoctors: async () => {
      return await Doctor.find();
    },
    getDoctorByID: async (_, { id }) => {
      return await Doctor.findById(id);
    },
  },
};
