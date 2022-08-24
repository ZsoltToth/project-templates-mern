const foodDao = require('../model/food');

const recordFood = ({ name, description, allergens, image }) => {
  return new Promise((resolve, reject) => {
    foodDao.create({ name, description, allergens, image })
      .then((docs) => resolve(docs))
      .catch((error) => reject(error));
  });
};

const fetchFoods = () => {
  return new Promise((resolve) => {
    foodDao.find().then((docs) => {
      resolve(docs);
    });
  });
};

module.exports = { recordFood, fetchFoods };
