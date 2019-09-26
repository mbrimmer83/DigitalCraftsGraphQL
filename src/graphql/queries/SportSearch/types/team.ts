import { GraphQLObjectType, GraphQLString } from 'graphql'

// GraphQL compose with json example
// @ts-ignore
// import composeWithJson from 'graphql-compose-json'

// /* tslint:disable */
// const team = {
//   "name": "Kansas City Chiefs",
//   "city": "Kansas City",
//   "state": "Missouri",
//   "stadiumId": "2ee42224-e61e-47ae-b378-cce9c1407633",
//   "league": "nfl",
//   "id": "19fe047d-de6d-11e9-aa38-e7cd6d4d6af2"
// }

// const TeamType = composeWithJson('TeamType', team).getType()

const TeamType = new GraphQLObjectType({
  name: 'TeamType',
  fields: {
    name: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    state: {
      type: GraphQLString,
    },
    stadiumId: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    league: {
      type: GraphQLString,
    },
  },
})

export default TeamType
