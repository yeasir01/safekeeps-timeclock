const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate() {
           // define association here
        }
    }

    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: "users",
        modelName: "User",
        timestamps: true
    })

    return User;
};