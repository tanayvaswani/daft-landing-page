import UseCaseCard from "./ui/use-case-card";

const UseCasesArray = [
  {
    title: "Data Science Experimentation",
    description:
      "Daft enables data scientists/engineers to work from their preferred Python notebook environment for interactive experimentation on complex data",
  },
  {
    title: "Complex Data Warehousing",
    description:
      "The Daft Python dataframe efficiently pipelines complex data from raw data lakes to clean, queryable datasets for analysis and reporting.",
  },
  {
    title: "Machine Learning Training Dataset Curation",
    description:
      "Modern Machine Learning is data-driven and relies on clean data. The Daft Python dataframe integrates with dataloading frameworks such as Ray and PyTorch to feed data to distributed model training.",
  },
  {
    title: "Machine Learning Model Evaluation",
    description:
      "Evaluating the performance of machine learning systems is challenging, but Daft Python dataframes make it easy to run models and SQL-style analyses at scale.",
  },
];

const UseCases = () => {
  return (
    <main className="flex flex-col justify-center md:mb-16 mb-6">
      <h1 className="font-bold text-3xl md:text-4xl pb-4">Use Cases</h1>
      <div className="flex flex-col gap-y-4 mx-4 md:flex md:gap-x-2">
        {UseCasesArray.map((obj, key) => {
          return (
            <UseCaseCard
              title={obj.title}
              description={obj.description}
              key={key}
            />
          );
        })}
      </div>
    </main>
  );
};

export default UseCases;
