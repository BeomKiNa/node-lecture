import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(PORT, () =>
  console.log(`🚀 Server Start! http://localhost:${PORT}`)
);
