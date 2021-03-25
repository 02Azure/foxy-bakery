'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        name: "Pink Cake",
        price: 72000,
        desc: "A marvelous pink colored cake, with surprising secret ingredients: melon!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chocholate Cake",
        price: 40000,
        desc: "A staple chocolate cake with a LOT of sugar. Life is already bitter but at least your cake is very sweet!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pumpkin Pie",
        price: 50000,
        desc: "Silky pumpkin cream in a flakey crust, with finest farm-fresh pumpkins!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "3-in-1-Dougnut",
        price: 45000,
        desc: "3 Doughnuts with one purchase! Each one representing your run-of-the-mill main element in most RPG! ",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert("Items", items, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
