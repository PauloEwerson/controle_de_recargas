'use strict';

module.exports = {
  /** JSDoc
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Datas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      loja: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      data: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      hora: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      pdv: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      nsuTef: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      nsuHost: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      transacao: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      estado: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      codResp: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      autorizadora: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      concessionaria_integrador: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      valor: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      nsuSitefPagto: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      lojaConc: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      operador: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      usuarioPend: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      dataPend: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      horaPend: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      cupomFiscal: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      horaFiscal: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Datas');
  }
};
