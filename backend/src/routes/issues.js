const express = require('express');
const router = express.Router();
const issuesController = require('../controller/issues');
const issueRequestDto = require('./dto/issueRecordRequestDto');

/**
 * @swagger
 * /issues:
 *  get:
 *      summary: Fetches all issues
 *      responses:
 *          200:
 *              description: list of issues
 */
router.get('/', issuesController.readIssue);

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
router.get('/:id', issuesController.readIssue);

/**
 * @swagger
 * /issues:
 *  post:
 *      summary: create a new issue
 *      requestBody:
 *        content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   required: true
 *                   properties:
 *                      title:
 *                          type: string
 *                          example: Issue 1
 *                      description:
 *                          type: string
 *      responses:
 *          200:
 *              description: success
 *          400:
 *              description: problem
 */
router.post('/', issueRequestDto, issuesController.createIssue);

/**
 * @swagger
 * /issues/{id}/in-progress:
 *     put:
 *          summary: set issue to "in progress" state
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: integer
 *                  required: true
 *          responses:
 *              200:
 *                  description: a single issue object
 *              400:
 *                  description: error object
 *
 */
router.put('/:id/in-progress', issuesController.stateChangeToInProgress);

/**
 * @swagger
 * /issues/{id}/resolve:
 *      put:
 *          summary: get issue by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: integer
 *                  required: true
 *          responses:
 *              200:
 *                  description: a single issue object
 *              400:
 *                  description: error object
 */
router.put('/:id/resolve', issuesController.stateChangeToResolved);
/**
 * @swagger
 * /issues/{id}/close:
 *      put:
 *          summary: get issue by id
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: integer
 *                  required: true
 *          responses:
 *              200:
 *                  description: a single issue object
 *              400:
 *                  description: error object
 *
 */
router.put('/:id/close', issuesController.stateChangeToClosed);

module.exports = router;
