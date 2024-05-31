const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { googleAPIController } = require("../controllers/googleAPIController");
const checkApiRequestLimit = require("../middlewares/checkApiRequestLimit");

const openAIRouter = express.Router();

openAIRouter.post(
  "/generate-content",
  isAuthenticated,
  checkApiRequestLimit,
  googleAPIController
);

module.exports = openAIRouter;
