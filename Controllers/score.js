const Score = require("../model/score.js");

const getAllScores = async (req, res) => {
  try {
    console.log(req.body);
    const score = await Score.find();
    res.status(200).json(score);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createScore = async (req, res) => {
  try {
    const { first_pokemon, second_pokemon, winner, total_wins } = req.body;
    const newScore = await Score.create(req.body);
    res.status(201).json(newScore);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllScores,
  createScore,
};
