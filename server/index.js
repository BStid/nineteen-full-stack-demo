require("dotenv").config();
const express = require("express"),
  app = express(),
  { SESSION_SECRET: secret, CONNECTION_STRING, PORT } = process.env,
  port = PORT || 3001,
  session = require("express-session"),
  massive = require("massive"),
  { json } = require("body-parser"),
  cors = require("cors"),
  authCtrl = require("./controllers/authCtrl"),
  masterRoutes = require("./masterRoutes");

app.use(json());
app.use(cors());
app.use(
  session({
    secret,
    saveUninitialized: true,
    resave: false
  })
);

massive(CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(console.warn);

authCtrl(app);
masterRoutes(app);

app.listen(port, () => console.log(`Listening @ port: ${port}`));
