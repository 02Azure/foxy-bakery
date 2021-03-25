'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Transactions', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fkey_transaction2user',
      references: { 
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Transactions", "fkey_transaction2user", {})
  }
};
