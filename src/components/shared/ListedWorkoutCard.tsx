import React from "react";
import { FiX, FiCheck } from "react-icons/fi";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import Image from "next/image";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";

interface ListedWorkoutCardProps {
  workout: IWorkout;
  type?: "plan" | "saved";
  onRemove?: (id: number) => void;
  onComplete?: (id: number) => void;
}

const ListedWorkoutCard = ({
  workout,
  type = "plan",
  onRemove,
  onComplete,
}: ListedWorkoutCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-end sm:items-center justify-between gap-4 bg-[#121316] border border-[#1b1c21] p-4 rounded-xl text-white w-full relative group">
      <div className="flex gap-4 items-center flex-1 min-w-0 w-full">
        <div className="relative h-30 w-30 md:h-28 md:w-36 shrink-0 overflow-hidden rounded-lg border border-[#222630]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0 text-left md:space-y-3">
          <h3 className="font-oswald text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide truncate text-white">
            {workout.name}
          </h3>
          <p className="text-xs md:text-sm text-[#525866] mt-0.5 truncate">
            {workout.equipment}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs md:text-sm text-[#8A92A0]">
            <span className="flex items-center gap-1">
              <FiClock className="text-[#a3e635]" size={13} />
              {workout.duration} min
            </span>
            <span className="flex items-center gap-1">
              <FaFire className="text-[#a3e635]" size={12} />
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <FiStar className="text-[#a3e635]" size={13} />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:justify-end sm:gap-3 w-full md:w-auto mt-3 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#1b1c21]">
        <div className="flex items-center gap-3 flex-1 md:flex-none">
          <Link
            href={`/workouts/${workout.id}`}
            className="flex-1 md:flex-none"
          >
            <button className="btn btn-sm rounded-full bg-transparent border border-[#222630] text-[#D6D8DC] hover:bg-[#1c1d24] sm:px-4 lg:px-5 lg:py-5 text-xs lg:text-sm font-normal transition-all w-full whitespace-nowrap">
              View Details
            </button>
          </Link>

          {type === "plan" && (
            <button
              onClick={() => onComplete?.(workout.id)}
              className="btn btn-sm rounded-full bg-[#a3e635] border-none text-black hover:bg-[#bef264] font-bold px-2 max-sm:py-1.5 sm:px-4 lg:px-5 lg:py-5 lg:text-sm text-xs transition-all flex items-center justify-center gap-1 flex-1 md:flex-none whitespace-nowrap"
            >
              <FiCheck size={14} className="md:size-5" />
              <span>Mark as Done</span>
            </button>
          )}

          <button
            onClick={() => onRemove?.(workout.id)}
            className="btn btn-sm lg:btn-lg btn-circle bg-transparent border-none text-[#525866] hover:text-red-500 hover:bg-red-500/10 shrink-0"
          >
            <FiX size={16} className="lg:size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedWorkoutCard;
