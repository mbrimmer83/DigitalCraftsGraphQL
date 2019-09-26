import axios from 'axios'
import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from 'graphql'
import SearchType from 'graphql/queries/SportSearch/types/search'

export default {
  type: SearchType,
  args: {
    query: {
      type: new GraphQLNonNull(GraphQLString),
    },
    withStadiums: {
      type: GraphQLBoolean,
    },
  },
  resolve: (_: any, args: any) => {
    const withStadiums = args.withStadiums || false
    const url = `https://easycoders-api.herokuapp.com/api/sports/search?query=${args.query}&withStadiums=${withStadiums}`

    return axios.get(url)
      .then((data) => data.data)
      .catch((error) => {
        // tslint:disable-next-line: no-console
        console.error('Oh no a problem occurred ', error)

        throw error
      })
  },
}
