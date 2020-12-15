'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return await Promise.all([
      queryInterface.addColumn('Books', 'userId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      })
    ],
      queryInterface.addConstraint('Books', {
        fields: ['userId'],
        type: 'unique',
        name: 'Books_userId_fkey',
        references: {
          table: 'Users',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }))

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return await Promise.all([
      queryInterface.removeConstraint('Books', 'Books_userId_fkey'),
      queryInterface.removeIndex('Books', 'Books_userId_fkey')
    ])
  }
};
