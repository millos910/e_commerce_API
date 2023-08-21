const User=require("./User")
const Product=require('./Product')
const Category = require("./Category")
const Cart = require("./Cart")
//!product -> category Id
//?estamos generando un foreingKey  
Product.belongsTo(Category) 
Category.hasMany(Product)
//!Cart  -> userId, ProductId
Cart.belongsTo(User)
User.hasMany(Cart)

Cart.belongsTo(Product)
Product.hasMany(Cart)





