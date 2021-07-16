const { gql } = require("apollo-server-express");

const MedicalRecordType = require("./MedicalRecord");
const DoctorType = require("./Doctor");
const ReportType = require("./Report");
const ResultType = require("./Result");
const SampleType = require("./SampleType");
const ParameterType = require("./Parameter");
const SampleType = require("./Sample");
const ReportItemType = require("./ReportItem");

const RootType = gql`
  scalar Date
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [
  RootType,
  MedicalRecordType,
  ReportType,
  DoctorType,
  ResultType,
  SampleType,
  ParameterType,
  SampleType,
  ReportItemType,
];
