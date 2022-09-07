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
        defaultValue: null,
        type: DataTypes.BOOLEAN
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
      }
    }
  );

  return User;
};
