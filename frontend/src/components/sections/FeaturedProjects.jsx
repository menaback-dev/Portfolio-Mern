import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-semibold tracking-tight">
        Featured Projects
      </h2>

      <p className="text-muted-foreground mt-2">
        Selected backend systems and APIs
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}