import ArrowUpRightIcon from "@/public/icons/arrow-up-right.svg";

const footerLinks = [
  { name: "Twitter", url: "http://" },
  { name: "Instagram", url: "http://" },
  { name: "Behanced", url: "http://" },
  { name: "LinkedIn", url: "http://" },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-100 w-400 bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/50 mask-[radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container">
        <div className="border-t border-black/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-black/40">&copy; 2026. All rights reserved</div>
          <nav className="flex flex-col md:flex-row  items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.name}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
