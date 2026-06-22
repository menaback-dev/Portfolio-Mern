import { projects } from "@/data/projects";

export async function getProjects() {
  return projects;
}

export async function getProjectById(id) {
  return projects.find(
    (project) => project.id === Number(id)
  );
}