/** JSDoc
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const createPostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      foreingKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      foreingKey: true,
      type: DataTypes.INTEGER,
    }},
    {
      timestamps: false,
      tableName: 'PostCategories',
    });

  createPostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: createPostCategory,
    }),
    models.Category.belongsToMany(models.BlogPost, {
      as: 'post',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: createPostCategory,
    });
  }

  return createPostCategory;
}