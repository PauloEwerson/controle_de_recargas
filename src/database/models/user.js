module.exports = (sequelize, DataTypes) => {
  const createUser = sequelize.define('User', {
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

  createUser.associate = (models) => {
    createUser.hasMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'userId',
    });
  }

  return createUser;
}