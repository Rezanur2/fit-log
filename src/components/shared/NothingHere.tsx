import Link from "next/link";
import React from "react";

const NothingHere = () => {
  return (
    <div className="min-h-70 flex flex-col items-center justify-center space-y-6">
      <h2 className="font-oswald font-bold text-xl">NOTHING HERE YET</h2>
      <p className="text-xs text-[#A1A1AA]">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/">
        <span className="btn text-xs font-bold bg-my-brand text-black flex items-center justify-center gap-2 w-fit px-4 group">
          Go to workouts
        </span>
      </Link>
    </div>
  );
};

export default NothingHere;
