'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User)
      Transaction.belongsToMany(models.Item, {through: models.TransactionItem})
    }
  };
  Transaction.init({
    UserId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    isPaid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transaction',
  })
  Transaction.beforeCreate((trans, option) => {
    trans.date = new Date()
    trans.isPaid = false
  })
  return Transaction;
};