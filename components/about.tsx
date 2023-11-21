import Image from "next/image";
import illustration from "@/public/daft_illustration.png";

const AboutSection = () => {
  return (
    <main className="flex flex-col justify-center items-center md:mb-16 mb-10">
      <h1 className="font-bold text-4xl pb-2 content-center">
        Daft: The Distributed Python Dataframe
      </h1>
      <p className="font-medium my-2">
        Daft is a fast and scalable Python dataframe for Complex Data and
        Machine Learning workloads.
      </p>
      <Image src={illustration} alt="illustration" />
    </main>
  );
};

export default AboutSection;
