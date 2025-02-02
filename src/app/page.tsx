"use client";

import Hero from "@/app/components/ui/Hero";
// import Timeline from "./components/ui/Timeline";
import Futter from "./components/ui/Futter";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import Jumbroton from "./components/ui/Jumbroton";

export default function Home() {
  return (
    <div>
      <div className="relative size-full items-center justify-center overflow-hidden rounded-lg border bg-background  md:shadow-xl">
        <DotPattern className={cn("[mask-image:radial-gradient(2000px_circle_at_center,white,transparent)] -z-0 opacity-50")} />
        <Hero />
        <Jumbroton />
        {/* <Timeline /> */}
      </div>

      <Futter />
    </div>
  );
}
