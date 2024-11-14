import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-50">
      <section className="grid grid-cols-2 h-[91.4vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className} text-purple-800`}>
            The best URL shortener in the Market
          </p>
          <p className="px-56 text-center text-lg text-purple-600">
            Bitlinks is a free and open-source URL shortening service that allows you to create short, easily shareable links.
          </p>
          <div className='flex gap-3 text-white'>
            <Link href="/shorten">
              <button className='bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg shadow-lg px-4 py-2 font-bold'>
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg shadow-lg px-4 py-2 font-bold'>
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
