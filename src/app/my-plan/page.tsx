"use client";
import ListedWorkoutCard from "@/components/shared/ListedWorkoutCard";
import NothingHere from "@/components/shared/NothingHere";
import { WorkoutContext } from "@/context/WorkoutContext";
import { WorkoutContextType } from "@/context/WorkoutContextType";
import { IWorkout } from "@/types/workout.type";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const ListedWorkouts = () => {
  const { workoutPlans, setWorkoutPlans, savedPlans, setSavedPlans } = useContext(WorkoutContext) as WorkoutContextType;

  const handleRemovePlan = (id: number) => {
    const workout = workoutPlans.find((plan) => plan.id === id);
    const restWorkouts = workoutPlans.filter((selectedPlan) => selectedPlan.id !== id);
    setWorkoutPlans(restWorkouts);
    toast.warning(`"${workout?.name}" removed from todays's plan`);
  };

  const handleRemoveSaved = (id: number) => {
    const workout = savedPlans.find((plan) => plan.id === id);
    const restSaved = savedPlans.filter((savedPlan) => savedPlan.id !== id)
    setSavedPlans(restSaved);
    toast.warning(`"${workout?.name}" removed from saved`)
  };
  const handleComplete = (id: number) => {
    const workout = workoutPlans.find((plan) => plan.id === id);
    if (!workout) return;
    const restWorkouts = workoutPlans.filter((plan) => plan.id !== id);
    setWorkoutPlans(restWorkouts);
    toast.success(`"${workout.name}" is successfully completed`);
  };
  
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const currentWorkouts = activeTab === "plan" ? workoutPlans : savedPlans;

  const totalMinutes = currentWorkouts.reduce((total, workout) => {
    const totalMin = total + workout.duration;
    return totalMin;
  }, 0)

  const totalCalories = currentWorkouts.reduce((total, workout) => {
    const totalCal = total + workout.caloriesBurned;
    return totalCal;
  }, 0)


  return (
    <div className="bg-black text-white min-h-screen">
      <section className="container mx-auto py-6 px-8">
        <h2 className="font-oswald text-3xl font-bold">MY PLAN</h2>
        <p className="text-sm text-[#8A92A0] mt-3">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="grid grid-cols-3 justify-between px-8 py-4 my-6 bg-[#121316] border border-[#222630] rounded-2xl">
          <div className="border-r border-[#20242b] pr-6">
            <h4 className="text-[#8A92A0] text-xs">Exercises</h4>
            <p className="text-my-brand font-bold text-[36px]">{workoutPlans.length}</p>
          </div>
          <div className="border-r border-[#20242b] px-8">
            <h4 className="text-[#8A92A0] text-xs">Minutes</h4>
            <p className="font-bold text-[36px]">{totalMinutes}</p>
          </div>
          <div className="pl-8">
            <h4 className="text-[#8A92A0] text-xs">Calories</h4>
            <p className="font-bold text-[36px]">{totalCalories}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pb-10">
          <div className="flex gap-2 bg-[#121316] p-1 rounded-xl border border-[#222630]">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-4 py-2 rounded-lg text-xs font-medium font-oswald tracking-wider transition-all uppercase ${
                activeTab === "plan"
                  ? "bg-[#222630] text-my-brand"
                  : "text-[#8A92A0] hover:text-my-brand"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-2 rounded-lg text-xs font-medium font-oswald tracking-wider transition-all uppercase ${
                activeTab === "saved"
                  ? "bg-[#222630] text-my-brand"
                  : "text-[#8A92A0] hover:text-my-brand"
              }`}
            >
              Saved
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8A92A0] hidden sm:inline">Sort By</span>
            <select
              defaultValue="duration"
              className="select select-sm w-28 rounded-lg border border-[#292E37] bg-[#121316] text-xs text-[#D6D8DC] outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        <div>
          {activeTab === "plan" && (
            <div className="flex flex-col gap-4">
              {workoutPlans.length > 0 ? (
                workoutPlans.map((workout: IWorkout) => (
                  <ListedWorkoutCard key={workout.id} workout={workout} type="plan" onRemove={handleRemovePlan} onComplete={handleComplete} />
                ))
              ) : (
                <div className="flex justify-center text-center">
                  <NothingHere />
                </div>
              )}
            </div>
          )}
          {activeTab === "saved" && (
            <div className="flex flex-col gap-4">
              {savedPlans.length > 0 ? (
                savedPlans.map((workout: IWorkout) => (
                  <ListedWorkoutCard key={workout.id} workout={workout} type="saved" onRemove={handleRemoveSaved} />
                ))
              ) : (
                <div className="flex justify-center text-center">
                  <NothingHere />
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ListedWorkouts;
