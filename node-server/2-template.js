const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const PORT = 8080;
const name = "Ki";
const list = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JS",
  },
  {
    name: "NODE",
  },
];

const server = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    ejs
      .renderFile("./template/home.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/detail") {
    ejs
      .renderFile("./template/detail.ejs", { list })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/404.ejs", { name })
      .then((data) => res.end(data));
  }
});

server.listen(PORT, () =>
  console.log(`🚀 Server listening: http://localhost:${PORT}`)
);
