import KeyFeatureCard from "./ui/key-feature-card";

const KeyFeaturesArray = [
  {
    title: "User-Defined Functions ",
    description:
      "Daft supports running Python User-Defined Functions (UDF) on columns of Python objects - if Python supports it Daft can handle it!",
  },
  {
    title: "Interactive Computing",
    description:
      "Daft embraces Python's dynamic and interactive nature, enabling fast, iterative experimentation on data in your notebook and on your laptop.",
  },
  {
    title: "Distributed Computing",
    description:
      "Daft integrates with frameworks such as Ray to run large petabyte-scale dataframes on a cluster of machines in the cloud.",
  },
];

const KeyFeatures = () => {
  return (
    <main className="flex flex-col justify-center md:mb-16 mb-6">
      <h1 className="font-bold text-3xl md:text-4xl pb-4">Key Features</h1>
      <div className="flex flex-col gap-y-4 mx-4 md:flex md:flex-row md:gap-x-2">
        {KeyFeaturesArray.map((obj, key) => {
          return (
            <KeyFeatureCard
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

export default KeyFeatures;
