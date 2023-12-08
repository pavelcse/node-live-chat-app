// external import
const express = require("express");

// internal import
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// login route
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
