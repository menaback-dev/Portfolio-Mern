import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";


export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center py-15 relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
      <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            h-100
            w-100
            rounded-full
            bg-primary/20
            blur-[120px]
            -z-10
          "
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            {profile.role}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            {profile.headline}
          </h1>

          <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-8">
            {profile.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {profile.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 mt-10">
            <a href="/projects">
            <Button size="lg">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </a>
            <Button size="lg" variant="outline">
             <a
              href="/contact"
              >
                Contact Me
            </a> 
            </Button>
  
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Avatar className="w-80 h-80 lg:w-96 lg:h-96 border">
            <AvatarImage src={profile.image} />
            <AvatarFallback>
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </motion.div>

      </div>
    </section>
  );
}