import { IResolvers } from 'graphql-tools'
import { query } from './query';

export const resolvers: IResolvers = {
    ...query
};
