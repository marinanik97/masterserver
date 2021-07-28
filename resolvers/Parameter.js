const Parameter = require("../database/models/parameter");

module.exports = {
  Query: {
    getParameters: async () => {
      return await Parameter.find();
    },
    getParameterByID: async (_, { id }) => {
      return await Parameter.findById(id);
    },
  },
};
