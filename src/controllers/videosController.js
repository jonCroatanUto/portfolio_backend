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

async function getOneVideo(req, res) {
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
async function addVideoAnimation(req, res) {
  const { title, url, imageUrl, description, votes, comments } = req.body;

  try {
    const newVideo = await videosModel.create({
      title: title,
      url: url,
      imageUrl: imageUrl,
      description: description,
      votes: votes,
      comments: comments,
    });
    return res.status(200).send({
      message: "the video have been created",
      data: newVideo,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}

module.exports = {
  getAllVideos: getAllVideos,
  getOneVideo: getOneVideo,
  addVideoAnimation: addVideoAnimation,
};
