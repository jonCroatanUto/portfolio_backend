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
async function getOneSkill(req, res) {
  const { id: skillID } = req.params;

  try {
    const skill = await skillModel.findById(skillID);
    return res.status(200).send({
      message: "the skill have been founded",
      skill: skill,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}
async function createSkill(req, res) {
  const { skill, description, votes, comments } = req.body;

  try {
    const newSkill = await skillModel.create({
      skill: skill,
      description: description,
      votes: votes,
      comments: comments,
    });
    return res.status(200).send({
      message: "the skill have been created",
      data: newSkill,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}

module.exports = {
  createSkill: createSkill,
  getAllSkills: getAllSkills,
  getOneSkill: getOneSkill,
};
