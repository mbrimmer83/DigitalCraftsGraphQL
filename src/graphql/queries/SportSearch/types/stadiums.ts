import { GraphQLBoolean, GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
// GraphQLInt

const StadiumType = new GraphQLObjectType({
  name: 'StadiumType',
  fields: {
    name: {
      description: 'Stadium name',
      type: GraphQLString,
    },
    lat: {
      type: GraphQLFloat,
    },
    lon: {
      type: GraphQLFloat,
    },
    id: {
      type: GraphQLString,
    },
    teams: {
      type: new GraphQLList(GraphQLString),
    },
    hasThreeTeams: {
      type: GraphQLBoolean,
      resolve: ((stadium) => stadium.teams.length === 3),
    },
  },
})

export default StadiumType
