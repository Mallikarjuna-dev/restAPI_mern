import React from "react";

const GoalItem = ({ goal }) => {
  return (
    <div className="goal">
      <div>Your goals</div>
      <div>{new Date(goal.createdAt).toLocaleString("en-Us")}</div>
      <h2>{goal.text}</h2>
    </div>
  );
};

export default GoalItem;
