import express, {Application, Request, Response} from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import { createServer } from 'http';
import ExpressPlaygroundMiddleware  from 'graphql-playground-middleware-express';

const app: Application = express();

app.use('*', cors());
app.use(compression());

const server = new ApolloServer({
    schema,
    introspection: true,
});

server.applyMiddleware({
    app
});

app.get('*', ExpressPlaygroundMiddleware({
    endpoint: '/graphql'
}))

const httpServer = createServer(app);

httpServer.listen(5000, () => {
    console.log('listen on http://localhost:5000')
})