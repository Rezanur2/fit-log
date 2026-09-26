import React from "react";
import bannerImage from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto px-6 py-12 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#121316] border border-[#222630] px-10 lg:px-14 py-14 lg:py-19 items-center rounded-2xl">
        <div className="space-y-4 lg:space-y-8 text-center md:text-left">
          <h4 className="text-my-brand font-bold text-xs md:text-sm">
            WORKOUT LIBRARY
          </h4>
          <h1 className="font-oswald leading-15 tracking-[-1.5] font-bold text-[36px] lg:text-[48px] xl:text-[60px]">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h1>
          <p className="text-sm xl:text-[16px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br className="max-lg:hidden" />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <button className="btn text-xs font-bold bg-my-brand text-black">
            BROWSE WORKOUTS
          </button>
        </div>
        <div className="flex justify-center md:justify-end w-full max-md:mt-14">
          <Image
            src={bannerImage}
            alt="Banner Image"
            className="w-full max-w-80 md:max-w-100 lg:max-w-125 h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
