const express = require('express')
const router = express.Router()
const issuesController = require('../controller/issues')
const issueRequestDto = require('./dto/issueRecordRequestDto')

/* GET home page. */
router.get('/', issuesController.readIssue)

router.get('/:id', issuesController.readIssue)

router.post('/', issueRequestDto, issuesController.createIssue)

module.exports = router
