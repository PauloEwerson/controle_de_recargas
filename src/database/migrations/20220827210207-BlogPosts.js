'use strict';

module.exports = {
  /** JSDoc
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title : {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      content : {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      userId : {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreingKey: true,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
      },
      published : {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated : {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
