import darkSaasLandingPage from "@/public/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/public/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/public/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import ArrowUpRightIcon from "@/public/icons/arrow-up-right.svg";
import grainImage from "@/public/images/grain.jpg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark SaaS — Design System & Landing",
    role: "Lead Product Designer",
    tools: ["Figma", "Framer", "Illustrator"],
    highlights: [
      { title: "Built a modular design system to ensure visual consistency" },
      { title: "Designed conversion-focused hero and onboarding flows" },
      { title: "Delivered high-fidelity prototypes used in user testing" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light SaaS — Brand & UI Refresh",
    role: "Brand & UI Designer",
    tools: ["Sketch", "Figma", "Principle"],
    highlights: [
      { title: "Refreshed brand language and visual assets" },
      {
        title: "Prototyped micro-interactions to improve perceived performance",
      },
      { title: "Iterated on onboarding after usability testing" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup — Product UI & Prototyping",
    role: "Lead Product Designer",
    tools: ["Figma", "Maze", "Framer"],
    highlights: [
      { title: "Designed intuitive workflows for complex product tasks" },
      { title: "Created interactive prototypes for rapid validation" },
      { title: "Improved task completion by iterating on user feedback" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Featured Designs"
          subtitle="Real-world results"
          description="Here are some of my recent design projects that showcase my skills and
          experience."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="uppercase font-bold tracking-wide bg-linear-to-r from-emerald-500 to-pink-400 text-transparent bg-clip-text inline-flex gap-2 text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-black/10 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-black/60"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{highlight.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-black/90 text-white/90 h-12 w-full md:w-auto md:px-6 rounded-3xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Design</span>
                      <ArrowUpRightIcon className="size-4 ml-2 inline-block" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
