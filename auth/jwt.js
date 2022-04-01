const jwt = require("jsonwebtoken");
// https://jwt.io/

const secret = "!HN&oc1T6hlR^hpY!YOZ^rWDFQ0%3ehr"; // https://www.lastpass.com/features/password-generator

const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  secret,
  {
    expiresIn: 2,
  }
);

// const edited =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// jwt.verify(edited, secret, (error, decoded) => {
//   console.log(error, decoded);
// });

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 5000);

console.log(token);
