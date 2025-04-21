import Awards from "@/components/Pages/Home/Awards";
import Banner from "@/components/Pages/Home/Banner";
import Courses from "@/components/Pages/Home/Courses";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      {/* <Image
        className="w-full h-[900px] object-cover"
        src="/images/hero.webp"
        alt="Next.js logo"
        width={1920}
        height={1080}
        priority
      /> */}
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="w-full h-[400px] object-cover"
            src="/images/hero.webp"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </main>
      </div> */}
      <Banner />
      {/* <Awards /> */}
      <Courses />
      <Courses />

      <Courses />

    </>
  );
}
