import { experience } from "@/data/experience";
import ExperienceItem from "@/components/ui/ExperienceItem";

export default function Experience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold tracking-tight">
        Experience
      </h2>

      <p className="text-muted-foreground mt-2">
        Professional and project-based experience
      </p>

      <div className="mt-10 space-y-6">
        {experience.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}