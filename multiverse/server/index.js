// This is the client server file.

// MODULES:
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// INCLUDE:

// INSTANTIATE:
const server = express();
var port = process.env.PORT || 3000;

// ROUTING:
server.use(bodyParser.json());
server.use(cors());
server.use(express.static(__dirname + "../dist"));
server.get("/", (request, response) => {
  response.end();
});
// ADD: Routes:
// GET /api/editions
// GET /api/editions/:editionId
// GET /api/editions/:editionId/cards
// GET /api/cards
// GET /api/cards/:cardId

// INITIALIZE:
server.listen(port, function() {
  console.log("listening on port 3000!");
});
