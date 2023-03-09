import express from "express";
import router from "./routes/index.js";
import cors from "cors";
const app = express();

app.use(cors({ credentials: true, origin: ["http://localhost:3000", "https://main.d3gmh33f70aijh.amplifyapp.com"], methods: ["GET", "POST", "DELETE", "PUT"] }));
// app.options("*", cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
