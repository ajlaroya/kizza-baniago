import Image from "next/image";
import ArrowDown from "@/public/icons/arrow-down.svg";
import StarIcon from "@/public/icons/star.svg";
import SparkleIcon from "@/public/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: 'url("/images/grain.jpg")' }}
        />
        <div className="size-155 hero-ring" />
        <div className="size-205 hero-ring" />
        <div className="size-255 hero-ring" />
        <div className="size-305 hero-ring" />
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-pink-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-pink-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-pink-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-pink-300/40" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-pink-300/40" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-pink-300/40" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-pink-300/40" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <SparkleIcon className="size-3 rounded-full text-pink-300/40" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <SparkleIcon className="size-2 rounded-full text-pink-300/40" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <SparkleIcon className="size-2 rounded-full text-pink-300/40" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src="/images/memoji-computer.png"
            alt="Memoji"
            width={100}
            height={100}
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-full inline-flex text-gray-100 items-center gap-4">
            <div className="bg-pink-500 size-2.5 rounded-full animate-pulse" />
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl md:text-5xl text-center mt-8 tracking-tight font-semibold">
            Designing exceptional user experiences
          </h1>
          <p className="mt-4 text-center text-black/80 md:text-lg">
            I help customers create digital products that are both beautiful and
            functional.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-black/15 px-6 h-12 rounded-full">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-black bg-black text-gray-100 h-12 px-6 rounded-full">
            <span>🙋🏻‍♀️</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
