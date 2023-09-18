const getGoals = (req, res) => {
  res.status(200).json({ message: "get goals" });
};

const postGoal = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Create goals" });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `goal ${req.params.id} updated` });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `goal ${req.params.id} deleted` });
};

module.exports = {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
};
