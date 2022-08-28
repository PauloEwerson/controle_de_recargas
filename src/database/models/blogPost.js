/** JSDoc
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const createBlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    }}, 
    {
      createdAt: 'published', // string | boolean;
      updatedAt: 'updated', // string | boolean;
      tableName: 'BlogPosts',
    });

  createBlogPost.associate = (models) => {
    createBlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    })
  }

  return createBlogPost;
};