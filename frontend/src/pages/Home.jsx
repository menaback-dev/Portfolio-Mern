import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import CTA from "@/components/sections/CTA";
import GithubStats from "@/components/sections/GithubStats";
import FadeIn from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <div>
      <FadeIn>
        <Hero />
        <FeaturedProjects />
        <Experience />
        <GithubStats />
        <Skills />
        <CTA />
      </FadeIn>
    </div>
  );
}