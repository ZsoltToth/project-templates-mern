const express = require('express')
const router = express.Router()
const issuesController = require('../controller/issues')
const issueRequestDto = require('./dto/issueRecordRequestDto')

/**
 * @swagger
 * /issues:
 *  get:
 *      summary: Fetches all issues
 *      responses:
 *          200:
 *              description: list of issues
 */
router.get('/', issuesController.readIssue)

/**
 * @swagger
 * /issues/{id}:
 *      get:
 *          summary: get issue by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: integer
 *                  required: true
 *          responses:
 *              200:
 *                  description: a single issue object
 *
 */
router.get('/:id', issuesController.readIssue)
router.post('/', issueRequestDto, issuesController.createIssue)

module.exports = router
