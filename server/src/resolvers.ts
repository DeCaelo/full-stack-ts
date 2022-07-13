import queryTwitterResolvers from './resolvers/Query';
import { Resolvers } from './resolvers-types.generated';

const resolvers: Resolvers = {
  Query: queryTwitterResolvers,
};

export default resolvers;
