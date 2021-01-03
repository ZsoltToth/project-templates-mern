const { validationResult } = require('express-validator')
const Issue = require('../model/issue')

exports.createIssue = (req, res, next) => {
  if (!validationResult(req).isEmpty()) {
    res.status(400).send({ errors: validationResult(req).array() })
    return
  }
  Issue.create(req.body).then(issue => res.send(issue)).catch(err => res.status(400).send(err))
}

exports.readIssue = (req, res, next) => {
  if (req.params.id === undefined) {
    Issue.find().then(issues => res.send(issues))
    return
  }
  Issue.findById(req.params.id).then(issues => res.send(issues === null ? {} : issues)).catch(err => res.send({ error: err }))
}
