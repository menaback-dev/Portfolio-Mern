import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="py-20">

      <h2 className="text-3xl font-semibold">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        {Object.entries(skills).map(
          ([category, items]) => (
            <div
              key={category}
              className="border rounded-xl p-6"
            >
              <h3 className="font-semibold text-xl mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                  >
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                  </motion.div>
                ))}
              </div>

            </div>
          )
        )}

      </div>

    </section>
  );
}
