import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const ChatUsers = db.define("ChatUsers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

(async () => {
  await db.sync();
})();

export default ChatUsers;
