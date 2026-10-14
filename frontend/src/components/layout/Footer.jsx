import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6">

        <div className="border-t pt-8 pb-8 flex justify-between flex-wrap gap-4">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>

          <div>
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

      </div>
    </footer>
  );
}