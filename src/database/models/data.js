/** JSDoc
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const createDataTable = sequelize.define('Data', {
    id : {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    loja: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    data: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    hora: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    pdv: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    nsuTef: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    nsuHost: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    transacao: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    estado: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    codResp: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    autorizadora: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    concessionaria_integrador: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    telefone: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    valor: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    nsuSitefPagto: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    lojaConc: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    operador: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    usuarioPend: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    dataPend: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    horaPend: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    cupomFiscal: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    horaFiscal: {
      allowNull: false,
      type: DataTypes.STRING(255),
    }}, 
    {
      timestamps: false,
      tableName: 'Datas',
    });

  return createDataTable;
}