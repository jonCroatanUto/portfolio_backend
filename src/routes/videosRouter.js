const Router = require("express").Router;
const videosRouter = Router();
const { videosController } = require("../controllers");

videosRouter.get("/", videosController.getAllVideos);
module.exports = videosRouter;
