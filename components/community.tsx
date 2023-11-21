"use client";

import Link from "next/link";
import Card from "./ui/card";
import BentoCardWrapper from "./ui/card";
import { EmailInput } from "./ui/email-input";

const Community = () => {
  return (
    <div className="flex flex-col justify-center mb-20">
      <h1 className="font-bold text-4xl">Community</h1>
      <div className="flex flex-col py-4 gap-y-2 mx-4">
        <Card className="flex flex-col items-center justify-center py-10 md:py-20 w-full max-w-full text-white border-violet-500">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">Daft Blog</h1>
          <p className="text-center md:px-80 md:text-xl mb-2">
            Daft is a fast, Pythonic and scalable open-source dataframe library.
            Checkout{" "}
            <Link
              href="https://getdaft.io"
              className="text-violet-500 hover:font-medium "
            >
              https://getdaft.io
            </Link>
          </p>
          <p className="text-center text-sm font-light">By Sammy Sidhu</p>
          <EmailInput />
        </Card>
        <div className="flex gap-x-2">
          <Card className="flex justify-center py-20 w-full max-w-full border-violet-500">
            home
          </Card>
          <Card className="flex justify-center py-20 w-full max-w-full border-violet-500">
            Hello
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
