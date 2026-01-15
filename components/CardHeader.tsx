import StarIcon from "@/public/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="text-3xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-black/60 mt-2">
        {subtitle}
      </p>
    </div>
  );
};
export default CardHeader;
