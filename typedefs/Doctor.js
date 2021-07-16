const { gql } = require("apollo-server-express");

module.exports = gql`
  type Doctor {
    id: ID
    name: String
    surname: String
    JMBG: String
    specialty: String
  }

  extend type Query {
    getDoctors: [Doctor!]
    getDoctorByID(id: ID!): Doctor
  }
`;
