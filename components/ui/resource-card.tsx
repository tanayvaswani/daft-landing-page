import Link from "next/link";
import { Button } from "./button";

interface IResourceCard {
  title: string;
  description: string;
  link: string;
  linkName: string;
}

const ResourceCard = ({
  title,
  description,
  link,
  linkName,
}: IResourceCard) => {
  return (
    <div className="border-2 border-violet-950 rounded-md px-6 py-8">
      <p className="font-bold">{title}</p>
      <p className="pb-2">{description}</p>
      <Link href={link}>
        <Button variant="link" className="text-violet-600 p-[-4]">{linkName}</Button>
      </Link>
    </div>
  );
};

export default ResourceCard;
