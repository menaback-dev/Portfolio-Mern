import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.2,
      }}
      className="border rounded-2xl"
    >
    <Link to={`/projects/${project.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">

        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover"
        />

        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="text-muted-foreground mt-3 leading-7">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div>
            <Button className="mt-5 cursor-pointer">
              Project Details
            </Button>
          </div>
        </CardContent>

      </Card>
    </Link>
    </motion.div>
  );
}