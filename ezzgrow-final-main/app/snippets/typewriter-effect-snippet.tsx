"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Elevate",
      className: "text-white",
    },
    {
      text: "your",
      className: "text-white",
    },
    {
      text: "Business",
      className: "text-white",
    },
    {
      text: "with",
      className: "text-white",
    },
    {
      text: "EzzGrow.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-white dark:text-neutral-200 text-xs sm:text-base  ">
        Still Scrolling? The road to freedom starts here.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link target="_blank" className="cursor-pointer" href="https://ezzgrow-payments-lab.vercel.app/">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
        See our Pricing
        </button>
        </Link>
      </div>
    </div>
  );
}
