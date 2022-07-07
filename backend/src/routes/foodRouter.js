const express = require('express');
const router = express.Router();
const controller = require('../controller/foodController');

/**
 * @swagger
 * /foods:
 *  post:
 *      summary: create a new issue
 *      requestBody:
 *        content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   required: true
 *                   properties:
 *                      name:
 *                          type: string
 *                          example: "Fish Soup"
 *                      description:
 *                          type: string
 *                          example: "Fish soup is delicious"
 *                      allergens:
 *                          type: array
 *                          items:
 *                            type: string
 *                          example: ["Fish", "Nuts"]
 *              image/png:
 *                schema:
 *                  type: string
 *                  format: binary
 *      responses:
 *          200:
 *              description: success
 *          400:
 *              description: problem
 */
router.post('/', controller.recordFood);

module.exports = router;
