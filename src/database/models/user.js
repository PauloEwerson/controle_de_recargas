module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id : {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(255),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(255),
    }}, 
    {
      timestamps: false,
      tableName: 'Users',
    });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'userId',
    });
  }
//
  return User;
}