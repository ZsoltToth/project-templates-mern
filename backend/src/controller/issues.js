const { validationResult } = require('express-validator');
const service = require('../service/issues');

exports.createIssue = (req, res, next) => {
  if (!validationResult(req).isEmpty()) {
    res.status(400).send({ errors: validationResult(req).array() });
    return;
  }
  service.createIssue(req.body).then(issue => res.send(issue)).catch(err => res.status(500).send(err.message));
};

exports.readIssue = (req, res, next) => {
  if (req.params.id === undefined) {
    service.readIssues()
      .then(issues => res.status(200).send(issues))
      .catch(err => res.status(500).send(err.message));
    return;
  }
  service.readIssuesById(req.params.id)
    .then(issues => res.staus(200).send(issues === null ? {} : issues))
    .catch(err => res.status(500).send(err.message));
};

exports.stateChangeToInProgress = (req, res, next) => {
  service.changeStateToInProgress(req.params.id)
    .then(issues => res.send(issues))
    .catch(err => res.status(400).send({ error: err.message }));
};
exports.stateChangeToResolved = (req, res, next) => {
  service.changeStateToResolved(req.params.id)
    .then(issues => res.send(issues))
    .catch(err => res.status(400).send({ error: err.message }));
};

exports.stateChangeToClosed = (req, res, next) => {
  service.changeStateToClosed(req.params.id)
    .then(issues => res.send(issues))
    .catch(error => {
      res.status(400).send({ error: error.message });
    });
};
