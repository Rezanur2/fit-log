import { FiPlus, FiBookmark } from "react-icons/fi";
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";

interface IWorkoutDetailsPage {
  params: Promise<{
    workoutId: string;
  }>;
}

const getLibraryWorkouts = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPage) => {
  const { workoutId } = await params;
  const workoutsData = await getLibraryWorkouts();
  const workout = workoutsData.find(
    (workout: IWorkout) => workout.id === parseInt(workoutId),
  ) as IWorkout;

  return (
    <div className="bg-[#0f0b0b]">
      <div className="container mx-auto py-4 md:py-8 flex justify-center">
        <div className="w-full max-w-6xl bg-[#0f0b0b] text-white rounded-3xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-800">
          <div className="relative h-87.5 md:h-120 lg:h-160 w-full rounded-2xl overflow-hidden bg-neutral">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-gray-100 font-oswald">
                {workout.name}
              </h1>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                A compound press that builds chest thickness, triceps, and
                pressing power from a stable bench.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {workout.muscleGroups?.map((muscle) => (
                  <span
                    key={muscle}
                    className="bg-my-brand text-[#0F1115] text-xs font-semibold px-3 py-1 rounded-full uppercase"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
              <div className="mt-6 border border-gray-700 rounded-xl overflow-hidden text-sm font-bold bg-[#1E2330] text-gray-400">
                {[
                  { key: "EQUIPMENT", val: workout.equipment },
                  { key: "DIFFICULTY", val: workout.difficulty },
                  { key: "SETS", val: workout.sets },
                  { key: "REPS", val: workout.reps },
                  { key: "DURATION", val: `${workout.duration} min` },
                  { key: "CALORIES", val: `${workout.caloriesBurned} kcal` },
                  { key: "RATING", val: workout.rating },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between p-3 px-4 border-b border-gray-700 last:border-0"
                  >
                    <span className="text-gray-500 font-bold text-xs uppercase">
                      {item.key}
                    </span>
                    <span className="text-gray-300 font-medium capitalize">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-base font-extrabold uppercase tracking-wider text-white mb-2">
                  Instructions
                </h3>
                <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-[#D1D5DB]">
                  <li>
                    Lie on the bench with eyes under the bar and feet planted.
                  </li>
                  <li>
                    Unrack with locked elbows and lower the bar to mid-chest.
                  </li>
                  <li>
                    Press up in a slight arc until elbows lock without bouncing.
                  </li>
                  <li>
                    Keep shoulder blades pinched and a natural arch in the back.
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex gap-3 pt-6 mt-6">
              <button className="flex-1 bg-my-brand hover:bg-[#b5e600] text-[#0F1115] font-semibold py-3 px-4 rounded-xl text-xs md:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-1">
                <FiPlus size={16} className="stroke-3" />
                Add to today&apos;s plan
              </button>
              <button className="flex-1 bg-transparent hover:bg-gray-800 text-[#E5E7EB] border border-gray-700 font-medium py-3 px-4 rounded-xl text-xs md:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-1">
                <FiBookmark size={15} />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
