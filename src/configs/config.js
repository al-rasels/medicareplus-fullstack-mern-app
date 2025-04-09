const PORT = 5500;
const WEB_CACHE = false;
const RATE_LIMIT = { windowMs: 15 * 60 * 1000, max: 3000 };
const EMAIL_CREDENTIALS = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "rm.shanto786@gmail.com",
    pass: "wxwyrfhqpppbrfoa",
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const JWT_SECRET = "RM-SHANTO-786";
const URL_ENCODED_LIMIT = { extended: true, limit: "10mb" };
const JSON_LIMIT = { limit: "10mb" };
const DB_URL =
  "mongodb+srv://<username>:<password>@cluster0.vidqntm.mongodb.net/medicareplus";
const DBOption = { user: "rmshanto786", pass: "shanto786", autoIndex: true };

module.exports = {
  PORT,
  WEB_CACHE,
  RATE_LIMIT,
  EMAIL_CREDENTIALS,
  JWT_SECRET,
  URL_ENCODED_LIMIT,
  JSON_LIMIT,
  DB_URL,
  DBOption,
};
