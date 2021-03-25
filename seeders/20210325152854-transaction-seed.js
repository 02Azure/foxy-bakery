'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let transactions = [
      {
        UserId: 1,
        date: new Date("2021-03-12T10:03:14Z"),
        isPaid: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        date: new Date("2021-03-01T04:53:32Z"),
        isPaid: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        date: new Date("2021-02-22T11:41:14Z"),
        isPaid: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        date: new Date("2021-02-08T11:13:54Z"),
        isPaid: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        date: new Date("2021-02-02T10:53:54Z"),
        isPaid: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert("Transactions", transactions, {})
      .then(() => {
        let transactionsItems = [
          {
            ItemId: 1,
            amount: 1,
            TransactionId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            ItemId: 2,
            amount: 3,
            TransactionId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            ItemId: 3,
            amount: 5,
            TransactionId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            ItemId: 4,
            amount: 3,
            TransactionId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            ItemId: 2,
            amount: 1,
            TransactionId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            ItemId: 3,
            amount: 2,
            TransactionId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            ItemId: 4,
            amount: 5,
            TransactionId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            ItemId: 2,
            amount: 6,
            TransactionId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            ItemId: 1,
            amount: 3,
            TransactionId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
          },
        ]
        return queryInterface.bulkInsert("TransactionItems", transactionsItems, {})
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TransactionItems', null, {})
      .then(() => {
        return queryInterface.bulkDelete("Transactions", null, {})
      })
  }
};
