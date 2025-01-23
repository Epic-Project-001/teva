import { gql } from "@apollo/client";

export const INSERT_ONE_SUBMISSION = gql`
  mutation InsertSubmission($data: SubmissionInsertInput!) {
    insertOneSubmission(data: $data) {
      email
      firstname
      lastname
      zipCode
    }
  }
`;
