import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-40 text-center">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="text-muted-foreground mt-4">
        Page not found
      </p>

      <Button asChild className="mt-8">
        <Link to="/">
          Go Home
        </Link>
      </Button>

    </section>
  );
}