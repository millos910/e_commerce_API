const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Product = sequelize.define('product', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    description: {
        type: DataTypes.TEXT,   
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    //? A RELACION QUE VA A TENER ESTE MODELO
    //!CategoryId
});

module.exports = Product;