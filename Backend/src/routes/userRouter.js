const router = require("express").Router()

const userControllers=require("./../controllers/userControllers")

router.get("/people", userControllers.getAlluser)
router.delete("/people/:id", userControllers.userDelete)
router.post("/people/:id", userControllers.userPost)


module.exports = router