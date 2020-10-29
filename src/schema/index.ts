import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import typeDefs from './schema.graphql';
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from '../resolvers/resolversMap';

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})