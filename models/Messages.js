import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import ChatUsers from "./ChatUsers.js";

const Messages = db.define("Messages", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  receiver: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

// ChatUsers.hasMany(Messages);
// Messages.belongsTo(ChatUsers);

(async () => {
  await db.sync();
})();

export default Messages;
