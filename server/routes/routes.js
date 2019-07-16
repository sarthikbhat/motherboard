const router = require("express").Router();
const main = require("../controllers/main");

router.get("/",main.mainpage);

module.exports = router;