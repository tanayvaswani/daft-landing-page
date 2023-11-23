interface IKeyFeatureCard {
  title: string;
  description: string;
}

const KeyFeatureCard = ({ title, description }: IKeyFeatureCard) => {
  return (
    <div className="border-b-2 md:border-r-2 border-violet-950 rounded-md px-12 md:px-4 py-8">
      <div className="font-bold lg:text-md md:text-lg pb-2 text-violet-500"># {title}</div>
      <div className="">{description}</div>
    </div>
  );
};

export default KeyFeatureCard;
