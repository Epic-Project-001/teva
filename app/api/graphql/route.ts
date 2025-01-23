import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import resolvers from "@/app/api/graphql/gql/resolvers";
import typeDefs from "@/app/api/graphql/gql/typeDefs";
import connectDB from "@/helpers/graphql/mongoose";

type ContextType = {
  req: NextRequest;
  authHeader?: string | null;
};

const server = new ApolloServer<ContextType>({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest, ContextType>(
  server,
  {
    context: async (req: NextRequest) => {
      // const authHeader = req.headers.get("authorization");
      try {
        await connectDB();
        return { req };
      } catch (err: any) {
        console.log("Error making context", err);
        return { req };
      }
    },
  }
);

export { handler as GET, handler as POST };
