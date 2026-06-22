import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const certifications = [
    {
      title: "ALX Professional Foundation Certificate",
      image: "/certifications/alx-foundation.png",
    },
    {
      title: "Backend Development Certificate",
      image: "/certifications/backend-certificate.png",
    },
  ];

  return (
    <div className="py-20">

      {/* Hero */}

      <section className="max-w-5xl mx-auto">

        <div className="grid lg:grid-cols-3 gap-10 items-center">

          <div>
            <img
              src={profile.image}
              alt={profile.name}
              className="rounded-2xl w-full max-w-sm mx-auto object-cover"
            />
          </div>

          <div className="lg:col-span-2">

            <p className="text-primary font-medium">
              About Me
            </p>

            <h1 className="text-5xl font-bold mt-3">
              {profile.name}
            </h1>

            <p className="text-xl text-muted-foreground mt-3">
              Backend Developer
            </p>

            <p className="mt-6 text-muted-foreground leading-8">
              I build secure, scalable, and maintainable backend systems
              using Django, Django REST Framework, FastAPI, PostgreSQL,
              and MySQL. My focus is on API development, authentication,
              database design, and software architecture.
            </p>

          </div>

        </div>

      </section>

      {/* Education */}

      <section className="max-w-5xl mx-auto py-15">

        <h2 className="text-3xl font-bold">
          Education
        </h2>

        <div className="mt-8 border rounded-2xl p-8">

          <h3 className="text-2xl font-semibold">
            Bachelor of Science in Computer Science
          </h3>

          <p className="text-primary mt-2">
            Unity University
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div>
              <p className="text-sm text-muted-foreground">
                Period
              </p>

              <p className="font-medium mt-1">
                2022 - 2026
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Degree
              </p>

              <p className="font-medium mt-1">
                Computer Science
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Exit Exam
              </p>

              <p className="font-medium mt-1">
                Pass
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Skills */}

      <section className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border rounded-2xl p-6"
            >
              <h3 className="font-semibold text-lg mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">

                {items.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Certifications */}

      <section className="max-w-5xl mx-auto py-15">

        <h2 className="text-3xl font-bold">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="border rounded-2xl overflow-hidden"
            >
              <div className="overflow-hidden rounded-xl">
  <motion.img
    whileHover={{
      scale: 1.05,
    }}
    transition={{
      duration: 0.3,
    }}
    src={cert.image}
    alt={cert.title}
    className="w-full object-contain"
  />
</div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-5xl mx-auto py-20 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Build Your Next Project?
        </h2>

        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Available for backend development, API design,
          and software engineering opportunities.
        </p>

        <div className="flex justify-center gap-4 mt-8">

          <Button asChild>
            <Link to="/contact">
              Contact Me
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
          >
            <a href="/resume.pdf">
              Download Resume
            </a>
          </Button>

        </div>

      </section>

    </div>
  );
}