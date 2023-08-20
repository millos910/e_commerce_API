const User=require("./User")
const Product=require('./Product')
const Category = require("./Category")
//product -> category Id

//!estamos generando un foreingKey 
Product.belongsTo(Category) 
Category.hasMany(Product)

