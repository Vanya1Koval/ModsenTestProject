module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define(
    'meetup',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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

  return Meetup;
};
