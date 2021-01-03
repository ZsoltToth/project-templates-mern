const environment = ['dev', 'test', 'prod'].includes(process.env.NODE_ENV) ? process.env.NODE_ENV : 'dev'

const dev = {
  env: 'development',
  app: {
    port: 3000
  },
  db: {
    host: '127.0.0.1',
    port: 27017,
    name: 'test',
    user: 'root',
    password: 'secret'
  }
}

const prod = { ...dev, env: 'production' }
const test = { ...dev, env: 'test' }

const config = {
  dev, prod, test
}

module.exports = config[environment]
