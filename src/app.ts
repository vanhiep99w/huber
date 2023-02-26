import { createSchema, createYoga } from "graphql-yoga";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import express, { Express } from "express";

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => "WTF",
    },
  },
});

class App {
  public app: Express;
  constructor() {
    this.app = express();
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.use("/", createYoga({ schema, landingPage: false }));

    this.app.use(cors());
    this.app.use(logger("dev"));
    this.app.use(helmet());
  };
}

export default App;
