import express from "express";
import db from "./config/database.js";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("db connected");
} catch (e) {
  console.log(e);
}

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log("server run at port 5000");
});
