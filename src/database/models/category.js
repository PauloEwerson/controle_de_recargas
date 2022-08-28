/** JSDoc
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const createCategory = sequelize.define('Category', {
    id : {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    }}, 
    {
      timestamps: false,
      tableName: 'Categories',
    });

  return createCategory;
}