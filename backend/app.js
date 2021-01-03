const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const issuesRouter = require('./routes/issues')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

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
  apis: ['./routes/*.js']
}
const swaggerSpec = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/issues', issuesRouter)

module.exports = app
