const environment = ['dev', 'test', 'prod'].includes(process.env.NODE_ENV) ? process.env.NODE_ENV : 'dev';

const dev = {
  env: 'development',
  app: {
    port: 3000
  },
  db: {
    host: '127.0.0.1',
    port: 27017,
    name: 'test',
    user: 'mern',
    password: 'secret'
  }
};

const test = {
  env: 'test',
  app: {
    port: (process.env.APP_PORT !== undefined ? process.env.APP_PORT : dev.app.port)
  },
  db: {
    host: (process.env.DB_HOST !== undefined ? process.env.DB_HOST : dev.db.host),
    port: (process.env.DB_PORT !== undefined ? process.env.DB_PORT : dev.db.port),
    name: (process.env.DB_NAME !== undefined ? process.env.DB_NAME : dev.db.name),
    user: (process.env.DB_USER !== undefined ? process.env.DB_USER : dev.db.user),
    password: (process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : dev.db.password)
  }
};
const prod = { ...test, env: 'production' };

const config = {
  dev, prod, test
};

module.exports = config[environment];
