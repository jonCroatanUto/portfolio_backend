const { webModel } = require("../models");

async function getAllWebsProjects(req, res) {
  try {
    const webs = await webModel.find({});
    return res.status(200).send({
      message: "this all your webs",
      data: webs,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}
async function getOneWeb(req, res) {
  const { webID } = req.params;
  console.log(webID);
  try {
    const webProject = await webModel.findById(webID);
    return res.status(200).send({
      message: "the web have been founded",
      data: webProject,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}
async function addWeb(req, res) {
  const { title, url, imageUrl, description, votes, comments } = req.body;

  try {
    const newWeb = await webModel.create({
      title: title,
      url: url,
      imageUrl: imageUrl,
      description: description,
      votes: votes,
      comments: comments,
    });
    return res.status(200).send({
      message: "the web have been created",
      data: newWeb,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}

module.exports = {
  getAllWebsProjects: getAllWebsProjects,
  getOneWeb: getOneWeb,
  addWeb: addWeb,
};
