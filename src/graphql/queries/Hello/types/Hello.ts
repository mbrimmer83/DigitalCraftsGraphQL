import { GraphQLObjectType, GraphQLString } from 'graphql'

const HelloType = new GraphQLObjectType({
  name: 'HelloType',
  description: 'Hello World Type',
  fields: {
    message: { type: GraphQLString },
  },
})

export default HelloType
