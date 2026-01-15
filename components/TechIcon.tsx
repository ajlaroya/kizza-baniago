const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="#5ee9b5" />
          <stop offset="100%" stopColor="#fb64b6" />
        </linearGradient>
      </svg>
    </>
  );
};
export default TechIcon;
