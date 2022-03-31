const bcrypt = require("bcrypt");

const password = "abcd1234";
const hashed = bcrypt.hashSync(password, 10);
console.log(password, hashed);

const result = bcrypt.compareSync(password, hashed);
console.log(result);

// Salt 길이별로 성능 측정: https://auth0.com/blog/hashing-in-action-understanding-bcrypt/
