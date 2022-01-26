import express from "express";

const app = express();
const PORT = 8080;

app.all("/api", (req, res, next) => {
  // 딱 작성된 주소와 일치하는 경우에만 작동
  console.log("all");
  next();
});

app.use("/sky", (req, res, next) => {
  // 작성된 주소 이하의 어떤 경로에서도 작동
  console.log("use");
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    // next(new Error("error"));
    res.send("hi");
  },
  (req, res, next) => {
    console.log("first2");
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.use((req, res, next) => {
  res.status(404).send("Not found!");
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Try later");
});

app.listen(PORT, () =>
  console.log(`🚀 Server Start! http://localhost:${PORT}`)
);
