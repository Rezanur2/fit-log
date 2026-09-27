"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { WorkoutContextType } from "@/context/WorkoutContextType";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

const SavePlanButton = ({ workout }: { workout: IWorkout }) => {
  const { savedPlans, setSavedPlans } = useContext(
    WorkoutContext,
  ) as WorkoutContextType;

  const handleSavePlan = () => {
    const savedWorkout = savedPlans.find((plan) => plan.id === workout.id);
    if (savedWorkout) {
      toast.warning(`"${workout.name}" is already saved`);
      return;
    }

    setSavedPlans([...savedPlans, workout]);
    toast.info(`"${workout.name}" saved for later`);
  };

  return (
    <button
      className="flex-1 bg-transparent hover:bg-gray-800 text-[#E5E7EB] border border-gray-700 font-bold py-3 px-4 rounded-xl text-xs xl:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 w-full"
      onClick={() => handleSavePlan()}
    >
      <FiBookmark className="size-4 md:size-5 shrink-0" />
      <span>Save for later</span>
    </button>
  );
};

export default SavePlanButton;
