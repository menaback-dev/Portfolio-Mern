import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-5xl font-bold">
        Let's Build Something Great
      </h2>

      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
        Open to backend development opportunities,
        freelance projects, and technical collaborations.
      </p>

      <Button
        size="lg"
        className="mt-8"
      >
        Get In Touch
      </Button>

    </section>
  );
}