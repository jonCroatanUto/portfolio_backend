const Router = require("express").Router;
const websRouter = Router();
const { webController } = require("../controllers");

websRouter.get("/", webController.getAllWebsProjects);
websRouter.post("/addWeb", webController.addWeb);
module.exports = websRouter;
