import Messages from "../models/Messages.js";
import ChatUsers from "../models/ChatUsers.js";

export const sendMessage = async (req, res) => {
  console.log(req.body);
  try {
    const { receiver, subject, text, sender } = req.body;
    const message = await Messages.create({
      subject: subject,
      receiver: receiver,
      text: text,
      sender: sender,
    });
    res.status(200).send({ message });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error sending message" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const recipient = req.query.recipient;
    const messages = await Messages.findAll({
      where: { receiver: recipient },
      order: [["createdAt", "DESC"]],
    });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error getting messages" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await ChatUsers.findAll({ attributes: ["name"] });
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error getting users" });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const user = await ChatUsers.findOne({ where: { name } });

    if (user) {
      console.log("User already exists");
      return;
    }
    await ChatUsers.create({ name });
    console.log("User added to the database");
  } catch (error) {
    console.error(error);
    throw new Error("Error adding user to the database");
  }
};
