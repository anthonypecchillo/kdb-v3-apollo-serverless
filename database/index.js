const Sequelize = require('sequelize');
const { DB_USERNAME, DB_PASSWORD, DB_NAME } = require('./config');

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const Region = sequelize.define('region', {
  name: {
    type: Sequelize.STRING(32),
    // allowNull: false,
  },
});

// Note: using `force: true` will drop the table if it already exists
// Region.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   return Region.create({
//     name: 'Brazil',
//   });
// });

exports.Region = Region;
