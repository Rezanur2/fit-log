import Link from "next/link";
import React from "react";

const NothingHere = () => {
  return (
    <div className="min-h-70 w-full flex flex-col items-center justify-center mb-5 px-8 bg-[#070808] border border-dashed border-[#222630] rounded-2xl">
      <h2 className="font-oswald font-bold text-xl mb-2">NOTHING HERE YET</h2>
      <p className="text-xs text-[#A1A1AA] mb-8">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/">
        <span className="btn text-xs font-bold bg-my-brand text-black flex items-center justify-center gap-2 w-fit py-5 px-6 group rounded-3xl">
          Go to workouts
        </span>
      </Link>
    </div>
  );
};

export default NothingHere;
