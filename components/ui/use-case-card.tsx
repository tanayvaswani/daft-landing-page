interface IUseCaseCard {
  title: string;
  description: string;
}

const UseCaseCard = ({ title, description }: IUseCaseCard) => {
  return (
    <div className="border-b border-r border-violet-950 rounded-md px-12 py-8">
      <div className="font-bold text-lg pb-2 text-violet-500"># {title}</div>
      <div>{description}</div>
    </div>
  );
};

export default UseCaseCard;
