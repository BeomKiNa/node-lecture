const http = require("http");

const PORT = 8080;
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
  const { url, method } = req;
  if (url === "/detail") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(list));
    } else if (method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        const item = JSON.parse(bodyStr);
        list.push(item);
        console.log(list, item);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(PORT, () =>
  console.log(`🚀 Server listening: http://localhost:${PORT}`)
);
