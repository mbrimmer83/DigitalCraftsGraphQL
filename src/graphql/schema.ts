import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import Hello from 'graphql/queries/Hello/query/Hello'
import Search from 'graphql/queries/SportSearch/query/search'

const query = new GraphQLObjectType({
  description: 'root query',
  fields: {
    Hello,
    Search,
  },
  name: 'RootQuery',
})

const schema = new GraphQLSchema({
  query,
})

export default schema
