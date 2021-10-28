'use strict';

module.exports = (sequelize, DataTypes) => {

    return sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize.UUIDV4,
        },
        appMetadata: {
            type: DataTypes.STRING,
        },
        blocked: {
            type: DataTypes.BOOLEAN,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        emailVerified: {
            type: DataTypes.BOOLEAN,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userMetadata: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        identities: {
            type: DataTypes.STRING,
        },
        lastIp: {
            type: DataTypes.STRING,
        },
        lastLogin: {
            type: DataTypes.STRING,
        },
    });
};