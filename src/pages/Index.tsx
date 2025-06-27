import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExerciseCategory from "@/components/ExerciseCategory";
import WorkoutSelectionModal from "@/components/WorkoutSelectionModal";
import ExerciseList from "@/components/ExerciseList";
import {
  upperBodyExercises,
  lowerBodyExercises,
  coreExercises,
  fullBodyExercises,
} from "@/data/exercises";

const Index = () => {
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleStartWorkout = () => {
    setIsWorkoutModalOpen(true);
  };

  const handleWorkoutSelect = (workoutType: string) => {
    setIsWorkoutModalOpen(false);
    setSelectedCategory(workoutType);
  };

  const getExercisesByCategory = (category: string) => {
    switch (category) {
      case "Верх тела":
        return upperBodyExercises;
      case "Низ тела":
        return lowerBodyExercises;
      case "Кор":
        return coreExercises;
      case "Полное тело":
        return fullBodyExercises;
      default:
        return [];
    }
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {selectedCategory ? (
        <ExerciseList
          category={selectedCategory}
          exercises={getExercisesByCategory(selectedCategory)}
          onBack={handleBackToCategories}
        />
      ) : (
        <>
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
        </>
      )}

      <WorkoutSelectionModal
        isOpen={isWorkoutModalOpen}
        onClose={() => setIsWorkoutModalOpen(false)}
        onWorkoutSelect={handleWorkoutSelect}
      />
    </div>
  );
};

export default Index;

export default Index;
