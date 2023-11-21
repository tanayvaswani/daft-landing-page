import Image from "next/image";
import illustrationJSON from "@/public/JSON.png";
import illustration from "@/public/ils.png";

const AboutSection = () => {
  return (
    <main className="flex flex-col justify-center items-center md:mb-16 mb-6">
      <h1 className="font-bold text-3xl md:text-4xl pb-2 content-center">
        Daft: The Distributed Python Dataframe
      </h1>
      <p className="font-medium mb-4">
        Daft is a fast and scalable Python dataframe for Complex Data and
        Machine Learning workloads.
      </p>
      <Image src={illustration} alt="illustration" />
    </main>
  );
};

export default AboutSection;
