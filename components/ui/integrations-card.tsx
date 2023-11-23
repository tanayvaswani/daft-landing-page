import Image, { StaticImageData } from "next/image";

interface IIntegrationCard {
  title: string;
  src: string | StaticImageData;
}

const IntegrationCard = ({ title, src }: IIntegrationCard) => {
  return (
    <div className="border-2 border-violet-950 rounded-md px-12 py-8">
      <p className="font-bold text-lg pb-2 text-violet-500">{title}</p>
      <Image src={src} alt="alt" />
    </div>
  );
};

export default IntegrationCard;
