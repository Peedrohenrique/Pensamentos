const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Conectado com sucesso!");
} catch (error) {
  console.log(`Não foi possível conectar: ${error}`);
}
module.exports = sequelize;

/* 
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    }
  );
  
  try {
    sequelize.authenticate();
    console.logg("Conectado com sucesso!");
  } catch (err) {
    console.log(`Não foi possível conectar: ${err}`);
  }
  
  module.exports = sequelize;
  */
