global.config = require("./config-dev.json");
const express = require("express");
const cors = require("cors");
const furnitureController = require("./controllers/furniture-controller");
const server = express();

server.use(cors()); 
server.use(express.json());
server.use("/", furnitureController);

server.listen(3001, () => console.log("Listening..."));
