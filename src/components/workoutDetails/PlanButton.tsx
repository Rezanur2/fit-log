"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { WorkoutContextType } from "@/context/WorkoutContextType";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

const PlanButton = ({ workout }: { workout: IWorkout }) => {
  const { workoutPlans, setWorkoutPlans } = useContext(WorkoutContext) as WorkoutContextType;
  
  const maxSelected = 5;
  

  const handleAddToPlan = () => {
    if (workoutPlans.length >= maxSelected) {
      toast.warning("You can add a maximum of 5 workouts to today's plan.");
      return;
    }
    const existingWorkout = workoutPlans.find((plan) => plan.id === workout.id);
    if (existingWorkout) {
      toast.warning(`"${workout.name}" is already in today's plan`);
      return;
    }
      setWorkoutPlans([...workoutPlans, workout])
      toast.success(`"${workout.name}" added to today's plan`)
  };

  return (
    <button
      className="flex-1 bg-my-brand hover:bg-[#b5e600] text-[#0F1115] font-bold py-3 px-4 rounded-xl text-xs xl:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 w-full"
      onClick={() => handleAddToPlan()}
    >
      <LuCalendarPlus2 className="size-4 md:size-5 shrink-0 stroke-[2.5]" />
      <span>Add to today&apos;s plan</span>
    </button>
  );
};

export default PlanButton;
