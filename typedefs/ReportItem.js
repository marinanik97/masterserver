const { gql } = require("apollo-server-express");

module.exports = gql`
  type ReportItem {
    id: ID
    serialnumber: Int
    indicator: String
    parameterresult: Float
    status: String
    report: Report
    parameter: Parameter
  }
  input newReportItemInput {
    serialnumber: Int
    indicator: String
    parameterresult: Float
    status: String
    report: ID
    parameter: ID
  }
  input editReportItemInput {
    report: ID
    status: String
  }
  extend type Query {
    getReportItems: [ReportItem!]
    getReportItemDvas: [ReportItem!]
  }

  extend type Mutation {
    newReportItem(input: newReportItemInput): ReportItem!
    editReportItem(input: editReportItemInput): Int
  }
`;
