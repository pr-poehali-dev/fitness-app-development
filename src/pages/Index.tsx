import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExerciseCategory from "@/components/ExerciseCategory";
import WorkoutSelectionModal from "@/components/WorkoutSelectionModal";
import {
  upperBodyExercises,
  lowerBodyExercises,
  coreExercises,
  fullBodyExercises,
} from "@/data/exercises";

const Index = () => {
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);

  const handleStartWorkout = () => {
    setIsWorkoutModalOpen(true);
  };

  const handleWorkoutSelect = (workoutType: string) => {
    setIsWorkoutModalOpen(false);
    // Здесь можно добавить логику перехода к выбранной тренировке
    console.log(`Выбрана тренировка: ${workoutType}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero onStartWorkout={handleStartWorkout} />

      <div className="py-16">
        <ExerciseCategory
          title="Верх тела"
          exercises={upperBodyExercises}
          categoryIcon="💪"
        />

        <ExerciseCategory
          title="Низ тела"
          exercises={lowerBodyExercises}
          categoryIcon="🦵"
        />

        <ExerciseCategory
          title="Кор"
          exercises={coreExercises}
          categoryIcon="🔥"
        />

        <ExerciseCategory
          title="Полное тело"
          exercises={fullBodyExercises}
          categoryIcon="⚡"
        />
      </div>

      <WorkoutSelectionModal
        isOpen={isWorkoutModalOpen}
        onClose={() => setIsWorkoutModalOpen(false)}
        onWorkoutSelect={handleWorkoutSelect}
      />
    </div>
  );
};

export default Index;
