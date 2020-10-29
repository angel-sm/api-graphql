import { IResolvers } from 'graphql-tools'
import { database } from '../data/data.store';

export const query: IResolvers = {
    Query: {
        Students(): any{
            return database.students
        }
    }
};
