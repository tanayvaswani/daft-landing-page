"use client"

const GetStarted = () => {   
  return (
    <div className="flex flex-col justify-center md:mb-16 mb-10">
      <h1 className="font-bold text-4xl">Get Started</h1>
      <p className="font-medium mt-2 mb-4">
        You can get started with Daft by installing it with a simple command
        using pip:
      </p>
      <p className="px-6 py-4 w-full font-mono font-semibold bg-gray-700/10 rounded-sm shadow-sm shadow-violet-700 text-violet-600">
        $ pip install getdaft
      </p>
    </div>
  );
};

export default GetStarted;
