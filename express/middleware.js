import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
const PORT = 8080;
const corsOptions = {
  origin: ["http://127.0.0.1:5500"],
  optionsSuccessStatus: 200,
  credentials: true, // Access-Control-Allow-Credentials: true
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(helmet());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, DELETE"
//   );
// });

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  console.log(req.body); // body의 내용을 읽으려면 app.use(express.json());를 해줘야함
  console.log(req.cookies); // cookies의 내용을 읽으려면 app.use(cookieParser());를 해줘야함
  res.send("Welcome!");
});

app.listen(PORT, () =>
  console.log(`🚀 Server Start! http://localhost:${PORT}`)
);
