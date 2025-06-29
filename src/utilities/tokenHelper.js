const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../configs/config");

const EncodeToken = (email, user_id) => {
  const EXPIRE = {
    expiresIn: "6h", // token will expire after 1 hour
  };
  const PAYLOAD = {
    email: email,
    user_id: user_id,
  };
  return jwt.sign(PAYLOAD, JWT_SECRET, EXPIRE);
};

const DecodeToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

module.exports = { EncodeToken, DecodeToken };

