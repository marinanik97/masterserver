const { gql } = require("apollo-server-express");

module.exports = gql`
  type MedicalRecord {
    id: ID!
    name: String
    surname: String
    JMBG: String
    dateofbirth: Date
    gender: String
    phonenumber: String
    email: String
  }
  input newMedicalRecordInput {
    name: String
    surname: String
    JMBG: String
    dateofbirth: Date
    gender: String
    phonenumber: String
    email: String
  }

  input editMedicalRecordInput {
    id: ID
    name: String
    surname: String
    JMBG: String
    dateofbirth: Date
    gender: String
    phonenumber: String
    email: String
  }

  extend type Query {
    getMedicalRecords: [MedicalRecord!]
    getMedicalRecordById(id: ID!): MedicalRecord
  }

  extend type Mutation {
    newMedicalRecord(input: newMedicalRecordInput): MedicalRecord!
    editMedicalRecord(input: editMedicalRecordInput): MedicalRecord!
  }
`;
