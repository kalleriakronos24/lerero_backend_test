'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await Promise.all([
      queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        fullname: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        wallet: {
          type: Sequelize.INTEGER,
          defaultValue: '0'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users', {
      force: true
    });
  }
};