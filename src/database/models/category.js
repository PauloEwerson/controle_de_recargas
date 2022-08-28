module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
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

  return Category;
}