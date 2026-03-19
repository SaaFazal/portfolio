import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <ScrollyCanvas />
      <Projects />
      <Experience />
      <About />
      <Contact />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 flex flex-col items-center gap-2">
        <p>© {new Date().getFullYear()} Sahadh Fazal Mohamed. All rights reserved.</p>
      </footer>
    </div>
  );
}
