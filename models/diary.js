const Sequelize = require('sequelize');

module.exports = class Diary extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Diary',
      tableName: 'diary',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Diary.belongsTo(db.User, {
      foreignKey: 'userID',
      targetKey: 'userID',
    })
  }
};