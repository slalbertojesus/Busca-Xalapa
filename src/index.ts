import Express from "express";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from "./modules/user/UserDAO";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";

const puerto = 8000;

var __dirname: string;

const main = async () => {
  await createConnection({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "dbadmin",
    password: "v37MTecfd8T3Ge3G",
    database: "busca_xalapa_db",
    logging: true,
    synchronize: true,
    entities: [__dirname + "/**/*.*"],
  }).catch((error) =>
    console.log("Hubo un error con la base de datos : ", error)
  );

  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
  });
  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(8000, () => {
    console.log("__dirname: " + __dirname);
    console.log(`Busca xalapa ha iniciado en el puerto ${puerto} 🚀`);
  });
};

main();
