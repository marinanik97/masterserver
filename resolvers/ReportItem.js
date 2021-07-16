const ReportItem = require("../database/models/reportitem");

module.exports = {
  Query: {
    //populate prima naziv polja, ili u schemi
    getReportItems: async () => {
      return await ReportItem.find()
        .populate("parameter")
        .populate({
          path: "report",
          populate: [{ path: "medicalrecord", model: "MedicalRecord" }],
        });
    },
    getReportItemDvas: async () => {
      return await ReportItem.find().populate("parameter");
    },
  },
  Mutation: {
    newReportItem: async (_, args) => {
      const res = await ReportItem.create(args.input);
      return await ReportItem.findOne({ _id: res.id })
        .populate("parameter")
        .populate({
          path: "report",
          populate: [{ path: "medicalrecord", model: "MedicalRecord" }],
        });
    },
    editReportItem: async (_, { input }) => {
      try {
        // if (await Stavkaizvestaj.findById(input.id)) {
        var report = input.report;
        var myquery = { report };
        var status = input.status;
        var newvalues = { $set: { status } };
        await ReportItem.updateMany(
          myquery,
          newvalues,
          { multi: true },
          function (err, res) {
            if (err) {
              //  res.send(err);
              throw err;
            } else {
              console.log(res.nModified);
              return res.nModified;
            }
          }
        );
        // return res.nModified;
        // }
        // throw new Error("Stavkaizvestaj doesn't exists.");
      } catch (e) {
        throw e;
      }
    },
  },
};
