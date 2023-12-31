// external import
const express = require("express");

// internal import
const { getUsers } = require("../controller//usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// users route
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
