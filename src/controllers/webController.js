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
async function addOneVoteToWeb(req, res) {
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

module.exports = {
  getAllWebsProjects: getAllWebsProjects,
  addOneVoteToWeb: addOneVoteToWeb,
};
