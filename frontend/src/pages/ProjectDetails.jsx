import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section>
      <div className="py-16">

        <img
          src={project.image}
          alt={project.title}
          className="w-lg aspect-video object-cover rounded-2xl"
        />

        <div className="mt-10">

          <p className="text-primary font-medium">
            {project.category}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-3">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground mt-6 max-w-3xl leading-8">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">

            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}

          </div>

          <div className="flex flex-wrap gap-4 mt-10">

            <Button asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View Source Code
              </a>
            </Button>

            <Button
              variant="outline"
              asChild
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </Button>

          </div>

        </div>

      </div>
      <div className="py-12">

        <h2 className="text-3xl font-bold">
          Overview
        </h2>

        <p className="text-muted-foreground leading-8 mt-6">
          {project.overview}
        </p>

      </div>
      <div className="py-12">

        <h2 className="text-3xl font-bold">
          Problem
        </h2>

        <p className="text-muted-foreground leading-8 mt-6">
          {project.problem}
        </p>

      </div>
      <div className="py-12">

        <h2 className="text-3xl font-bold">
          Solution
        </h2>

        <p className="text-muted-foreground leading-8 mt-6">
          {project.solution}
        </p>

      </div>
      <div className="py-12">

        <h2 className="text-3xl font-bold">
          Architecture
        </h2>

        <p className="text-muted-foreground leading-8 mt-6">
          {project.architecture}
        </p>

      </div>
      <div className="py-12">

        <h2 className="text-3xl font-bold">
          Challenges
        </h2>

        <ul className="mt-6 space-y-3">

          {project.challenges.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}

        </ul>

      </div>
      <div className="py-12">

        <h2 className="text-3xl font-bold">
          Results
        </h2>

        <ul className="mt-6 space-y-3">

          {project.results.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}

        </ul>

      </div>
    </section>
    
  );
}