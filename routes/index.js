import express from "express";
import { sendMessage, getMessages, getUsers, addUser } from "../controllers/actions.js";

const router = express.Router();

router.post("/sendMessage", sendMessage);
router.post("/addUser", addUser);
router.get("/getUsers", getUsers);
router.get("/getMessages", getMessages);

export default router;
