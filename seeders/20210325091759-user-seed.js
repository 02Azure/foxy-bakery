'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [
      {
        username: "otong_322",
        password: "$2a$10$owuk4k.Rw6sUUhyDOZdZAOrXYsoMyDLZw3Yercdin7xyDENfrv0ZC", //pass123
        email: "otong@mail.com",
        address: "Zuzu city no. 32, Albatros Country",
        phone: "07448342",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "02azure",
        password: "$2a$10$kGRKsK0R8FMsq543pk8OieVbeyx4zSI0OEfvbo2WfzVaYPY2GG.82", //secret
        email: "azure@gmail.com",
        address: "Pelican Town no. 17, Stardew Valley",
        phone: "07343213",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "lily_nano",
        password: "$2a$10$8PeKL.mm3FpKaj22JIJvoeNJpap0FRTIFQJDuMp/n8ej3Yy8p1PQG", //lilily
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
