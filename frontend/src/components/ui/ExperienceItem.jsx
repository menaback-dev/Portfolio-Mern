import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceItem({ item }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">

        <div className="flex justify-between flex-wrap gap-2">
          <h3 className="text-xl font-semibold">
            {item.role}
          </h3>
          <span className="text-sm text-muted-foreground">
            {item.period}
          </span>
        </div>

        <p className="font-medium text-primary mt-1">
          {item.company}
        </p>

        <p className="text-muted-foreground mt-3 text-sm">
          {item.description}
        </p>

        <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

      </CardContent>
    </Card>
  );
}