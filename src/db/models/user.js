module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
      },
      isAdmin: {
        allowNull: false,
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
    }
  );

  return User;
};
