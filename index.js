import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import cors from "cors";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("graphql server is running"));
