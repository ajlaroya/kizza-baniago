import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";

const ToolboxItems = ({
  toolboxItems,
  className,
  itemsWrapperClassName,
}: {
  toolboxItems: { name: string; iconType: React.ElementType }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6",
          itemsWrapperClassName
        )}
      >
        {toolboxItems.map((item) => (
          <div
            key={item.name}
            className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-black/10 rounded-full"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ToolboxItems;
