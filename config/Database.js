import { Sequelize } from "sequelize";

const db = new Sequelize("course_db", "casual_user", "casual_user", {
  host: "db4free.net",
  dialect: "mysql",
});

export default db;
