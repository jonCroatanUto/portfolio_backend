const Router = require("express").Router;
const skillsRouter = Router();
const { skillController } = require("../controllers");

skillsRouter.get("/", skillController.getAllSkills);
module.exports = skillsRouter;
