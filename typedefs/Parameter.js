const { gql } = require("apollo-server-express");

module.exports = gql`
  type Parameter {
    id: ID
    name: String
    referencevalues: String
  }

  extend type Query {
    getParameters: [Parameter!]
    getParameterByID(id: ID!): Parameter
  }
`;
