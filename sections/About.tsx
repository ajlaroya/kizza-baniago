"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/public/images/book-cover.png";
import JavascriptIcon from "@/public/icons/square-js.svg";
import HTMLIcon from "@/public/icons/html5.svg";
import CSSIcon from "@/public/icons/css3.svg";
import ReactIcon from "@/public/icons/react.svg";
import ChromeIcon from "@/public/icons/chrome.svg";
import GithubIcon from "@/public/icons/github.svg";
import mapImage from "@/public/images/map.png";
import smileMemoji from "@/public/images/memoji-smile.png";
import Image from "next/image";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "motion/react";
import { useRef } from "react";

const toolboxItems = [
  { name: "JavaScript", iconType: JavascriptIcon },
  { name: "HTML5", iconType: HTMLIcon },
  { name: "CSS3", iconType: CSSIcon },
  { name: "React", iconType: ReactIcon },
  { name: "Chrome", iconType: ChromeIcon },
  { name: "GitHub", iconType: GithubIcon },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "10%",
    top: "35%",
  },
  {
    title: "Photography",
    emoji: "📸",

    left: "50%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "35%",
    top: "40%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "70%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into my World"
          subtitle="About Me"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-80 md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                subtitle="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-80 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                subtitle="Explore the tools and technologies I use to design digital experiences"
                className=""
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-80 p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Design"
                subtitle="Explore my interests and hobbies beyond the world of design"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-linear-to-r from-emerald-300 to-pink-400 rounded-full py-1.5 absolute hover:cursor-grab"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-80 p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-top-left"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20  after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-300 to-pink-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-300 to-pink-400 -z-10" />
                <Image
                  src={smileMemoji}
                  alt="Smiling Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
