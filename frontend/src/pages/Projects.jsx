import { useState } from "react";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filters = [
    "All",
    ...new Set(
      projects.map(
        (project) => project.category
      )
    ),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );

  return (
    <section className="py-18">

      <h1 className="text-4xl font-bold tracking-tight">
        Projects
      </h1>

      <p className="text-muted-foreground mt-3">
        A collection of backend systems, APIs, and
        software solutions.
      </p>

      {/* Filters */}

      <div className="flex flex-wrap gap-3 mt-10">

        {filters.map((filter) => (
          <Button
            key={filter}
            variant={
              activeFilter === filter
                ? "default"
                : "outline"
            }
            onClick={() =>
              setActiveFilter(filter)
            }
          >
            {filter}
          </Button>
        ))}

      </div>

      {/* Projects */}

      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center">

          <h3 className="text-2xl font-semibold">
            No projects found
          </h3>

          <p className="text-muted-foreground mt-2">
            Try another category.
          </p>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>
      )}

    </section>
  );
}