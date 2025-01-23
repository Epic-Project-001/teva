const typeDefs = `
    type Submission {
        email: String  
        firstname: String
        lastname: String
        zipCode: String
    }

    input SubmissionInsertInput {
        email: String! 
        firstname: String!
        lastname: String!
        zipCode: String!
    }

    type Mutation {
        insertOneSubmission(data: SubmissionInsertInput!):Submission
    }

    type Query {
        _placeholder: String
    }
`;
export default typeDefs;
