import axios from "axios";

const client = axios.create({
  baseURL: process.env.LEADERBOARD_BACKEND_URL,
});

export default client;
