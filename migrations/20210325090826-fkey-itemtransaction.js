'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('TransactionItems', {
      fields: ['ItemId'],
      type: 'foreign key',
      name: 'fkey_transactionitem2item',
      references: { 
        table: 'Items',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
      .then(() => {
        return queryInterface.addConstraint('TransactionItems', {
          fields: ['TransactionId'],
          type: 'foreign key',
          name: 'fkey_transactionitem2transaction',
          references: { 
            table: 'Transactions',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("TransactionItems", "fkey_transactionitem2item")
      .then(data => {
        return queryInterface.removeConstraint("TransactionItems", "fkey_transactionitem2transaction")
      })
  }
};
