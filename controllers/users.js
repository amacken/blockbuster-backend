const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");
const config = require("../config/config");
const User = require("../models/user");

module.exports = router;