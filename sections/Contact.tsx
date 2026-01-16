import ArrowUpRightIcon from "@/public/icons/arrow-up-right.svg";
import grainImage from "@/public/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-linear-to-r from-emerald-300 to-pink-300 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
                Let's design something creative together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your ideas to life? Get in touch with me today
                and I can help you achieve your goals
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 border border-gray-950 inline-flex items-center gap-2 px-6 h-12 rounded-full w-max">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
