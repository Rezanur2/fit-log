"use client";
import { IWorkout } from "@/types/workout.type";
import React, { ReactNode, useState, createContext } from "react";
import { WorkoutContextType } from "./WorkoutContextType";

export const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined,
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [workoutPlans, setWorkoutPlans] = useState<IWorkout[]>([]);
  const [savedPlans, setSavedPlans] = useState<IWorkout[]>([]);

  const sharedData = {
    workoutPlans,
    setWorkoutPlans,
    savedPlans,
    setSavedPlans,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
