const Router = require("express").Router;
const videosRouter = Router();
const { videosController } = require("../controllers");

videosRouter.get("/", videosController.getAllVideos);
videosRouter.post("/addVideoAnimation", videosController.addVideoAnimation);
module.exports = videosRouter;
