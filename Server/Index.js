require("dotenv").config();
const express = require("express");
const massive = require("massive");
const Controller = require("./Controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

  app.use(express.json());

  app.get('/api/inventory', Controller.getAll);



const port = SERVER_PORT || 6505
app.listen(port, () => {
    console.log(`The server is listening on port ${port}.`);
});