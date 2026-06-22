import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-xl font-bold">
              {profile.name}
            </h3>

            <p className="text-muted-foreground mt-2 leading-7">
              Backend Engineer specializing in Django,
              Django REST Framework, FastAPI,
              PostgreSQL, and scalable API systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">
              Contact Me
            </h4>

            <div className="flex gap-4">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
               <FaGithub /> 
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="hover:scale-110 transition-transform"
              >
                <TbMail />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t mt-12 pt-8 flex justify-between flex-wrap gap-4">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>

          <p className="text-sm text-muted-foreground">
            Built with React, Shadcn UI and Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}