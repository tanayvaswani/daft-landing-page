import IntegrationCard from "./ui/integrations-card";
import i1 from "@/public/i-1.png";
import i2 from "@/public/i-2.png";

const IntegrationCardArray = [
  {
    title: "Data Science & Machine Learning",
    description: "Python, NumPy, Pandas, R, RAY, Jupyter Notebooks, Jupyter",
    src: i1,
  },
  {
    title: "Cloud Platforms' Storage",
    description:
      "Parquet, Amazon S3, Google Cloud Storage, Microsoft Azure, Apache Arrow",
    src: i2,
  },
];

const Integrations = () => {
  return (
    <main className="flex flex-col justify-center md:mb-16 mb-6" id="integration">
      <h1 className="font-bold text-3xl md:text-4xl pb-4">Integrations</h1>
      <p className="mb-4">
        Daft is open-sourced and you can use any Python library when processing
        data in a dataframe. It integrates with many other open-sourced
        technologies as well, plugging directly into your current infrastructure
        and systems.
      </p>
      <div className="flex flex-col gap-y-2 mx-4 md:flex md:flex-row md:gap-x-2">
        {IntegrationCardArray.map((obj, key) => {
          return (
            <IntegrationCard
              title={obj.title}
              src={obj.src}
              key={key}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Integrations;
