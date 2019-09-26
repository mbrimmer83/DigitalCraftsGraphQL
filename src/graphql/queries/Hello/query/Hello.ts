import HelloType from 'graphql/queries/Hello/types/Hello'

export default {
  type: HelloType,
  resolve: () => ({ message: 'Hello World!' }),
}
