'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [
      {
        username: "otong_322",
        password: "pass123",
        email: "otong@mail.com",
        address: "Zuzu city no. 32, Albatros Country",
        phone: "07448342",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "02azure",
        password: "secret",
        email: "azure@gmail.com",
        address: "Pelican Town no. 17, Stardew Valley",
        phone: "07343213",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "lily_nano",
        password: "lilily",
        email: "lily_lily@mail.com",
        address: "Evercold city no. 3, Northren City",
        phone: "0834132",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert("Users", users, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
