import Navbar from "@/components/ui/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-[#0F1116] text-white">
        <Navbar />
      <main className="md:pl-20 pt-20 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
