const Router = require("express").Router;
const skillsRouter = Router();
const { skillController } = require("../controllers");

skillsRouter.get("/", skillController.getAllSkills);
skillsRouter.get("/selectedSkill/:id", skillController.getOneSkill);
skillsRouter.post("/create", skillController.createSkill);
module.exports = skillsRouter;
