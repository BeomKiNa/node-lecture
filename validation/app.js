import express from "express";
import { body, validationResult } from "express-validator";

const app = express();

app.use(express.json());

app.post(
  "/users",
  [
    body("name")
      .notEmpty()
      .withMessage("이름을 입력하세요.")
      .isLength({ min: 2, max: 10 })
      .withMessage("이름은 두 글자 이상, 열 글자 이하입니다"),
    body("age").notEmpty().isInt().withMessage("숫자를 입력하세요"),
    body("email").isEmail().withMessage("이메일을 입력하시오"),
    body("job.name").notEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    console.log(req.body);
    res.statusCode(201);
  }
);

app.get(
  "/:email",
  param("email").isEmail().withMessage("이메일을 입력하시오"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    res.send("✉️");
  }
);

app.listen(8080, () => console.log(`http://localhost:8080`));
