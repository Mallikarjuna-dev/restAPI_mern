import axios from "axios";

const API_URL = "http://localhost:5000/api/goals/";

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

const goalService = { createGoal };

export default goalService;
