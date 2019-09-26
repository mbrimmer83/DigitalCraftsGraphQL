import { GraphQLList, GraphQLObjectType } from 'graphql'
import StadiumType from './stadiums'
import TeamType from './team'

const SearchType = new GraphQLObjectType({
  name: 'SearchType',
  fields: {
    teams: {
      type: new GraphQLList(TeamType),
    },
    stadiums: {
      type: new GraphQLList(StadiumType),
    },
  },
})

export default SearchType
