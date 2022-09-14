module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
      },
      is_admin: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      }
    }
  );

  return User;
};