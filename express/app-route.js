import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();
const PORT = 8080;

app.use(express.json()); // REST API -> Body
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body
// app.use(express.static('path'));

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(PORT, () =>
  console.log(`🚀 Server Start! http://localhost:${PORT}`)
);
