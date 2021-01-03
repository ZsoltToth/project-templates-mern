const { validationResult } = require('express-validator')
const issues = [
  { id: 0, title: '1st issue', description: 'Lorem ipsum...' },
  { id: 1, title: '2nd issue', description: 'Lorem ipsum...' }
]

exports.createIssue = (req, res, next) => {
  if (!validationResult(req).isEmpty()) {
    res.status(400).send({ errors: validationResult(req).array() })
    return
  }
  res.send('Hello World!')
}

exports.readIssue = (req, res, next) => {
  if (req.params.id === undefined) {
    res.send(issues)
    return
  }
  res.send(issues.filter(issue => issue.id === req.params.id))
}
