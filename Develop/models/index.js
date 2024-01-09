// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Defining associations between models

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id' // Defines a foreign key 'category_id' in the Product model referencing the Category model
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Specifies the foreign key 'category_id' in the Product model that links to the Category model
  onDelete: 'CASCADE', // Configures deletion behavior, where if a Category is deleted, all associated Products are deleted as well
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // Defines the intermediate model (ProductTag) for the many-to-many relationship
  as: 'productTag_products', // Defines an alias for the relationship
  foreignKey: 'product_id' // Specifies the foreign key 'product_id' in the ProductTag model
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // Specifies the intermediate model (ProductTag) for the many-to-many relationship
  as: 'productTag_products', // Defines alias for the relationship
  foreignKey: 'tag_id' // Specifies the foreign key 'tag_id' in the ProductTag model
}); 
//export models 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
