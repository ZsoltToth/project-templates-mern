const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const winston = require('winston');
const log = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: new winston.transports.Console()
});
const config = require('./config');
log.info({ config: config });
const mongoose = require('mongoose');

const { host, port, name, user, password } = config.db;
const dbConnectionString = `mongodb://${host}:${port}/${name}`;

mongoose.connect(dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  auth: {
    authSource: 'admin'
  },
  user: user,
  pass: password
}).catch(reason => {
  log.error({ reason: reason, connectionString: dbConnectionString });
  process.exit(1);
});

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const issuesRouter = require('./routes/issues');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MERN Template Express API with Swagger',
      version: '0.1.0',
      description:
                'Lorem ipsum ...',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'Zsolt Toth',
        url: 'https://github.com/ZsoltToth',
        email: 'toth.zsolt@uni-eszterhazy.hu'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/'
      }
    ]
  },
  apis: [path.join(__dirname, '/routes/*.js')]
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.use('/issues', issuesRouter);

module.exports = app;
