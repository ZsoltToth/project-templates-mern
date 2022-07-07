const service = require('../service/foodService');

const recordFood = (req, res) => {
  service.recordFood(req.body)
    .then((doc) => { res.status(200).send(doc); })
    .catch(error => { res.status(500).send(error.message); });
};

module.exports = { recordFood };
