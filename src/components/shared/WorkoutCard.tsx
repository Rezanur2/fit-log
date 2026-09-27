import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire } from "react-icons/fa";
import { FiClock, FiStar } from "react-icons/fi";

interface IWorkoutProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutProps) => {
  return (
    <div>
      <Link href={`/workouts/${workout.id}`}>
        <div className="card w-full max-w-sm overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <figure className="relative w-full h-52 overflow-hidden">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <span className="badge badge-neutral absolute right-3 top-3 border-none bg-black/70 text-white backdrop-blur-sm">
              {workout.difficulty}
            </span>
          </figure>
          <div className="card-body gap-0 p-5">
            <div className="max-sm:mb-3 mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="badge badge-primary max-sm:badge-xs badge-sm border-none font-semibold uppercase"
                >
                  {muscle}
                </span>
              ))}
            </div>
            <h2 className="font-oswald line-clamp-1 max-sm:text-base text-xl font-extrabold uppercase tracking-wide">
              {workout.name}
            </h2>
            <p className="mt-1 max-sm:text-xs text-sm text-base-content/50">
              {workout.equipment}
            </p>
            <div className="my-4 h-px bg-base-content/10" />
            <div className="flex items-center justify-between max-sm:text-xs text-sm text-base-content/60">
              <div className="flex items-center gap-1.5">
                <FiClock className="text-base-content/50" size={16} />
                <span>{workout.duration} min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaFire className="text-orange-400" size={15} />
                <span>{workout.caloriesBurned} kcal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiStar className="text-yellow-400" size={16} />
                <span>{workout.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkoutCard;
