const Router = require("express").Router;
const userRouter = Router();
const { userController } = require("../controllers");
userRouter.post("/contactWithJonEmail", userController.contactWithJonEmail);
module.exports = userRouter;
