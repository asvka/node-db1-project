const express = require("express");
const router = require('../router/router')

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use('/accounts', router)

module.exports = server;
