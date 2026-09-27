import { IWorkout } from "@/types/workout.type";

export interface WorkoutContextType {
  workoutPlans: IWorkout[];
    setWorkoutPlans: React.Dispatch<React.SetStateAction<IWorkout[]>>
  savedPlans: IWorkout[];
    setSavedPlans: React.Dispatch<React.SetStateAction<IWorkout[]>>
}