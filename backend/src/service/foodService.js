const foodDao = require('../model/food');

const recordFood = ({ name, description, allergens }) => {
  return new Promise((resolve, reject) => {
    foodDao.create({ name, description, allergens })
      .then((docs) => resolve(docs))
      .catch((error) => reject(error));
  });
};

module.exports = { recordFood };
