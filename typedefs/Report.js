const { gql } = require("apollo-server-express");

module.exports = gql`
  type Report {
    id: ID
    dateofprinting: Date
    note: String
    doctor: Doctor
    medicalrecord: MedicalRecord
    #reportitem: [ReportItem]
  }

  input newReportInput {
    dateofprinting: Date
    note: String
    doctor: ID
    medicalrecord: ID
  }

  extend type Query {
    getReports: [Report!]
    getReportsByID(id: ID!): Report
  }

  extend type Mutation {
    deleteReport(id: ID!): Report!
    newReport(input: newReportInput): Report!
  }
`;
