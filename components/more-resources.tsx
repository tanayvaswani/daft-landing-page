import ResourceCard from "@/components/ui/resource-card";

const ResourceCardArray = [
  {
    title: "10-minutes to Daft",
    description: "10-minute walkthrough of all of Daft's major functionality.",
    link: "https://www.getdaft.io/projects/docs/en/latest/10-min.html",
    linkName: "View Walkthrough",
  },
  {
    title: "Tutorials",
    description: "Hosted examples using Daft in various common use-cases",
    link: "https://www.getdaft.io/projects/docs/en/latest/learn/tutorials.html",
    linkName: "View Tutorials",
  },
  {
    title: "Docs",
    description: "Developer documentation for referencing Daft APIs.",
    link: "https://www.getdaft.io/projects/docs/en/latest/index.html",
    linkName: " View Docs",
  },
];

const MoreResources = () => {
  return (
    <main className="flex flex-col justify-center md:mb-16 mb-6">
      <h1 className="font-bold text-3xl md:text-4xl pb-4">More Resources</h1>
      <div className="flex flex-col gap-y-2 mx-4 md:flex md:flex-row md:gap-x-2">
        {ResourceCardArray.map((obj, key) => {
          return (
            <ResourceCard
              title={obj.title}
              description={obj.description}
              link={obj.link}
              linkName={obj.linkName}
              key={key}
            />
          );
        })}
      </div>
    </main>
  );
};

export default MoreResources;
