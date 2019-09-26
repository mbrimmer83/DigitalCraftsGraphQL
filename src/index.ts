// tslint:disable-next-line: no-var-requires
require('app-module-path').addPath(__dirname)

import { ApolloServer } from 'apollo-server-express'
import { DEV_ENVIRONMENT } from 'config/const'
import env from 'config/env'
import express from 'express'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import schema from 'graphql/schema'

// Create Express app
const app = express()

const options = {
  introspection: env.environment === DEV_ENVIRONMENT || false,
  playground: env.environment === DEV_ENVIRONMENT || false,
  schema,
}

// Create Apollo Server
const server = new ApolloServer({ ...options })

// Apply voyager middleware in development env
if (env.environment === DEV_ENVIRONMENT) {
  app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }))
}

// Pass Express app as middleware to server
server.applyMiddleware({ app })

const devCallback = () => {
  // tslint:disable-next-line
  console.log(`🚀 graphql ready @ http://localhost:${port}/graphql`)
  // tslint:disable-next-line
  console.log(`🚀 voyager ready @ http://localhost:${port}/voyager`)
}

const prodCallback = () => {
  // tslint:disable-next-line
  console.log(`🚀 Server ready for requests @ http://localhost:${port}/graphql`)
}

const callback = env.environment === DEV_ENVIRONMENT ? devCallback : prodCallback

// Init app
const port = env.port
app.listen(port, callback)
