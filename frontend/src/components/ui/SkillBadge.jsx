import { Badge } from "@/components/ui/badge";

export default function SkillBadge({ name }) {
  return (
    <Badge variant="secondary" className="text-sm">
      {name}
    </Badge>
  );
}