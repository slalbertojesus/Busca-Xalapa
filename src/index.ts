import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema, Resolver, Query } from "type-graphql";
import "reflect-metadata";

const puerto = 8000;

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return "Hello workd";
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({ schema });
  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(8000, () => {
    console.log(`Busca xalapa ha iniciado en el puerto ${puerto} 🚀`);
  });
};

main();
