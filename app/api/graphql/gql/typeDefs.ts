const typeDefs = `
    type Submission {
        acknowledged: Boolean
        authorized: Boolean
        email: String  
        firstname: String
        lastname: String
        zipCode: String
        community: [String]
        black: Boolean
        hispanic: Boolean
        asian: Boolean
        language: String
    }

    input SubmissionInsertInput {
        acknowledged: Boolean!
        authorized: Boolean
        email: String! 
        firstname: String!
        lastname: String!
        zipCode: String!
        community: [String]
        black: Boolean
        hispanic: Boolean
        asian: Boolean
        language: String
    }

    type Mutation {
        insertOneSubmission(data: SubmissionInsertInput!):Submission
    }

    type Query {
        _placeholder: String
    }
`;
export default typeDefs;
