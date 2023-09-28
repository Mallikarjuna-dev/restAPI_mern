"use client";

import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGoal } from "@/redux/features/goals/goalSlice";

const GoalForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  //   const

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
