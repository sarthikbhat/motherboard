const router = require("express").Router();
const main = require("../controllers/main.js");
const auth = require("../controllers/auth.js")

router.get("/",main.connection);
router.get("/dashboard",main.mainpage);
router.post("/studentlogin",auth.postStudentLogin);
router.post("/teacherlogin",auth.postTeacherLogin);

module.exports = router;