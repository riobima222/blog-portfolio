import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="bg-[#0d1117] min-h-screen p-10 text-gray-200">
      {/* HERO SECTION */}
      <div className="flex gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="max-w-[240px] lg:max-w-[300px] w-full border-[1px] border-gray-500 rounded-full overflow-hidden">
          <Image
            src={"/images/profile.jpg"}
            alt="profile-image"
            width={250}
            height={250}
            className="w-full h-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="border-[.5px] border-gray-700 rounded-md p-10 w-full">
          <div className={`${robotoMono.className} text-sm tracking-widest`}>
            Patrio Bimasuci <span>/</span> README
            <span className="text-gray-500">.md</span>
          </div>
          <div className="flex items-center gap-2 text-4xl mt-6">
            <div className="text-5xl">👋</div>
            <h2 className="italic">
              Hi, I'm <span className="font-bold">Patrio Bimasuci</span>
            </h2>
          </div>
          <hr className="mt-3 mb-2 border-gray-700" />
          <p className="px-4">
            I'm a <strong>Web Developer</strong>, and i love creating cool and
            responsive web apps, i've got about 2.5 years of experience, and I'm
            always excited to learn and grow my skill in the tech world
          </p>
        </div>
      </div>
    </div>
  );
}
