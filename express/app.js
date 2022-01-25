import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res, next) => {
  res.send("Hello!");
});

app.listen(PORT, () =>
  console.log(`🚀 Server Start! http://localhost:${PORT}`)
);
