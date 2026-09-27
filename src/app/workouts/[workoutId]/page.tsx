import { FiArrowLeft } from "react-icons/fi";
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import PlanButton from "@/components/workoutDetails/PlanButton";
import SavePlanButton from "@/components/workoutDetails/SavePlanButton";
import { notFound } from "next/navigation";

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
);

if (!workout) {
  notFound();
}

  return (
    <div className="bg-[#0f0b0b] py-15">
      <div className="container mx-auto py-4 md:py-8 flex justify-center">
        <div className="w-full max-w-6xl bg-[#0f0b0b] text-white rounded-3xl p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 border border-gray-800">
          <div className="relative h-87.5 md:h-160 lg:h-178.5 w-full rounded-2xl overflow-hidden bg-neutral">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-gray-100 font-oswald">
                {workout.name}
              </h1>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {workout.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {workout.muscleGroups?.map((muscle:string) => (
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
                    className="flex justify-between p-2 lg:p-3 px-4 border-b border-gray-700 last:border-0"
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
                  {
                    workout.instructions.map((step: string, index: number) => (<li key={index}>{step}</li>))
                  }
                </ol>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-3 mt-3">
              <PlanButton workout={workout} />
              <SavePlanButton workout={workout} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-8xl px-2 flex justify-center max-md:pt-4">
        <Link
          href="/"
          className="btn btn-primary flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-white hover:text-my-brand transition-colors group py-2"
        >
          <FiArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Workouts</span>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
