import Image from "next/image";
import { Inter } from "next/font/google";
import Library from "../../public/library.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="absolute inset-0 flex justify-center items-center">
      <Image src={Library} alt="Library" className="w-full " />
    </main>
  );
}
