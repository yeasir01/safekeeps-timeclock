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
            defaultValue: DataTypes.OBJECT,
            primaryKey: true
        },
        app_metadata: {
            type: DataTypes.JSON,
        },
        blocked: {
            type: DataTypes.BOOLEAN,
        },
        email: {
            type: DataTypes.STRING,
        },
        email_verified: {
            type: DataTypes.BOOLEAN,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_metadata: {
            type: DataTypes.JSON,
        },
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User',
        timestamps: true
    });

    return User;
};