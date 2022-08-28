module.exports = (sequelize, DataTypes) => {
  const createCategory = sequelize.define('Category', {
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