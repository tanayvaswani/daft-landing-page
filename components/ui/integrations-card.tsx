interface IIntegrationCard {
  title: String;
  description: String;
}

const IntegrationCard = ({ title, description }: IIntegrationCard) => {
  return (
    <div className="border-2 border-violet-950 rounded-md px-12 py-8">
      <p className="font-bold text-lg">{title}</p>
      <p className="pb-2">{description}</p>
    </div>
  );
};

export default IntegrationCard;
