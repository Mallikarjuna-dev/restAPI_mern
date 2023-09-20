const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text fiels");
  }
  res.status(200).json({ message: "Create goals" });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `goal ${req.params.id} updated` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `goal ${req.params.id} deleted` });
});

module.exports = {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
};
