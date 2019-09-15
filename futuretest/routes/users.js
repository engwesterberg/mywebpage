var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("Welcome to this epic paggemakutt");
});

router.get("/user1", function(req, res, next) {
  res.send("This is the empire of bajsmakutt");
});

module.exports = router;
