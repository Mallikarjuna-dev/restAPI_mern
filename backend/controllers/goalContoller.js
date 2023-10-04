const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// Read request
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// Create request
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text fiels");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

// Update request
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not found");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }

  //make sure the logged in user matches to the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  const newGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(newGoal);
});

// Delete request
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("goal not found");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }

  //make sure the logged in user matches to the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  await goal.remove();
  // await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
};
