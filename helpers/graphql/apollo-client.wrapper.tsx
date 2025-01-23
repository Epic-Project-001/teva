"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/helpers/graphql/apollo-client.server";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
