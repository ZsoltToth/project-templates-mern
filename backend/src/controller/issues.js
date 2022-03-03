const { validationResult } = require('express-validator');
const service = require('../service/issues');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'logs/controller.log'
    }),
    new winston.transports.Console()
  ]
});

exports.createIssue = (req, res, next) => {
  if (!validationResult(req).isEmpty()) {
    res.status(400).send({ errors: validationResult(req).array() });
    return;
  }
  service.createIssue(req.body).then(issue => res.send(issue)).catch(err => res.status(400).send(err));
};

exports.readIssue = (req, res, next) => {
  if (req.params.id === undefined) {
    service.readIssues()
      .then(issues => res.send(issues))
      .catch(err => res.send({ error: err }));
    return;
  }
  service.readIssuesById(req.params.id)
    .then(issues => res.send(issues === null ? {} : issues))
    .catch(err => res.send({ error: err }));
};

exports.stateChangeToInProgress = (req, res, next) => {
  service.changeStateToInProgress(req.params.id)
    .then(issues => res.send(issues))
    .catch(err => res.status(400).send({ error: err }));
};
exports.stateChangeToResolved = (req, res, next) => {
  service.changeStateToResolved(req.params.id)
    .then(issues => res.send(issues))
    .catch(err => res.status(400).send({ error: err }));
};

exports.stateChangeToClosed = (req, res, next) => {
  service.changeStateToClosed(req.params.id)
    .then(issues => res.send(issues))
    .catch(err => {
      logger.error({ err: err });
      res.status(400).send({ error: err });
    });
};
