const { skillModel } = require("../models");

async function getAllSkills(req, res) {
  try {
    const skills = await skillModel.find({});
    return res.status(200).send({
      message: "this all your skills",
      data: skills,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}
async function addOneVoteToSkill(req, res) {
  const { skill } = req.params;
  console.log(skill);
  try {
    const skill = await AboutMeModel.findById(videosID);
    return res.status(200).send({
      message: "the skill have been founded",
      data: skill,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}

module.exports = {
  getAllSkills: getAllSkills,
  addOneVoteToSkill: addOneVoteToSkill,
};
