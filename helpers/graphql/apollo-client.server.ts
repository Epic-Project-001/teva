import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export default client;

// let uri = `${BASE_URL}/api/graphql`;
// console.log("*** BASE URL ***", { uri });
// export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     defaultOptions: {
//       watchQuery: {
//         fetchPolicy: "cache-and-network",
//       },
//     },
//     link: new HttpLink({
//       uri,
//     }),
//   });
// });
