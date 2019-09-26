import { DEV_ENVIRONMENT } from 'config/const'
import { IENV } from 'types/env'

const env: IENV = {
  environment: process.env.APPLICATION_ENVIRONMENT || DEV_ENVIRONMENT,
  port: Number(process.env.APPLICATION_PORT) || 8080,
}

export default env
