import axios from "axios";
import { BaseURL } from "../../../Url";

// const API_URL = "http://localhost:5000/api/goals/";
const API_URL = `${BaseURL}/api/goals/`;

// Create new Goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);
  //   console.log(response);
  return response.data;
};

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  //   console.log(response);
  return response.data;
};

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + goalId, config);
  //   console.log(response);
  return response.data;
};

const goalService = { createGoal, getGoals, deleteGoal };

export default goalService;
