const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Cart = sequelize.define('cart', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //!realaciones de uno a mucho existe un solo carrito por usuario pero puede tener mdiferentes productos
    //? ===============userId================
    //? ===============productId================
});

module.exports = Cart;