const { videosModel } = require("../models");

async function getAllVideos(req, res) {
  try {
    const videos = await videosModel.find({});
    return res.status(200).send({
      message: "this all your videos",
      data: videos,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}
async function addOneVoteToVideo(req, res) {
  const { videosID } = req.params;
  console.log(videosID);
  try {
    const videosProject = await videosModel.findById(videosID);
    return res.status(200).send({
      message: "the video have been founded",
      data: videosProject,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}

module.exports = {
  getAllVideos: getAllVideos,
  addOneVoteToVideo: addOneVoteToVideo,
};
