import React from "react";
import WorkoutCard from "../shared/WorkoutCard";
import { IWorkout } from "@/types/workout.type";

const getLibraryWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const Library = async () => {
  const workoutsData = await getLibraryWorkouts();

  return (
      <div className="bg-black">
          <section
      id="library"
      className="container mx-auto px-8 pt-8 pb-16 lg:py-20  max-md:flex max-md:flex-col max-md:items-center"
    >
      <h2 className="font-oswald [line-height: 36] [letter-spacing: -0.75px] font-bold text-[30px]">
        THE LIBRARY
      </h2>
      <p className="text-gray-400 text-sm mt-1 mb-8">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-1 -center md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutsData.map((workout: IWorkout, ind: number) => {
          return <WorkoutCard key={ind} workout={workout} />;
        })}
      </div>
    </section>
    </div>
  );
};

export default Library;
