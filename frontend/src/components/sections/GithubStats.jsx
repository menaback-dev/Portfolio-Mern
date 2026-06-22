import { FaGithub } from "react-icons/fa";
import { GitBranch, FolderGit2, Code2 } from "lucide-react";

export default function GithubStats() {
  return (
    <section className="py-5">

      <div className="flex items-center gap-3 mb-10">

        <FaGithub className="h-8 w-8" />

        <h2 className="text-3xl font-semibold tracking-tight">
          GitHub Activity
        </h2>

      </div>

      <div className="border rounded-2xl p-8 hover:shadow-md transition-shadow">


        <div className="grid md:grid-cols-3 gap-8">

          <div className="flex items-center gap-3">

            <FolderGit2 className="h-6 w-6" />

            <div>
              <p className="text-2xl font-bold">
                20+
              </p>

              <p className="text-muted-foreground text-sm">
                Repositories
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <GitBranch className="h-6 w-6" />

            <div>
              <p className="text-2xl font-bold">
                10+
              </p>

              <p className="text-muted-foreground text-sm">
                Projects
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <Code2 className="h-6 w-6" />

            <div>
              <p className="text-2xl font-bold">
                15+
              </p>

              <p className="text-muted-foreground text-sm">
                Technologies
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}