import axios from "axios";

const publicApi = axios.create({
  baseURL: "http://localhost:5000/api",
});

export async function getProfile() {
  const res = await publicApi.get("/profile");
  return res.data;
}

export async function getProjects() {
  const res = await publicApi.get("/projects");
  return res.data;
}