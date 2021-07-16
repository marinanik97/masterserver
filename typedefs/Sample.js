const { gql } = require("apollo-server-express");

module.exports = gql`
  type Sample {
    id: ID
    requiredresults: String
    medicalrecord: MedicalRecord
    sampletype: SampleType
    doctor: Doctor
  }

  extend type Query {
    getSamples: [Sample!]
    getSampleByID(id: ID!): Sample
  }
`;
