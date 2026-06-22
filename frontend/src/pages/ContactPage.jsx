import { TbMail } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <div className="py-20">

      <div className="max-w-6xl mx-auto">

        <div className="mb-16 text-center">

          <h1 className="text-5xl font-bold">
            Let's Work Together
          </h1>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project, freelance opportunity, or backend challenge?
            Get in touch.
          </p>

        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Contact Information */}

          <div className="lg:col-span-2 space-y-6">

            <div className="border rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <TbMail size={20} />

                <h3 className="font-semibold">
                  Email
                </h3>

              </div>

              <p className="mt-3 text-muted-foreground break-all">
                {profile.email}
              </p>

            </div>

            <div className="border rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <FaGithub size={20} />

                <h3 className="font-semibold">
                  GitHub
                </h3>

              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-primary"
              >
                View Profile
              </a>

            </div>

            <div className="border rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <LuMapPin size={20} />

                <h3 className="font-semibold">
                  Location
                </h3>

              </div>

              <p className="mt-3 text-muted-foreground">
                {profile.location}
              </p>

            </div>
            <div className="border rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <FaLinkedin size={20} />

                <h3 className="font-semibold">
                  Linkedin
                </h3>

              </div>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-primary"
              >
                View Profile
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}