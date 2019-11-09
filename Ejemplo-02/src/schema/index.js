// Import schema definition
import SchemaDefinition from './schemaDefinition.graphql';
import Types from './types.graphql';

// Import Queries and Mutations
import Query from './query.graphql';
import Mutation from './mutation.graphql';
import Subscription from './subscription.graphql';

export default [SchemaDefinition, Types, Query, Mutation, Subscription];
