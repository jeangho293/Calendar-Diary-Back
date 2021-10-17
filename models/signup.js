const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userID: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        required: true,
      },
      PW: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'user',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.User.hasMany(db.Diary, {
      foreignKey: 'userID',
      sourceKey: 'userID'
    })
  }
};