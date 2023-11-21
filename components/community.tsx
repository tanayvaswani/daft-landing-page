"use client";

import Link from "next/link";
import Card from "./ui/card";
import { EmailInput } from "./ui/email-input";
import { Github, Slack } from "lucide-react";

const Community = () => {
  return (
    <div className="flex flex-col justify-center md:mb-16 mb-6">
      <h1 className="font-bold text-4xl">Community</h1>
      <div className="flex flex-col py-4 gap-y-2 mx-4">
        <Card className="flex flex-col items-center justify-center px-4 py-10 md:py-20 w-full max-w-full text-white border-violet-900 hover:shadow-inner hover:shadow-violet-900">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-2 text-violet-600">
            Daft Blog
          </h1>
          <p className="text-center md:px-60 md:text-xl mb-2">
            Daft is a fast, Pythonic and scalable open-source dataframe library.
            Checkout{" "}
            <Link
              href="https://getdaft.io"
              className="text-violet-500 hover:font-medium"
            >
              https://getdaft.io
            </Link>
          </p>
          <p className="text-center text-sm font-light">By Sammy Sidhu</p>
          <EmailInput />
        </Card>
        <div className="flex flex-col gap-y-2 md:flex md:flex-row md:gap-x-2">
          <Card className="flex justify-center py-14 md:py-20 px-4 w-full max-w-full border-violet-900 hover:shadow-inner hover:shadow-violet-900">
            <Link
              href="https://github.com/Eventual-Inc/Daft/discussions"
              className="flex flex-col items-center"
            >
              <Github className="text-6xl"/>
              <p className="text-center font-bold hover:font-extrabold">
                Github Discussions Forums
              </p>
              <p className="text-center font-medium">
                Post questions, suggest features and more...
              </p>
            </Link>
          </Card>
          <Card className="flex justify-center py-14 md:py-20 px-4 w-full max-w-full border-violet-900 hover:shadow-inner hover:shadow-violet-900">
          <Link
              href="https://dist-data.slack.com/join/shared_invite/zt-1t44ss4za-1rtsJNIsQOnjlf8BlG05yw#/shared-invite/email"
              className="flex flex-col items-center"
            >
              <Slack className="mb-2" />
              <p className="text-center font-bold hover:font-extrabold">
              The Distributed Data Community Slack
              </p>
              <p className="text-center font-medium">
              Come chat all things distributed data!
              </p>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
