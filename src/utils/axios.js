import axios from "axios";

const isDev = process.env.NEXT_PUBLIC_MODE === "DEV";

const baseURL = isDev
  ? process.env.NEXT_PUBLIC_DEV_URL
  : process.env.NEXT_PUBLIC_PROD_URL;

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;