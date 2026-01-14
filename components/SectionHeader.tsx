const SectionHeader = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-wide bg-linear-to-r from-emerald-500 to-pink-400 text-transparent bg-clip-text text-center">
          {subtitle}
        </p>
      </div>
      <h2 className="text-3xl md:text-5xl text-center mt-6 font-semibold tracking-tight">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-black/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
export default SectionHeader;
