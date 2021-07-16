const { gql } = require("apollo-server-express");

module.exports = gql`
  type SampleType {
    id: ID!
    name: String
    description: String
  }

  extend type Query {
    getSampleTypes: [SampleType!]
  }
`;
