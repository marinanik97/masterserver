const { gql } = require("apollo-server-express");

module.exports = gql`
  type Result {
    id: ID
    sender: String
    dateofentry: Date
    sample: Sample
  }

  input newResultInput {
    sender: String
    dateofentry: Date
    sample: ID
  }

  input editResultInput {
    id: ID
    sender: String
    dateofentry: Date
    sample: ID
  }

  extend type Query {
    getResults: [Result!]
    getResultByID(id: ID!): Result
  }

  extend type Mutation {
    newResult(input: newResultInput): Result!
    deleteResult(id: ID!): Result!
    editResult(input: editResultInput): Result!
  }
`;
