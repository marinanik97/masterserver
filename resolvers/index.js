const MedicalRecordResolver = require("./MedicalRecord");
const DoctorResolver = require("./Doctor");
const ReportResolver = require("./Report");
const ResultResolver = require("./Result");
const ParameterResolver = require("./Parameter");
const SampleTypeResolver = require("./SampleType");
const ReportItemResolver = require("./ReportItem");

const GraphQLDateTime = require("graphql-iso-date");

const customScalarResolver = {
  Date: GraphQLDateTime,
};

module.exports = [
  //customScalarResolver,
  MedicalRecordResolver,
  DoctorResolver,
  ReportResolver,
  ResultResolver,
  SampleTypeResolver,
  ParameterResolver,
  SampleResolver,
  ReportItemResolver,
];
