const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("database", "", "", {
  dialect: "sqlite",
  storage: "./database/database.qulite",
});

sequelize
  .authenticate()
  .then((res) => {
    console.log("connected!!");
  })
  .catch((err) => {
    console.log(err);
  });
