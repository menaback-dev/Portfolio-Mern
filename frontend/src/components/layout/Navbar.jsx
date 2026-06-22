import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
            to="/"
            className="font-bold text-2xl"
            >
            Mena.dev4
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-12 items-center">
          {links.map((link) => (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <ThemeToggle />

          <Button
            asChild
            size="sm"
            >
            <a
                href="/resume.pdf"
                target="_blank"
            >
                Resume
            </a>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">

          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
              >
              <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-6 mt-10 items-center">
                {links.map((link) => (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <Button className="mt-4">
                  <a href="/resume.pdf" target="_blank">Resume</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}