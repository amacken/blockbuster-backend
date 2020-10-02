const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");
const config = require("../config/config");
const User = require("../models/user");

// User create route. AKA Signup:
router.post("/signup", (req, res) => {
    console.log(req.body);
    if (req.body.email && req.body.password) {
      // Hash the password:
      req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
      );
  
      User.findOne({ email: req.body.email }, (user) => {
        console.log("========findOne=======", user);
        if (!user) {
          console.log("Running create user");
          User.create(req.body, (error, createdUser) => {
            console.log("createdUser", createdUser);
            console.log("error", error);
            if (createdUser) {
              let payload = {
                id: createdUser.id,
                email: createdUser.email,
                iat: Date.now(),
              };
              console.log(payload);
              let token = jwt.encode(payload, config.jwtSecret);
              console.log(token);
              res.json({
                token: token,
              });
            } else {
              console.log("failed to create user");
              res.sendStatus(401);
            }
          });
        } else {
          console.log("User already exists, try logging in instead");
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
});

module.exports = router;